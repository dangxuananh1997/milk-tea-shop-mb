import React from 'react';
import { View, Text } from 'react-native';

import commonStyles from '../styles/common';

class Menu extends React.Component {
  static navigationOptions = {
    title: 'Menu',
  };

  render() {
    return (
      <View style={commonStyles.screen}>
        <Text>Menu</Text>
      </View>
    );
  }
}

export default Menu;
