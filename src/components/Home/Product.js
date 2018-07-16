import React from 'react';

import {
  View,
  Text,
  Button,
  Image,
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  card: {
    margin: 0,
    height: 200,
    width: '100%',
    position: 'relative',
    backgroundColor: 'white',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  imageWrapper: {
    position: 'relative',
    height: 110,
    width: '100%',
    // borderStyle: 'solid',
    // borderBottomWidth: 1,
    // borderColor: 'lightgrey',
  },
  image: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    flex: 1,
  },
  infoWrapper: {
    padding: 10,
    height: 90,
  },
  productName: {
    textAlign: 'center',
    marginBottom: 10,
  },
  button: {
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
  Picture: 'https://api-milktea-admin.azurewebsites.net/Media/Product/8ad63f0f-33a8-46a1-8f08-efd24ebb0b40.jpg',
};

const Product = ({ product = INIT_PRODUCT, addToCart }) => (
  <View style={styles.card}>
    <View style={styles.imageWrapper}>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={{ uri: product.Picture }} />
    </View>
    <View style={styles.infoWrapper}>
      <Text style={styles.productName}>{product.Name}</Text>
      <Button
        title="Add to Cart"
        onPress={() => { addToCart(product); }} />
    </View>
  </View>
);

export default Product;
