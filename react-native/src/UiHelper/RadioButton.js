import React from 'react';
import { PixelRatio, Pressable, StyleSheet, Text, View } from 'react-native';
import ResponsiveHeight from './ResponsiveHeight';

// import { RadioButtonProps } from './types';

export default function RadioButton({
  borderColor,
  borderSize = 2,
  color = '#444',
  containerStyle,
  description,
  descriptionStyle,
  disabled = false,
  id,
  label,
  labelStyle,
  layout = 'row',
  onPress,
  selected = false,
  size = 18,
  testID,
}) {
  // Radio button view size
  const borderWidth = PixelRatio.roundToNearestPixel(borderSize);
  const sizeHalf = PixelRatio.roundToNearestPixel(size * 0.5);
  const sizeFull = PixelRatio.roundToNearestPixel(size);

  let orientation = { flexDirection: 'row' };
  let margin = { marginLeft: 10 };

  if (layout === 'column') {
    orientation = { alignItems: 'center' };
    margin = { marginTop: 10 };
  }

  // On press Single radio button
  function handlePress() {
    if (disabled) {
      return null;
    }
    if (onPress) {
      onPress(id);
    }
  }

  return (
    <>
      <View
        style={[
          styles.container,
          orientation,
          { opacity: disabled ? 0.2 : 1 },
          containerStyle,
        ]}
        testID={testID}
      > 
       {/* Radio button Custom UI */}
        <View
          style={[
            styles.border,
            {
              borderColor: borderColor || color,
              borderWidth,
              width: sizeFull,
              height: sizeFull,
              borderRadius: sizeHalf,
            },
          ]}>
          {selected && (
            <View
              style={{
                backgroundColor: color,
                width: sizeHalf,
                height: sizeHalf,
                borderRadius: sizeHalf,
              }}
            />
          )}
        </View>
        {/* Radio button Value Custom UI */}
        {<Text style={[margin, styles.radioButtonCustomText]}>{label}</Text>}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginHorizontal: 10,
    marginVertical: 5,
  },
  border: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioButtonCustomText:{color:'black', fontSize: ResponsiveHeight(12)}
});