import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import commonStyles from '../styles/common';

import CartBadge from '../components/CartBadge';

class Home extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Home',
    headerRight: (
      <TouchableOpacity onPress={() => navigation.push('Cart')}>
        <CartBadge quantity={3} />
      </TouchableOpacity>
    ),
  });

  render() {
    return (
      <View style={commonStyles.screen}>
        <TouchableOpacity onPress={this.test}>
          <Text>Home</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Home;
