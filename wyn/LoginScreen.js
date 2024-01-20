import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Text } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Perform authentication logic here (compare with stored credentials)
    // For simplicity, let's assume authentication is successful
    navigation.navigate('HomeTabs'); // Use navigate instead of replace
  };

  const handleSignup = () => {
    navigation.navigate('Signup'); // Navigate to Signup page
  };

  const handleAccountRecovery = () => {
    navigation.navigate('AccountRecovery'); // Navigate to Account Recovery page
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
        style={styles.input}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <Text style={styles.link} onPress={handleSignup}>
        <Text style={styles.linkText}>Sign Up</Text>
      </Text>
      <Text style={styles.link} onPress={handleAccountRecovery}>
        <Text style={styles.linkText}>Forgot Password?</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    margin: 10,
    width: '80%',
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#000',
    borderRadius: 5,
    paddingVertical: 12,
    paddingHorizontal: 10,
    marginTop: 10,
    width: '80%', // Matching the width of text inputs
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  link: {
    marginTop: 10,
  },
  linkText: {
    color: 'black',
    textDecorationLine: 'underline',
    fontWeight: 'bold',
  },
});

export default LoginScreen;
