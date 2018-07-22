import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
} from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Icon from 'react-native-vector-icons/Feather';

import {
  selectProductVariant,
  getProductVariants,
  setProductInCartQuantity,
  resetProductInCart,
  changeAddToUpdate,
} from '../../actions/productInCart';

import {
  addToCart,
  editFromCart,
  removeFromCart,
} from '../../actions/cart';

import commonStyles from '../../styles/common';
import styles from '../../styles/productInCart';

import {
  Variants,
  QuantityPicker,
} from '../../components/ProductInCart';

import { convertToVND } from '../../tools/currencyConverter';

class ProductInCart extends React.Component {
  static navigationOptions = {
    title: 'Product',
  };

  componentDidMount() {
    const {
      resetProps,
      getProductVariantsProps,
      selectVariantProps,
      setQuantityProps,
      changeAddToUpdateProps,
      navigation,
    } = this.props;
    resetProps();
    const product = navigation.getParam('product', null);
    getProductVariantsProps(product.Id);

    // get from cart
    const selectedProductVariant = navigation.getParam('selectedVariant', null);
    const quantity = navigation.getParam('quantity', 1);
    if (selectedProductVariant != null) {
      selectVariantProps(selectedProductVariant);
      changeAddToUpdateProps(true);
    } else {
      changeAddToUpdate(false);
    }
    if (quantity) {
      setQuantityProps(quantity);
    }
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
      loading,
      isUpdate,
      addToCartProps,
      editFromCartProps,
      changeAddToUpdateProps,
      navigation,
    } = this.props;

    const product = navigation.getParam('product', null);

    return (
      <ScrollView style={commonStyles.screen}>
        <View style={styles.imageWrapper}>
          <Image
            resizeMode="contain"
            style={styles.image}
            source={{ uri: product.Picture }} />
        </View>
        <View style={styles.contentWrapper}>
          <Text style={styles.productName}>{product.Name}</Text>
          <ActivityIndicator animating={loading} color="black" />
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
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              const variant = {
                ...selectedVariant,
                Quantity: quantity,
                ProductId: product.Id,
                Name: product.Name,
                Picture: product.Picture,
              };
              if (isUpdate) {
                const selectedProductVariant = navigation.getParam('selectedVariant', null);
                editFromCartProps(selectedProductVariant.Id, variant);
              } else {
                addToCartProps(variant);
              }
              changeAddToUpdateProps(false);
              navigation.goBack();
            }}>
            <Text style={styles.buttonText}>{isUpdate ? 'Update Cart' : 'Add to Cart'}</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

function mapStateToProps(state) {
  return {
    selectedVariant: state.productInCart.selectedVariant,
    variantList: state.productInCart.variantList,
    quantity: state.productInCart.quantity,
    loading: state.productInCart.loading,
    isUpdate: state.productInCart.isUpdate,
  };
}

function mapDispathToProps(dispatch) {
  return {
    selectVariantProps: bindActionCreators(selectProductVariant, dispatch),
    getProductVariantsProps: bindActionCreators(getProductVariants, dispatch),
    setQuantityProps: bindActionCreators(setProductInCartQuantity, dispatch),
    resetProps: bindActionCreators(resetProductInCart, dispatch),
    changeAddToUpdateProps: bindActionCreators(changeAddToUpdate, dispatch),
    addToCartProps: bindActionCreators(addToCart, dispatch),
    editFromCartProps: bindActionCreators(editFromCart, dispatch),
    removeFromCartProps: bindActionCreators(removeFromCart, dispatch),
  };
}

export default connect(mapStateToProps, mapDispathToProps)(ProductInCart);
