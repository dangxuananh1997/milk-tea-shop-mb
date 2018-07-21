import React from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  card: {
    margin: 0,
    height: 200,
    borderRadius: 5,
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
    fontFamily: 'source-sans-pro-regular',
    marginBottom: 10,
  },
  button: {
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 0,
    width: '100%',
    height: 40,
    backgroundColor: '#007bff',
    borderRadius: 5,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  buttonText: {
    textAlign: 'center',
    textAlignVertical: 'center',
    fontFamily: 'source-sans-pro-regular',
    fontSize: 18,
    color: 'white',
    height: '100%',
  },
});

const Product = ({ product, addToCart }) => (
  <View style={styles.card}>
    <View style={styles.imageWrapper}>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={{ uri: product.Picture }} />
    </View>
    <View style={styles.infoWrapper}>
      <Text
        style={styles.productName}
        numberOfLines={1}
        ellipsizeMode="tail">
        {product.Name}
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => { addToCart(product); }}>
        <Text style={styles.buttonText}>View</Text>
      </TouchableOpacity>
    </View>
  </View>
);

export default Product;
