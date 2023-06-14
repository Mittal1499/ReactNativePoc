import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

export default function Button({title, onPress}) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'blue',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 25,
    height: 60,
  },
  title: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});
