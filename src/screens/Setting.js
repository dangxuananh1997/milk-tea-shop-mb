import React from 'react';
import { View, Text } from 'react-native';

import commonStyles from '../styles/common';

class Setting extends React.Component {
  static navigationOptions = {
    title: 'Setting',
  };

  render() {
    return (
      <View style={commonStyles.screen}>
        <Text>Setting</Text>
      </View>
    );
  }
}

export default Setting;
