import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PrimerUso from './src/screens/primer_uso';

export default function App() {
  return (
    <View style={styles.container}>
      <PrimerUso />
      <Text>oli</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
