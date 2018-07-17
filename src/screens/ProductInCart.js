import React from 'react';
import {
  View,
  Text,
  Image,
  Button,
} from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Icon from 'react-native-vector-icons/Feather';

import {
  selectProductVariant,
  getProductVariants,
  setProductInCartQuantity,
  resetProductInCart,
} from '../actions/productInCart';

import commonStyles from '../styles/common';
import styles from '../styles/productInCart';

import {
  Variants,
  QuantityPicker,
} from '../components/ProductInCart';

import { convertToVND } from '../tools/currencyConverter';

class ProductInCart extends React.Component {
  static navigationOptions = {
    title: 'Product',
  };

  componentDidMount() {
    const {
      resetProps,
      getProductVariantsProps,
      navigation,
    } = this.props;
    resetProps();
    const product = navigation.getParam('product', null);
    getProductVariantsProps(product ? product.Id : 11);
  }

  componentDidUpdate(prevProps) {
    const {
      selectVariantProps,
      variantList,
      selectedVariant,
    } = this.props;

    if (prevProps.variantList !== variantList && !selectedVariant) {
      if (variantList.length > 0) {
        selectVariantProps(variantList[0]);
      }
    }
  }

  render() {
    const {
      selectVariantProps,
      setQuantityProps,
      variantList,
      selectedVariant,
      quantity,
      navigation,
    } = this.props;

    const product = navigation.getParam('product', null);

    return (
      <View style={commonStyles.screen}>
        <View style={styles.imageWrapper}>
          <Image
            resizeMode="contain"
            style={styles.image}
            source={{ uri: product.Picture }} />
        </View>
        <View style={styles.contentWrapper}>
          <Text style={styles.productName}>{product.Name}</Text>
          <View style={styles.variantWrapper}>
            <Variants
              variantList={variantList}
              selectedId={selectedVariant ? selectedVariant.Id : 0}
              selectVariant={(variant) => {
                selectVariantProps(variant);
              }} />
          </View>
          <View style={styles.priceWrapper}>
            <View style={styles.priceAndQuantity}>
              <Text style={styles.price}>{selectedVariant ? convertToVND(selectedVariant.Price) : ''}</Text>
              <Icon name="x" style={styles.mul} />
              <View style={styles.quantity}>
                <QuantityPicker defaultQuantity={quantity} setQuantity={q => setQuantityProps(q)} />
              </View>
            </View>
            <View style={styles.totalPrice}>
              <Text style={styles.totalPriceText}>
                {selectedVariant ? convertToVND(selectedVariant.Price * quantity) : ''}
              </Text>
            </View>
          </View>
          <Button
            style={styles.button}
            title="Add to Cart"
            onPress={() => {}} />
        </View>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    selectedVariant: state.productInCart.selectedVariant,
    variantList: state.productInCart.variantList,
    quantity: state.productInCart.quantity,
  };
}

function mapDispathToProps(dispatch) {
  return {
    selectVariantProps: bindActionCreators(selectProductVariant, dispatch),
    getProductVariantsProps: bindActionCreators(getProductVariants, dispatch),
    setQuantityProps: bindActionCreators(setProductInCartQuantity, dispatch),
    resetProps: bindActionCreators(resetProductInCart, dispatch),
  };
}

export default connect(mapStateToProps, mapDispathToProps)(ProductInCart);
