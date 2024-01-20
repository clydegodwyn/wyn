import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Image } from 'react-native';

const CustomButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.buttonStyle} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const LandingScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Image source={require('./itachi.png')} style={styles.image} />
        <Text>Hakdigididog</Text>
        <View style={styles.buttonContainer}>
          <View style={styles.fullWidthButton}>
            <CustomButton
              title="Login"
              onPress={() => navigation.navigate('Login')}
            />
          </View>
          <View style={styles.fullWidthButton}>
            <CustomButton
              title="Signup"
              onPress={() => navigation.navigate('Signup')}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 10,
  },
  buttonContainer: {
    width: '100%',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  fullWidthButton: {
    width: '100%',
    marginBottom: 10,
  },
  buttonStyle: {
    backgroundColor: '#000000', // Background color for buttons
    paddingVertical: 15,
    borderRadius: 8,
  },
  buttonText: {
    color: '#FFFFFF', // Text color for buttons
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default LandingScreen;
