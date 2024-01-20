import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BMIScreen = () => (
  <View style={styles.container}>
    <Text>BMI daw ni</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default BMIScreen;
