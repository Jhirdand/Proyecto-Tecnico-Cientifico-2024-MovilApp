// src/screens/carros.js
import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Header from '../components/Header';
import ActionButton from '../components/ActionButton';
import CardList from '../components/CardList';

const CarrosScreen = () => {
  const [cars, setCars] = useState([
    { id: 1, title: 'Hyundai Elantra', subtitle: '999-999', image: 'https://via.placeholder.com/150' },
    { id: 2, title: 'Hyundai Elantra', subtitle: '999-999', image: 'https://via.placeholder.com/150' },
    { id: 3, title: 'Hyundai Elantra', subtitle: '999-999', image: 'https://via.placeholder.com/150' },
  ]);

  const handleAddCar = () => {
    // Lógica para añadir un nuevo carro
  };

  return (
    <ScrollView style={styles.container}>
      <Header title="Mis carros" />
      <ActionButton onPress={handleAddCar} title="+ Agregar carros" />
      <CardList items={cars} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f5f5f5',
  },
});

export default CarrosScreen;
