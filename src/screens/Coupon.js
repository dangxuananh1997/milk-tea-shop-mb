import React from 'react';
import { View, Text } from 'react-native';

import commonStyles from '../styles/common';

class Coupon extends React.Component {
  static navigationOptions = {
    title: 'Coupon',
  };

  render() {
    return (
      <View style={commonStyles.screen}>
        <Text>Coupon</Text>
      </View>
    );
  }
}

export default Coupon;
