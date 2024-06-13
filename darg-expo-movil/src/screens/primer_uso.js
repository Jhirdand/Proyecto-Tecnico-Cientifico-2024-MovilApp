import React from 'react';
import { View, Text } from 'react-native';
import Swiper from 'react-native-swiper';

const PrimerUso = () => {
  return (
    <Swiper style={styles.wrapper} showsButtons={true}>
      <View style={styles.slide}>
        <Text style={styles.text}>Slide 1</Text>
      </View>
      <View style={styles.slide}>
        <Text style={styles.text}>Slide 2</Text>
      </View>
      <View style={styles.slide}>
        <Text style={styles.text}>Slide 3</Text>
      </View>
    </Swiper>
  );
};

const styles = {
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
};

export default PrimerUso;
