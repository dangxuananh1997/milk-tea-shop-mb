import React from 'react';

import {
  View,
  Text,
  // Button,
  Image,
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  card: {
    margin: 0,
    height: 200,
    width: '100%',
    position: 'relative',
    backgroundColor: 'lightblue',
    overflow: 'hidden',
    // flex: 1,
  },
  cardImage: {
    height: '100%',
    width: 80,
    // flex: 1,
  },
  cardButton: {
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 0,
    width: '100%',
    height: 40,
  },
});

const INIT_PRODUCT = {
  Id: 1,
  Name: 'Trà sữa',
  Picture: 'http://gongcha.com.vn/wp-content/uploads/2018/02/banner-6-buoc-1-395x494.png',
};

const Product = ({ product = INIT_PRODUCT }) => (
  <View style={styles.card}>
    {/* <Image
      style={styles.cardImage}
      source={{ uri: product.Picture }} /> */}
    <Text>{product.Name}</Text>
  </View>
);

export default Product;
