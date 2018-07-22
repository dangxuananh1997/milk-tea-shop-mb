import React from 'react';

import {
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';

import { convertToVND } from '../../tools/currencyConverter';

const styles = StyleSheet.create({
  wrapper: {
    height: 60,
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
  infoWrapper: {
    flex: 6,
    paddingLeft: 10,
  },
  productName: {
    textDecorationLine: 'underline',
  },
});

const OrderDetailsItem = ({ orderDetails }) => (
  <View style={styles.wrapper}>
    <View style={styles.imageWrapper}>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={{ uri: orderDetails.ProductVariant.Picture }} />
    </View>
    <View style={styles.infoWrapper}>
      <Text style={styles.productName}>{orderDetails.ProductVariant.ProductName}</Text>
      <Text>{`Size: ${orderDetails.ProductVariant.Size === 1 ? 'S' : orderDetails.ProductVariant.Size === 2 ? 'M' : 'L'}`}</Text>
      <Text>{`${convertToVND(orderDetails.UnitPrice)} x ${orderDetails.Quantity}`}</Text>
    </View>
  </View>
);

export default OrderDetailsItem;
