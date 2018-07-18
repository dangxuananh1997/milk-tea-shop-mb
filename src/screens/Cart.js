import React from 'react';
import {
  View,
  FlatList,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { removeFromCart } from '../actions/cart';

import ProductItem from '../components/Cart/ProductItem';

import commonStyles from '../styles/common';

import { convertToVND } from '../tools/currencyConverter';

const styles = StyleSheet.create({
  flatList: {
    marginTop: 16,
  },
  item: {
    marginLeft: 16,
    marginRight: 16,
  },
  buttonWrapper: {
    paddingTop: 16,
    paddingBottom: 0,
  },
  button: {
    height: 50,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
    flexDirection: 'row',
    backgroundColor: 'white',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    margin: 16,
    marginTop: 0,
  },
  totalPrice: {
    textAlign: 'right',
    textAlignVertical: 'center',
    fontSize: 20,
    flex: 1,
  },
  buttonText: {
    flex: 1,
    textAlignVertical: 'center',
    fontSize: 20,
  },
});

class Cart extends React.Component {
  static navigationOptions = {
    title: 'Cart',
  };

  render() {
    const {
      cartProductList,
      navigation,
      removeFromCartProps,
    } = this.props;

    let totalPrice = 0;
    cartProductList.forEach((product) => {
      totalPrice += product.Price * product.Quantity;
    });

    return (
      <View style={commonStyles.screen}>
        <FlatList
          contentContainerStyle={styles.flatList}
          data={cartProductList}
          renderItem={
            ({ item }) => (
              <View style={styles.item}>
                <ProductItem
                  product={item}
                  editProduct={(productVariant) => {
                    navigation.navigate('ProductInCart', {
                      product: {
                        Id: productVariant.ProductId,
                        Name: productVariant.Name,
                        Picture: productVariant.Picture,
                      },
                      selectedVariant: {
                        Id: productVariant.Id,
                        Size: productVariant.Size,
                        Price: productVariant.Price,
                      },
                      quantity: productVariant.Quantity,
                    });
                  }}
                  deleteProduct={(productVariant) => {
                    removeFromCartProps(productVariant);
                  }} />
              </View>
            )
          }
          keyExtractor={item => `${item.Id}`} />
        <TouchableOpacity style={styles.buttonWrapper}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>
              Order
            </Text>
            <Text style={styles.totalPrice}>
              {`Total: ${convertToVND(totalPrice)}`}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    cartProductList: state.cart.cartProductList,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    removeFromCartProps: bindActionCreators(removeFromCart, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
