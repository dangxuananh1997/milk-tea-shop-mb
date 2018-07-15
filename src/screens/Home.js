import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  increaseCartBadgeCount,
  decreaseCartBadgeCount,
  getProduct,
} from '../actions/home';

import commonStyles from '../styles/common';

import CartBadge from '../components/Home/CartBadge';

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
  }

  componentDidUpdate(prevProps) {
    const { badgeCount, navigation } = this.props;

    if (prevProps.badgeCount !== badgeCount) {
      navigation.setParams({ badgeCount });
    }
  }

  render() {
    return (
      <View style={commonStyles.screen} />
    );
  }
}

function mapStateToProps(state) {
  return {
    badgeCount: state.home.badgeCount,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    incCartBadgeCount: bindActionCreators(increaseCartBadgeCount, dispatch),
    decCartBadgeCount: bindActionCreators(decreaseCartBadgeCount, dispatch),
    getProductProps: bindActionCreators(getProduct, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
