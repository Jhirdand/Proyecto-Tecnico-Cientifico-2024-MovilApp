// src/components/CardList.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Card from './Card';

const CardList = ({ items }) => {
  return (
    <View style={styles.list}>
      {items.map((item) => (
        <Card key={item.id} image={item.image} title={item.title} subtitle={item.subtitle} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
});

export default CardList;
