import React from 'react';

import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import commonStyles from '../../styles/common';
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
  },
  wrapper: {
    flex: 1,
    flexDirection: 'row',
  },
  imageWrapper: {
    flex: 3,
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
    fontFamily: 'source-sans-pro-regular',
  },
  packageName: {
    fontSize: 18,
    marginBottom: 5,
    textDecorationLine: 'underline',
    fontFamily: 'source-sans-pro-regular',
  },
});

const CouponPackage = ({ couponPackage, buyPackage }) => (
  <TouchableOpacity
    style={styles.card}
    onPress={() => { buyPackage(couponPackage); }}>
    <View style={styles.wrapper}>
      <View style={styles.imageWrapper}>
        <Image
          resizeMode="cover"
          style={styles.image}
          source={{ uri: couponPackage.Picture }} />
      </View>
      <View style={styles.info}>
        <Text
          style={styles.packageName}
          numberOfLines={1}
          ellipsizeMode="tail">
          {couponPackage.Name}
        </Text>
        <Text style={commonStyles.sourceSansProRegular}>
          {`Drink Quantity: ${couponPackage.DrinkQuantity}`}
        </Text>
        <Text style={styles.totalPrice}>
          {`Price: ${convertToVND(couponPackage.Price)}`}
        </Text>
      </View>
    </View>
  </TouchableOpacity>
);

export default CouponPackage;
