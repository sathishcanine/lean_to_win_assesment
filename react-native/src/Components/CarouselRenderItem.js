import React from 'react';
import {Text, View , Dimensions} from 'react-native';
import CommonStyles from '../ComponentStyles/CommonStyles'
import RadioButton from '../UiHelper/RadioButton';
const windowHeight = Dimensions.get('window').height;

export default function CarouselRenderItem ({item})  {
  return (
    <View style={[CommonStyles.card, CommonStyles.shadowProp, {height: windowHeight*0.7,}]}>
    <View>
      <Text style={CommonStyles.questionHeading}>
        {item.questionTitle}
      </Text>
    </View>
    <Text style={CommonStyles.questionSubTitle}>
      
    {item.questionSubTitle}
    </Text>

    <View style={[CommonStyles.container, { flexDirection: 'column' }]}>
      {item.questionDes.map((button) => (
        <RadioButton
          {...button}
          key={button.id}
          selected={'1'}
          onPress={() => {}} // Onclick of a radio button action will accur here
          label={button.label}
        />
      ))}
    </View>

  </View>
  );
};