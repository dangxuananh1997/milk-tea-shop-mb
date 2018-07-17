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
  return million > 0 ? `${million}.${thousand}.${hundred} ₫` : `${thousand}.${hundred} ₫`;
}

function convertToUSD() {
}

export {
  convertToVND,
  convertToUSD,
};
