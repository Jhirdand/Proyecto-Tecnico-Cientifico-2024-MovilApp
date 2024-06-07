// App.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import CarrosScreen from './src/screens/carros';

const App = () => {
  return (
    <View style={styles.container}>
      <CarrosScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
