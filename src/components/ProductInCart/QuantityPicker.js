import React from 'react';

import {
  View,
  Picker,
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 15,
  },
  picker: {
    flex: 1,
    paddingLeft: 10,
  },
});

const generateQuantity = () => {
  const quantityList = [];
  for (let i = 1; i < 100; i += 1) {
    quantityList.push(i);
  }
  return quantityList;
};

const QuantityPicker = ({ defaultQuantity = 1, setQuantity }) => {
  const quantityList = generateQuantity();

  return (
    <View style={styles.wrapper}>
      <Picker
        selectedValue={defaultQuantity}
        style={styles.picker}
        mode="dropdown"
        onValueChange={itemValue => setQuantity(itemValue)}>
        {
          quantityList.map(q => (
            <Picker.Item label={`${q}`} value={q} key={q} />
          ))
        }
      </Picker>
    </View>
  );
};

export default QuantityPicker;
