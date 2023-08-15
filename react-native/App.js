import React, {useState} from 'react';
import {
  Text,
  View,
  Dimensions,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {QuestionsData} from './src/data/QuestionsData';
import CommonStyles from './src/ComponentStyles/CommonStyles'
import CarouselRenderItem from './src/Components/CarouselRenderItem';
const windowWidth = Dimensions.get('window').width;

const App = () => {
  return (
    <View>
      {/* App Bar UI */}
      <View style={CommonStyles.appBar}> 
        <Text style={CommonStyles.appBarTitle}>LearnToWin</Text>
      </View>
      {/* Question Slider */}
      <Carousel
        data={QuestionsData} // Static array data to load
        renderItem={CarouselRenderItem} // Single Question Item View
        sliderWidth={windowWidth}
        itemWidth={windowWidth * 0.65}
        inactiveSlideOpacity={0.5}
        containerCustomStyle={CommonStyles.carouselContainer}
        inactiveSlideShift={15}
        useScrollView={true}
        firstItem={1}
      />
    </View>
  );
};

export default App;