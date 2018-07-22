import React from 'react';

import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Image,
  Modal,
} from 'react-native';

import commonStyles from '../../styles/common';

import { convertToVND } from '../../tools/currencyConverter';
import convertDate from '../../tools/dateConverter';

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: '#00000070',
  },
  wrapper: {
    borderRadius: 5,
    margin: 30,
    backgroundColor: 'white',
    elevation: 3,
    position: 'relative',
  },
  imageWrapper: {
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    overflow: 'hidden',
    width: '100%',
    height: 200,
    backgroundColor: 'lightblue',
  },
  image: {
    height: '100%',
    width: '100%',
  },
  infoWrapper: {
    padding: 10,
  },
  info: {
    marginBottom: 5,
  },
  packName: {
    fontSize: 20,
    textDecorationLine: 'underline',
  },
  buttonWrapper: {
    height: 50,
    width: '100%',
    flexDirection: 'row',
    padding: 5,
  },
  button: {
    elevation: 3,
    flex: 1,
    backgroundColor: '#007bff',
    margin: 5,
    borderRadius: 5,
  },
  buttonText: {
    textAlign: 'center',
    textAlignVertical: 'center',
    height: '100%',
    color: 'white',
  },
});

function getCouponStartDate() {
  const date = new Date();
  date.setUTCDate(date.getDate() + 1);
  date.setUTCHours(0);
  date.setUTCMinutes(0);
  return `${convertDate(date)}`;
}

const BuyCouponPackageModal = (
  {
    couponPackage,
    visible,
    confirmBuy,
    cancelBuy,
  },
) => (
  couponPackage
    ? (
      <Modal
        style={styles.modal}
        visible={visible}
        animationType="fade"
        onRequestClose={() => { cancelBuy(); }}
        transparent>
        <View style={styles.modal}>
          <View style={styles.wrapper}>
            <View style={styles.imageWrapper}>
              <Image
                resizeMode="cover"
                style={styles.image}
                source={{ uri: couponPackage.Picture }} />
            </View>
            <View style={styles.infoWrapper}>
              <Text style={[commonStyles.sourceSansProRegular, styles.info, styles.packName]}>
                {couponPackage.Name}
              </Text>
              <Text style={[commonStyles.sourceSansProRegular, styles.info]}>
                {`Drink Quantity: ${couponPackage.DrinkQuantity}`}
              </Text>
              <Text style={[commonStyles.sourceSansProRegular, styles.info]}>
                {`Contain: 30 coupons for 30 days\n(from ${getCouponStartDate()})`}
              </Text>
              <Text style={[commonStyles.sourceSansProRegular, styles.info]}>
                {`Price: ${convertToVND(couponPackage.Price)}`}
              </Text>
            </View>
            <View style={styles.buttonWrapper}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => { confirmBuy(couponPackage.Id); }}>
                <Text style={styles.buttonText}>Buy</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, { backgroundColor: '#6c757d' }]}
                onPress={() => { cancelBuy(); }}>
                <Text style={styles.buttonText}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    )
    : null
);

export default BuyCouponPackageModal;
