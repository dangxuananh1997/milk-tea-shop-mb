import React from 'react';
import { View, StyleSheet } from 'react-native';

import Icon from 'react-native-vector-icons/Feather';
import { Badge } from 'react-native-elements';

const styles = StyleSheet.create({
  cartBadgeContainer: {
    width: 30,
    height: 30,
    marginRight: 16,
  },
  badgeStyle: {
    width: 20,
    height: 20,
    borderRadius: 20,
    paddingLeft: 3,
    paddingRight: 3,
    backgroundColor: '#ff0000',
    position: 'absolute',
    right: 0,
  },
  icon: {
    position: 'absolute',
    left: 0,
    bottom: 0,
  },
});

const CartBadge = ({ quantity = 5 }) => (
  <View
    style={styles.cartBadgeContainer}>
    <Icon
      name="shopping-cart"
      color="gray"
      size={20}
      style={styles.icon} />
    <Badge
      containerStyle={styles.badgeStyle}
      textStyle={{ fontSize: quantity < 10 ? 14 : 12, textAlign: 'center' }}
      value={quantity} />
  </View>
);

export default CartBadge;
