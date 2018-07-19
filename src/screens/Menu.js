import React from 'react';
import {
  View,
  Text,
  AsyncStorage,
  TouchableOpacity,
} from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  logOut,
} from '../actions/auth';

import commonStyles from '../styles/common';

class Menu extends React.Component {
  static navigationOptions = {
    title: 'Menu',
  };

  render() {
    const {
      navigation,
      logOutProps,
    } = this.props;

    return (
      <View style={commonStyles.screen}>
        <TouchableOpacity onPress={() => {
          logOutProps();
          AsyncStorage.multiRemove(['token', 'tokenExpiredTime']);
          navigation.navigate('AuthProcessing');
        }}>
          <Text>Log Out</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    loading: state.auth.loading,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    logOutProps: bindActionCreators(logOut, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
