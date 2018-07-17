import React from 'react';
import {
  View,
  FlatList,
  StyleSheet,
} from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { removeFromCart } from '../actions/cart';
import { editFromCart } from '../actions/productInCart';

import ProductItem from '../components/Cart/ProductItem';

import commonStyles from '../styles/common';

const styles = StyleSheet.create({
  flatList: {
    marginTop: 16,
  },
  item: {
    marginLeft: 16,
    marginRight: 16,
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
      editFromCartProps,
      removeFromCartProps,
    } = this.props;

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
                    // editFromCartProps(productVariant);
                    // navigation.navigation('ProductInCart', {})
                  }}
                  deleteProduct={(productVariant) => {
                    removeFromCartProps(productVariant);
                  }} />
              </View>
            )
          }
          keyExtractor={item => `${item.Id}`} />
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
    editFromCartProps: bindActionCreators(editFromCart, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
