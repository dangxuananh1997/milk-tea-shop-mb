import React from 'react';

import {
  StyleSheet,
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  Alert,
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
  resetCreateOrderStatus,
} from '../../actions/createOrder';

import {
  clearCart,
} from '../../actions/cart';

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
  icon: {
    flex: 1,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  infoInput: {
    flex: 9,
    color: '#555555',
    padding: 4,
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

  componentDidUpdate(prevProps) {
    const {
      navigation,
      success,
      clearCartProps,
      resetStatusProps,
    } = this.props;

    if (prevProps.success !== true) {
      if (success) {
        Alert.alert(
          'Success',
          'Order successfully!',
          [
            {
              text: 'OK',
              onPress: () => {
                clearCartProps();
                resetStatusProps();
                navigation.goBack();
              },
            },
          ],
          { cancelable: false },
        );
      }
    }
  }

  render() {
    const {
      setCustomerNameProps,
      setContactPhoneProps,
      setDeliveryAddressProps,
      createOrderProps,
      cartProductList,
      customerName,
      contactPhone,
      deliveryAddress,
      loading,
    } = this.props;

    let totalPrice = 0;
    cartProductList.forEach((product) => {
      totalPrice += product.Price * product.Quantity;
    });

    const order = {
      TotalPrice: totalPrice,
      PaymentType: 1,
      ContactPhone: contactPhone,
      CustomerName: customerName,
      DeliveryAddress: deliveryAddress,
      CouponItemIds: [],
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
              <Icon name="user" size={20} color="#555555" style={styles.icon} />
              <TextInput
                style={styles.infoInput}
                placeholder="Name"
                underlineColorAndroid="#555555"
                selectionColor="#555555"
                onChangeText={(text) => { setCustomerNameProps(text); }} />
            </View>
            <View style={styles.infoRow}>
              <Icon name="phone" size={20} color="#555555" style={styles.icon} />
              <TextInput
                style={styles.infoInput}
                placeholder="Phone"
                keyboardType="phone-pad"
                underlineColorAndroid="#555555"
                selectionColor="#555555"
                onChangeText={(text) => { setContactPhoneProps(text); }} />
            </View>
            <View style={styles.infoRow}>
              <Icon name="map-pin" size={20} color="#555555" style={styles.icon} />
              <TextInput
                style={styles.infoInput}
                placeholder="Address"
                underlineColorAndroid="#555555"
                selectionColor="#555555"
                onChangeText={(text) => { setDeliveryAddressProps(text); }} />
            </View>
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
    success: state.createOrder.success,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    createOrderProps: bindActionCreators(createOrder, dispatch),
    setCustomerNameProps: bindActionCreators(setCustomerName, dispatch),
    setContactPhoneProps: bindActionCreators(setContactPhone, dispatch),
    setDeliveryAddressProps: bindActionCreators(setDeliveryAddress, dispatch),
    clearCartProps: bindActionCreators(clearCart, dispatch),
    resetStatusProps: bindActionCreators(resetCreateOrderStatus, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateOrder);
