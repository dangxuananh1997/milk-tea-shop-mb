import React from 'react';

import {
  View,
  Image,
  AsyncStorage,
  StyleSheet,
} from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  setToken,
  setLoading,
  getUserInfo,
} from '../../actions/auth';

import commonStyles from '../../styles/common';

import ModalLoading from '../../components/ModalLoading';

const background = require('../../../assets/background.jpg');

const styles = StyleSheet.create({
  bgImage: {
    height: '100%',
    width: '100%',
  },
});

class AuthProcessing extends React.Component {
  async componentDidMount() {
    const {
      setLoadingProps,
      setTokenProps,
      getUserInfoProps,
    } = this.props;

    const tokenJson = await AsyncStorage.getItem('token');
    const tokenExpiredTimeString = await AsyncStorage.getItem('tokenExpiredTime');
    setLoadingProps(true);

    if (tokenJson && tokenExpiredTimeString) {
      const token = JSON.parse(tokenJson);
      const tokenExpiredTime = new Date(tokenExpiredTimeString);
      if (tokenExpiredTime > new Date()) {
        setTokenProps(token, tokenExpiredTime);
        getUserInfoProps();
      } else {
        this.navigateToScreen('SigningStack');
      }
    } else {
      this.navigateToScreen('SigningStack');
    }
  }

  componentDidUpdate(prevProps) {
    const {
      loading,
      userInfo,
    } = this.props;

    if (prevProps.loading === true && !prevProps.userInfo) {
      if (loading === false && userInfo) {
        this.navigateToScreen('Tab');
      }
    }
  }

  navigateToScreen(routeName) {
    const {
      navigation,
      setLoadingProps,
    } = this.props;

    setTimeout(() => {
      setLoadingProps(false);
      navigation.navigate(routeName);
    }, 0);
  }

  render() {
    const { loading } = this.props;

    return (
      <View style={commonStyles.screen}>
        <Image
          style={styles.bgImage}
          resizeMode="cover"
          source={background} />
        <ModalLoading loading={loading} />
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    token: state.auth.token,
    tokenExpiredTime: state.auth.tokenExpiredTime,
    userInfo: state.auth.userInfo,
    loading: state.auth.loading,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setTokenProps: bindActionCreators(setToken, dispatch),
    setLoadingProps: bindActionCreators(setLoading, dispatch),
    getUserInfoProps: bindActionCreators(getUserInfo, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthProcessing);
