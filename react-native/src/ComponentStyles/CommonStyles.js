import {
  StyleSheet,
  Dimensions
} from 'react-native';

import ResponsiveHeight from '../UiHelper/ResponsiveHeight';
const windowWidth = Dimensions.get('window').width;

// Maintain Common styles for separate components
const CommonStyles =  StyleSheet.create({
  appBar:{
    width: windowWidth, 
    height: ResponsiveHeight(60),
    backgroundColor: 'green',
    justifyContent:'center'
  },
  appBarTitle:{
    color:'white',
    fontSize: ResponsiveHeight(22),
    textAlign:'center',
    fontWeight:'bold'
  },
  carouselContainer: {
    marginTop: '15%',
  },
  questionHeading: {
    fontSize: ResponsiveHeight(22),
    fontWeight: 'bold',
    marginBottom: 13,
  },
  questionSubTitle: {
    fontSize: ResponsiveHeight(16),
    fontWeight: 'normal',
    marginBottom: 13,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 12,
    paddingVertical: 45,
    paddingHorizontal: 25,
    width: '100%',
    marginVertical: 10,
    borderColor:'#CCC',
    borderWidth:0.9
  },
  shadowProp: {
    shadowColor: '#000',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 1,
  },
});

export default CommonStyles;
