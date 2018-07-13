import React from 'react';
import { View, Text } from 'react-native';

import commonStyles from '../styles/common';

class Home extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };

  render() {
    return (
      <View style={commonStyles.screen}>
        <Text>Home</Text>
      </View>
    );
  }
}

export default Home;
