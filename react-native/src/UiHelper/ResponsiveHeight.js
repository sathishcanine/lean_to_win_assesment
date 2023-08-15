import {Dimensions, Platform} from 'react-native';

import {StatusBar} from 'react-native';

const {width, height} = Dimensions.get('window');
const [shortDimension, longDimension] =
  width < height ? [width, height] : [height, width];

// Taking iPhone Xr ViewPort as base
const guidelineBaseWidth = 375;
let guidelineBaseHeight = 812;

if (Platform.OS == 'android') {
  const hgt = StatusBar.currentHeight;

  if (hgt !== undefined) {
    guidelineBaseHeight = guidelineBaseHeight + hgt;
  }
}

export default ResponsiveHeight = (size) => {
  return (longDimension / guidelineBaseHeight) * size;
};
