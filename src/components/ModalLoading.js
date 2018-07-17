import React from 'react';

import {
  ActivityIndicator,
  Modal,
  View,
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#00000040',
  },
  spinnerWrapper: {
    backgroundColor: '#FFFFFF',
    height: 100,
    width: 100,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});

const ModalLoading = ({ color = '#000000', loading }) => (
  <Modal
    visible={loading}
    transparent
    onRequestClose={() => { }}>
    <View style={styles.modal}>
      <View style={styles.spinnerWrapper}>
        <ActivityIndicator animating={loading} color={color} />
      </View>
    </View>
  </Modal>
);

export default ModalLoading;
