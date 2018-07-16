import React from 'react';
import {
  View,
  TouchableOpacity,
  // Text,
  FlatList,
  StyleSheet,
} from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  getProduct,
} from '../actions/home';

import commonStyles from '../styles/common';

import {
  CartBadge,
  Product,
} from '../components/Home';

const styles = StyleSheet.create({
  flatList: {
    marginTop: 5,
    paddingBottom: 15,
  },
  item: {
    flex: 1,
    margin: 10,
  },
});

class Home extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Home',
    headerRight: (
      <TouchableOpacity onPress={() => navigation.push('Cart')}>
        <CartBadge quantity={navigation.getParam('badgeCount', 0)} />
      </TouchableOpacity>
    ),
  });

  componentDidMount() {
    const { badgeCount, navigation } = this.props;
    navigation.setParams({ badgeCount });

    this.getData();
  }

  componentDidUpdate(prevProps) {
    const { badgeCount, navigation } = this.props;

    if (prevProps.badgeCount !== badgeCount) {
      navigation.setParams({ badgeCount });
    }
  }

  getData() {
    const { getProductProps } = this.props;
    getProductProps();
  }

  addToCart(product) {
    const { navigation } = this.props;
    navigation.navigate('ProductInCart', { product });
  }

  render() {
    const { productList, getProductLoading } = this.props;

    return (
      <View style={commonStyles.screen}>
        <FlatList
          contentContainerStyle={styles.flatList}
          numColumns={2}
          // add ghost product for grid display
          data={(productList.length % 2 === 0) ? productList : [...productList, { id: -1 }]}
          onRefresh={() => { this.getData(); }}
          refreshing={getProductLoading}
          renderItem={
            ({ item }) => (
              <View style={styles.item}>
                {
                  item.Id > 0
                    ? (
                      <Product
                        product={item}
                        addToCart={(product) => { this.addToCart(product); }} />
                    )
                    : null
                }
              </View>
            )
          }
          keyExtractor={item => item.Id} />
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    badgeCount: state.home.badgeCount,
    productList: state.home.productList,
    getProductLoading: state.home.getProductLoading,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getProductProps: bindActionCreators(getProduct, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
