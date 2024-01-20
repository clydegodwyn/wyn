import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SamplePage1Screen = () => (
  <View style={styles.container}>
    <Text>Blehhh</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SamplePage1Screen;
