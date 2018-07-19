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
      navigation,
      setLoadingProps,
      setTokenProps,
    } = this.props;

    try {
      // await AsyncStorage.setItem('initial', 'true');
      const tokenJson = await AsyncStorage.getItem('token');
      const tokenExpiredTimeString = await AsyncStorage.getItem('tokenExpiredTime');
      setLoadingProps(true);

      if (tokenJson && tokenExpiredTimeString) {
        const token = JSON.parse(tokenJson);
        const tokenExpiredTime = new Date(tokenExpiredTimeString);
        setTokenProps(token, tokenExpiredTime);
        setLoadingProps(false);
        navigation.navigate('Tab');
        // setTimeout(() => {
        // }, 800);
      } else {
        setLoadingProps(false);
        navigation.navigate('SigningStack');
        // setTimeout(() => {
        // }, 800);
      }
    } catch (error) {
      console.log(error);
    }
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
    loading: state.auth.loading,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setTokenProps: bindActionCreators(setToken, dispatch),
    setLoadingProps: bindActionCreators(setLoading, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthProcessing);
