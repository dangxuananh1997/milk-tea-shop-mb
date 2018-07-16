import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
} from 'react-native';

import commonStyles from '../styles/common';
import Varients from '../components/Home/Varients';

const styles = StyleSheet.create({
  imageWrapper: {
    height: 150,
    width: '100%',
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
  image: {
    height: '100%',
    width: '100%',
  },
  contentWrapper: {
    flex: 1,
    padding: 16,
    paddingTop: 10,
  },
  productName: {
    textAlign: 'center',
    fontSize: 26,
    marginBottom: 10,
  },
  varientWrapper: {
    height: 100,
    width: '100%',
    paddingTop: 10,
    paddingBottom: 10,
  },
  priceAndQuantityWrapper: {
    height: 150,
    width: '100%',
    backgroundColor: 'skyblue',
    marginBottom: 16,
    marginTop: 6,
  },
  button: {
    marginTop: 16,
  },
});

class ProductInCart extends React.Component {
  static navigationOptions = {
    title: 'Product',
  };

  componentDidMount() {
  }

  render() {
    const { navigation } = this.props;
    const product = navigation.getParam('product', {
      Id: 1,
      Name: 'Hồng trà sữa',
      Picture: 'https://api-milktea-admin.azurewebsites.net/Media/Product/e553d5d4-9b1c-4e74-a212-b4fff55526a1.jpg',
    });

    return (
      <View style={commonStyles.screen}>
        <View style={styles.imageWrapper}>
          <Image
            resizeMode="contain"
            style={styles.image}
            source={{ uri: product.Picture }} />
        </View>
        <View style={styles.contentWrapper}>
          <Text style={styles.productName}>{product.Name}</Text>
          <View style={styles.varientWrapper}>
            <Varients />
          </View>
          <View style={styles.priceAndQuantityWrapper}>
            <Text>100000</Text>
          </View>
          <Button
            style={styles.button}
            title="Add to Cart"
            onPress={() => {}} />
        </View>
      </View>
    );
  }
}

export default ProductInCart;
