import React from 'react';

import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

import commonStyles from '../../styles/common';

const styles = StyleSheet.create({
  text: {

  },
});

class CreateOrder extends React.Component {
  componentDidMount() {

  }

  render() {
    return (
      <View style={commonStyles.screen}>
        <Text style={styles.text}>wtf</Text>
      </View>
    );
  }
}

export default CreateOrder;
