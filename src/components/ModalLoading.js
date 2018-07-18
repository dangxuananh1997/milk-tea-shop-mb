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
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderRadius: 5,
    height: 100,
    width: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});

const ModalLoading = ({ color = '#FFFFFF', loading }) => (
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
