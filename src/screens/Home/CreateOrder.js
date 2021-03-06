import React from 'react';

import {
  StyleSheet,
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  Picker,
} from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Icon from 'react-native-vector-icons/Feather';

import ModalLoading from '../../components/ModalLoading';

import {
  createOrder,
  setCustomerName,
  setContactPhone,
  setDeliveryAddress,
  setPaymentType,
  resetCreateOrderStatus,
} from '../../actions/createOrder';

import {
  clearCart,
} from '../../actions/cart';

import {
  getUserCouponList,
} from '../../actions/coupon';

import { showSnackbar } from '../../actions/snackbar';

import commonStyles from '../../styles/common';

import { convertToVND } from '../../tools/currencyConverter';

const styles = StyleSheet.create({
  kav: {
    flex: 1,
  },
  orderInfoCard: {
    margin: 16,
    marginBottom: 0,
    padding: 10,
    borderRadius: 5,
    backgroundColor: 'white',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  infoRow: {
    height: 40,
    flexDirection: 'row',
  },
  pickerRow: {
    marginTop: -12,
    marginBottom: 10,
  },
  pickerIcon: {
    textAlignVertical: 'bottom',
  },
  icon: {
    flex: 1,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  infoInput: {
    flex: 9,
    padding: 4,
  },
  paymentType: {
    flex: 3,
    textAlign: 'left',
    textAlignVertical: 'bottom',
    paddingLeft: 4,
  },
  pickerWrapper: {
    flex: 6,
    padding: 4,
    paddingBottom: 0,
  },
  totalPriceWrapper: {
    margin: 4,
    marginTop: 30,
    borderTopWidth: 1,
  },
  totalPrice: {
    textAlign: 'right',
    fontSize: 20,
  },
  button: {
    height: 40,
    margin: 16,
    borderRadius: 5,
    backgroundColor: 'white',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  buttonText: {
    textAlign: 'center',
    textAlignVertical: 'center',
    height: '100%',
    fontSize: 20,
  },
});

class CreateOrder extends React.Component {
  static navigationOptions = {
    title: 'Create Order',
  };

  componentWillMount() {
    const {
      setCustomerNameProps,
      setContactPhoneProps,
      setDeliveryAddressProps,
      userInfo,
      availableCoupons,
      getUserCouponListProps,
    } = this.props;

    setCustomerNameProps(userInfo.FullName ? userInfo.FullName : '');
    setContactPhoneProps(userInfo.Phone ? userInfo.Phone : '');
    setDeliveryAddressProps(userInfo.Address ? userInfo.Address : '');
    if (availableCoupons.length === 0) {
      getUserCouponListProps();
    }
  }

  componentDidUpdate(prevProps) {
    const {
      navigation,
      success,
      clearCartProps,
      resetStatusProps,
      showSnackbarProps,
      getUserCouponListProps,
    } = this.props;

    if (prevProps.success !== true) {
      if (success === true) {
        showSnackbarProps('Order successfully!');
        clearCartProps();
        getUserCouponListProps();
        resetStatusProps();
        navigation.popToTop();
      } else if (success === false) {
        showSnackbarProps('Order failed!');
      }
    }
  }

  render() {
    const {
      setCustomerNameProps,
      setContactPhoneProps,
      setDeliveryAddressProps,
      setPaymentTypeProps,
      createOrderProps,
      cartProductList,
      customerName,
      contactPhone,
      deliveryAddress,
      paymentType,
      availableCoupons,
      loading,
    } = this.props;

    let totalPrice = 0;
    let totalQuantity = 0;
    cartProductList.forEach((product) => {
      totalPrice += product.Price * product.Quantity;
      totalQuantity += product.Quantity;
    });

    const paymentTypes = [
      { label: 'Cash (COD)', value: 1 },
      { label: 'Card', value: 3 },
    ];

    const availableCouponsModified = [...availableCoupons].filter(c => c.DrinkQuantity >= totalQuantity);

    if (availableCouponsModified.length > 0) {
      paymentTypes.push({ label: 'Coupon', value: 2 });
    }

    const order = {
      TotalPrice: totalPrice,
      PaymentType: paymentType,
      ContactPhone: contactPhone,
      CustomerName: customerName,
      DeliveryAddress: deliveryAddress,
      CouponItemIds: (paymentType !== 2 && availableCouponsModified) ? [] : [availableCouponsModified[0].Id],
      OrderDetails: cartProductList.map(
        pv => ({
          ProductVariantId: pv.Id,
          UnitPrice: pv.Price,
          Quantity: pv.Quantity,
        }),
      ),
    };

    return (
      <View style={commonStyles.screen}>
        <ModalLoading loading={loading} />
        <KeyboardAvoidingView behavior="padding" style={styles.kav}>
          <View style={styles.orderInfoCard}>
            <View style={styles.infoRow}>
              <Icon name="user" size={20} color="#000000" style={styles.icon} />
              <TextInput
                style={styles.infoInput}
                placeholder="Name"
                value={customerName}
                underlineColorAndroid="#000000"
                selectionColor="#000000"
                onChangeText={(text) => { setCustomerNameProps(text); }} />
            </View>
            <View style={styles.infoRow}>
              <Icon name="phone" size={20} color="#000000" style={styles.icon} />
              <TextInput
                style={styles.infoInput}
                placeholder="Phone"
                value={contactPhone}
                keyboardType="phone-pad"
                underlineColorAndroid="#000000"
                selectionColor="#000000"
                onChangeText={(text) => { setContactPhoneProps(text); }} />
            </View>
            <View style={styles.infoRow}>
              <Icon name="map-pin" size={20} color="#000000" style={styles.icon} />
              <TextInput
                style={styles.infoInput}
                placeholder="Address"
                value={deliveryAddress}
                underlineColorAndroid="#000000"
                selectionColor="#000000"
                onChangeText={(text) => { setDeliveryAddressProps(text); }} />
            </View>
            <View style={[styles.infoRow, styles.pickerRow]}>
              <Icon name="credit-card" size={20} color="#000000" style={[styles.icon, styles.pickerIcon]} />
              <Text style={styles.paymentType}>Payment Type: </Text>
              <View style={styles.pickerWrapper}>
                <Picker
                  selectedValue={paymentType}
                  mode="dropdown"
                  onValueChange={itemValue => setPaymentTypeProps(itemValue)}>
                  {
                    paymentTypes.map(type => <Picker.Item label={type.label} value={type.value} key={type.value} />)
                  }
                </Picker>
              </View>
            </View>
            {
              paymentType === 2
              && (
                <View style={[styles.infoRow, styles.pickerRow]}>
                  <Icon name="tag" size={20} color="#000000" style={[styles.icon, styles.pickerIcon]} />
                  <Text style={styles.paymentType}>Coupon: </Text>
                  <View style={styles.pickerWrapper}>
                    <Picker
                      selectedValue={availableCoupons[0].Id}
                      mode="dropdown"
                      onValueChange={(itemValue) => {
                        order.CouponItemIds = [];
                        order.CouponItemIds.push(itemValue);
                      }}>
                      {
                        availableCouponsModified.map(c => <Picker.Item label={`${c.DateExpired} - Drink Quantity: ${c.DrinkQuantity}`} value={c.Id} key={c.Id} />)
                      }
                    </Picker>
                  </View>
                </View>
              )
            }
            <View style={styles.totalPriceWrapper}>
              <Text style={styles.totalPrice}>
                {`Total: ${convertToVND(totalPrice)}`}
              </Text>
            </View>
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              createOrderProps(order);
            }}>
            <Text style={styles.buttonText}>Order</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    cartProductList: state.cart.cartProductList,
    loading: state.createOrder.loading,
    customerName: state.createOrder.customerName,
    contactPhone: state.createOrder.contactPhone,
    deliveryAddress: state.createOrder.deliveryAddress,
    paymentType: state.createOrder.paymentType,
    success: state.createOrder.success,
    userInfo: state.auth.userInfo,
    userCouponPackageList: state.coupon.userCouponPackageList,
    availableCoupons: state.coupon.availableCoupons,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    createOrderProps: bindActionCreators(createOrder, dispatch),
    setCustomerNameProps: bindActionCreators(setCustomerName, dispatch),
    setContactPhoneProps: bindActionCreators(setContactPhone, dispatch),
    setDeliveryAddressProps: bindActionCreators(setDeliveryAddress, dispatch),
    setPaymentTypeProps: bindActionCreators(setPaymentType, dispatch),
    clearCartProps: bindActionCreators(clearCart, dispatch),
    resetStatusProps: bindActionCreators(resetCreateOrderStatus, dispatch),
    showSnackbarProps: bindActionCreators(showSnackbar, dispatch),
    getUserCouponListProps: bindActionCreators(getUserCouponList, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateOrder);
