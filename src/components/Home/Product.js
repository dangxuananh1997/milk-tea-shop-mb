import React from 'react';

import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  container: {

  },
});

const Product = ({ product }) => (
  <View styles={styles.container}>
    <Text>{product}</Text>
  </View>
);

export default Product;
