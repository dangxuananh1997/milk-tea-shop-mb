import React from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

let selectedId = 0;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  item: {
    // flex: 1,
    width: '30%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 5,
    // borderColor: 'white',
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

const INIT_VARIENTS = [
  {
    Id: 1,
    Size: 0,
    Price: 123456789,
  },
  {
    Id: 2,
    Size: 1,
    Price: 99999,
  },
  {
    Id: 3,
    Size: 2,
    Price: 1000000,
  },
];

function convertToVND(value) {
  const million = Math.floor(value / 1000000);
  let thousand = Math.floor((value - million * 1000000) / 1000);
  let hundred = (value - million * 1000000) - thousand * 1000;
  if (million > 0) {
    if (thousand < 100 && thousand >= 10) {
      thousand = `0${thousand}`;
    } else if (thousand < 100 && thousand < 10 && thousand > 0) {
      thousand = `00${thousand}`;
    } else if (thousand === 0) {
      thousand = '000';
    }
  }
  if (hundred < 100 && hundred >= 10) {
    hundred = `0${hundred}`;
  } else if (hundred < 100 && hundred < 10 && hundred > 0) {
    hundred = `00${hundred}`;
  } else if (hundred === 0) {
    hundred = '000';
  }
  return million > 0 ? `${million}.${thousand}.${hundred}` : `${thousand}.${hundred}`;
}

const Varients = ({ varientList = INIT_VARIENTS, selectedId = 0, selectVarient }) => {
  let selectedIdTemp = selectedId;
  return (
    <View style={styles.wrapper}>
      {
        varientList.map(varient => (
          <TouchableOpacity
            style={[styles.item, { borderColor: varient.Id === selectedIdTemp ? 'blue' : 'white' }]}
            key={varient.Id}
            onPress={() => {
              selectedIdTemp = varient.Id;
              // selectVarient(varient.Id);
            }}>
            <View>
              <Text style={styles.sizeName}>{varient.Size === 0 ? 'S' : varient.Size === 1 ? 'M' : 'L'}</Text>
              <Text style={styles.price}>{`${convertToVND(varient.Price)} ₫`}</Text>
            </View>
          </TouchableOpacity>))
      }
    </View>
  );
};

export default Varients;
