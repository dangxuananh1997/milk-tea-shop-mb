import React from 'react';
import { View, Text } from 'react-native';

import commonStyles from '../styles/common';

class Cart extends React.Component {
  static navigationOptions = {
    title: 'Cart',
  };

  render() {
    return (
      <View style={commonStyles.screen}>
        <Text>Cart</Text>
      </View>
    );
  }
}

export default Cart;
