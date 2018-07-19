import React from 'react';

import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  KeyboardAvoidingView,
  AsyncStorage,
  StyleSheet,
} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  setUsername,
  setPassword,
  logIn,
} from '../../actions/auth';

import commonStyles from '../../styles/common';

const background = require('../../../assets/background.jpg');

const styles = StyleSheet.create({
  bgImage: {
    height: '100%',
    width: '100%',
    position: 'absolute',
  },
  kav: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  header: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
  },
  inputWrapper: {
    height: 200,
    padding: 20,
    margin: 20,
    marginBottom: 50,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 5,
  },
  textInput: {
    height: 40,
    padding: 4,
    color: 'white',
  },
  button: {
    marginTop: 10,
    height: 40,
    padding: 10,
    borderRadius: 5,
    width: '100%',
    backgroundColor: '#F9AA33',
  },
  icon: {
    textAlign: 'center',
  },
});

class SignIn extends React.Component {
  componentDidUpdate() {
    const {
      navigation,
      token,
      tokenExpiredTime,
    } = this.props;

    if (token) {
      AsyncStorage.setItem('token', JSON.stringify(token));
      AsyncStorage.setItem('tokenExpiredTime', tokenExpiredTime.toString());
      navigation.navigate('Tab');
    }
  }

  render() {
    const {
      username,
      password,
      loading,
      setUsernameProps,
      setPasswordProps,
      logInProps,
    } = this.props;

    return (
      <View style={commonStyles.screen}>
        <Image
          style={styles.bgImage}
          resizeMode="cover"
          source={background} />
        <KeyboardAvoidingView behavior="padding" style={styles.kav}>
          <View style={styles.inputWrapper}>
            <Text style={styles.header}>LOG IN</Text>
            <TextInput
              style={styles.textInput}
              selectionColor="white"
              underlineColorAndroid="white"
              placeholder="Phone"
              onChangeText={(text) => { setUsernameProps(text); }} />
            <TextInput
              style={styles.textInput}
              selectionColor="white"
              underlineColorAndroid="white"
              placeholder="Password"
              secureTextEntry
              onChangeText={(text) => { setPasswordProps(text); }} />
            <TouchableOpacity
              style={styles.button}
              onPress={() => { logInProps(username, password); }}>
              {
                loading
                  ? <ActivityIndicator loading={loading} size="small" color="white" />
                  : (
                    <Icon
                      style={styles.icon}
                      name="log-in"
                      size={20}
                      color="white" />)
              }
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    username: state.auth.username,
    password: state.auth.password,
    loading: state.auth.loading,
    token: state.auth.token,
    tokenExpiredTime: state.auth.tokenExpiredTime,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setUsernameProps: bindActionCreators(setUsername, dispatch),
    setPasswordProps: bindActionCreators(setPassword, dispatch),
    logInProps: bindActionCreators(logIn, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
