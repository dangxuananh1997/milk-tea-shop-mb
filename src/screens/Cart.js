import React from 'react';
import { View, Text } from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import commonStyles from '../styles/common';

class Cart extends React.Component {
  static navigationOptions = {
    title: 'Cart',
  };

  render() {
    return (
      <View style={commonStyles.screen}>
        <Text>Cart</Text>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    // productList: state.cart.productList,r
  };
}

function mapDispatchToProps(dispatch) {
  return {

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
