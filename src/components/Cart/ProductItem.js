import React from 'react';

import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';

import { convertToVND } from '../../tools/currencyConverter';

const styles = StyleSheet.create({
  card: {
    height: 110,
    width: '100%',
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
    marginBottom: 16,
  },
  wrapper: {
    flex: 1,
    flexDirection: 'row',
  },
  imageWrapper: {
    flex: 2,
    borderRightWidth: 1,
    borderColor: 'lightgrey',
  },
  image: {
    height: '100%',
    width: '100%',
  },
  info: {
    flex: 4,
    padding: 10,
  },
  totalPrice: {
    borderTopWidth: 1,
    borderColor: 'lightgrey',
    marginTop: 5,
    paddingTop: 5,
    fontSize: 18,
  },
  buttonsWrapper: {
    flex: 1,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
  },
  icon: {
    textAlign: 'center',
  },
});

const ProductItem = ({ product, editProduct, deleteProduct }) => (
  <View style={styles.card}>
    <View style={styles.wrapper}>
      <View style={styles.imageWrapper}>
        <Image
          resizeMode="contain"
          style={styles.image}
          source={{ uri: product.Picture }} />
      </View>
      <View style={styles.info}>
        <Text
          numberOfLines={1}
          ellipsizeMode="tail">
          {product.Name}
        </Text>
        <Text>
          {`Size: ${product.Size === 0 ? 'S' : product.Size === 1 ? 'M' : 'L'}`}
        </Text>
        <Text>
          {`Price: ${convertToVND(product.Price)} x ${product.Quantity}`}
        </Text>
        <Text style={styles.totalPrice}>
          {`Total: ${convertToVND(product.Price * product.Quantity)}`}
        </Text>
      </View>
      <View style={styles.buttonsWrapper}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => editProduct(product)}>
          <Icon name="edit" size={20} color="black" style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => deleteProduct(product)}>
          <Icon name="trash-2" size={20} color="black" style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  </View>
);

export default ProductItem;
