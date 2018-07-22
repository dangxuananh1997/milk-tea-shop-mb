import React from 'react';

import {
  StyleSheet,
  KeyboardAvoidingView,
  Image,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import { ImagePicker } from 'expo';

import Icon from 'react-native-vector-icons/Feather';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  setFullName,
  setPhone,
  setAddress,
  setAvatar,
  updateProfile,
  reset,
} from '../../actions/profile';

import {
  getUserInfo,
} from '../../actions/auth';

import {
  showSnackbar,
} from '../../actions/snackbar';

import ModalLoading from '../../components/ModalLoading';

import commonStyles from '../../styles/common';

const styles = StyleSheet.create({
  kav: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  wrapper: {
    marginBottom: 20,
  },
  avatarContainer: {
    width: '100%',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 20,
  },
  avatarWrapper: {
    height: 180,
    width: 180,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#555555',
  },
  avatar: {
    height: '100%',
    width: '100%',
  },
  edit: {
    position: 'absolute',
    right: 5,
    top: 5,
    width: 30,
    height: 30,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    borderRadius: 5,
  },
  editIcon: {
    height: '100%',
    width: '100%',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  infoWrapper: {
    margin: 16,
    paddingTop: 10,
    paddingBottom: 20,
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: 'white',
    elevation: 3,
  },
  infoRow: {
    height: 50,
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 0,
    flexDirection: 'row',
  },
  icon: {
    flex: 1,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  info: {
    flex: 9,
    padding: 4,
  },
  buttonWrapper: {
    height: 40,
    width: '100%',
    paddingHorizontal: 10,
    flexDirection: 'row',
  },
  button: {
    elevation: 3,
    flex: 1,
    backgroundColor: '#007bff',
    margin: 6,
    marginTop: 0,
    borderRadius: 5,
  },
  buttonText: {
    textAlign: 'center',
    textAlignVertical: 'center',
    height: '100%',
    color: 'white',
  },
});

class Profile extends React.Component {
  static navigationOptions = {
    title: 'Profile',
  };

  componentWillMount() {
    const {
      setFullNameProps,
      setPhoneProps,
      setAddressProps,
      userInfo,
    } = this.props;

    setFullNameProps(userInfo.FullName);
    setPhoneProps(userInfo.Phone);
    setAddressProps(userInfo.Address);
  }

  componentDidUpdate(prevProps) {
    const {
      updateSuccess,
      showSnackbarProps,
      getUserInfoProps,
      resetProps,
      navigation,
    } = this.props;

    if (prevProps.updateSuccess == null && updateSuccess != null) {
      navigation.goBack();
      showSnackbarProps(updateSuccess ? 'Update successfully!' : 'Update failed!');
      getUserInfoProps();
      resetProps();
    }
  }

  pickImage = async () => {
    const { setAvatarProps } = this.props;
    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [1, 1],
      base64: true,
    });

    if (!result.cancelled) {
      setAvatarProps(result.base64);
    }
  };

  render() {
    const {
      navigation,
      userInfo,
      fullName,
      phone,
      address,
      avatar,
      loading,
      setFullNameProps,
      setPhoneProps,
      setAddressProps,
      updateProfileProps,
    } = this.props;

    return (
      <View style={commonStyles.screen}>
        <ModalLoading loading={loading} />
        <KeyboardAvoidingView style={styles.kav} behavior="position">
          <View style={styles.wrapper}>
            <View style={styles.avatarContainer}>
              <View style={styles.avatarWrapper}>
                <Image
                  style={styles.avatar}
                  resizeMode="cover"
                  source={{ uri: avatar === '' ? userInfo.Avatar : `data:image/png;base64,${avatar}` }} />
                <TouchableOpacity
                  style={styles.edit}
                  onPress={() => { this.pickImage(); }}>
                  <Icon name="edit-2" size={25} color="white" style={styles.editIcon} />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.infoWrapper}>
              <View style={styles.infoRow}>
                <Icon name="user" size={25} color="black" style={styles.icon} />
                <TextInput
                  style={styles.info}
                  value={fullName}
                  underlineColorAndroid="black"
                  selectionColor="black"
                  placeholder="Full Name"
                  onChangeText={(text) => { setFullNameProps(text); }} />
              </View>
              <View style={styles.infoRow}>
                <Icon name="phone" size={25} color="black" style={styles.icon} />
                <TextInput
                  style={styles.info}
                  value={phone}
                  underlineColorAndroid="black"
                  selectionColor="black"
                  keyboardType="numeric"
                  placeholder="Phone"
                  onChangeText={(text) => { setPhoneProps(text); }} />
              </View>
              <View style={styles.infoRow}>
                <Icon name="map-pin" size={25} color="black" style={styles.icon} />
                <TextInput
                  style={styles.info}
                  value={address}
                  underlineColorAndroid="black"
                  selectionColor="black"
                  placeholder="Address"
                  onChangeText={(text) => { setAddressProps(text); }} />
              </View>
            </View>
            <View style={styles.buttonWrapper}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => { updateProfileProps(fullName, phone, address, avatar); }}>
                <Text style={styles.buttonText}>Update</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, { backgroundColor: '#6c757d' }]}
                onPress={() => { navigation.goBack(); }}>
                <Text style={styles.buttonText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    fullName: state.profile.fullName,
    phone: state.profile.phone,
    address: state.profile.address,
    avatar: state.profile.avatar,
    loading: state.profile.loading,
    updateSuccess: state.profile.updateSuccess,
    userInfo: state.auth.userInfo,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setFullNameProps: bindActionCreators(setFullName, dispatch),
    setPhoneProps: bindActionCreators(setPhone, dispatch),
    setAddressProps: bindActionCreators(setAddress, dispatch),
    setAvatarProps: bindActionCreators(setAvatar, dispatch),
    updateProfileProps: bindActionCreators(updateProfile, dispatch),
    getUserInfoProps: bindActionCreators(getUserInfo, dispatch),
    resetProps: bindActionCreators(reset, dispatch),
    showSnackbarProps: bindActionCreators(showSnackbar, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
