import React from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import { convertToVND } from '../../tools/currencyConverter';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'row',
  },
  item: {
    width: '30%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: 'white',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  sizeName: {
    fontSize: 40,
    textAlign: 'center',
  },
  price: {
    textAlign: 'center',
  },
});

const Variants = ({ variantList = [], selectedId = 1, selectVariant }) => (
  <View style={[styles.wrapper, { justifyContent: variantList.length === 3 ? 'space-between' : 'flex-start' }]}>
    {
      variantList.sort((a, b) => a.Size - b.Size) // sort S, M, L
        .map(variant => (
          <TouchableOpacity
            style={[
              styles.item,
              {
                borderColor: variant.Id === selectedId ? '#007bff' : 'white',
                marginRight: variantList.length === 3 ? 0 : 10,
              },
            ]}
            key={variant.Id}
            onPress={() => {
              selectVariant(variant);
            }}>
            <View>
              <Text style={styles.sizeName}>{variant.Size === 0 ? 'S' : variant.Size === 1 ? 'M' : 'L'}</Text>
              <Text style={styles.price}>{`${convertToVND(variant.Price)}`}</Text>
            </View>
          </TouchableOpacity>))
    }
  </View>
);

export default Variants;
