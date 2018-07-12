import React from 'react';
import { View, Text } from 'react-native';

import commonStyles from './../styles/common';

export default class Settings extends React.Component {

  render() {
    return (
      <View style={commonStyles.screen}>
        <Text>Settings</Text>
      </View>
    );
  }
  
}