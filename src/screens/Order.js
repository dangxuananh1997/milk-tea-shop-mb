import React from 'react';
import { View, Text } from 'react-native';

import commonStyles from '../styles/common';

class Order extends React.Component {
  static navigationOptions = {
    title: 'Order',
  };

  render() {
    return (
      <View style={commonStyles.screen}>
        <Text>Order</Text>
      </View>
    );
  }
}

export default Order;
