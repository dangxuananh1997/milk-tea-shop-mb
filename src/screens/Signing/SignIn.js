import React from 'react';

import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  StyleSheet,
} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';

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
  componentDidMount() {

  }

  render() {
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
              placeholder="Phone" />
            <TextInput
              style={styles.textInput}
              selectionColor="white"
              underlineColorAndroid="white"
              placeholder="Password"
              secureTextEntry />
            <TouchableOpacity style={styles.button}>
              <Icon
                style={styles.icon}
                name="log-in"
                size={20}
                color="white" />
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </View>
    );
  }
}

export default SignIn;
