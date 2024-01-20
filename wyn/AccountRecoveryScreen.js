import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Text, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Assuming Ionicons is installed

const AccountRecoveryScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');

  const handleSendResetCode = () => {
    // Here you can implement logic to send a password reset code to the provided email
    // For the sake of this example, let's assume the code is sent successfully
    alert(`Password reset code sent to ${email}`);
  };

  const handleGoBack = () => {
    navigation.goBack(); // Navigate back to the previous screen (Login)
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Account Recovery</Text>
      <TextInput
        placeholder="Enter your email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        style={styles.input}
      />
      <TouchableOpacity onPress={handleSendResetCode} style={styles.button}>
        <Text style={styles.buttonText}>Send Password Reset Code</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleGoBack} style={styles.goBackContainer}>
        <Ionicons name="ios-arrow-back" size={20} color="black" />
        <Text style={styles.goBackText}>Back to Login Page</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginVertical: 10,
    width: '100%',
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#000',
    paddingVertical: 15,
    width: '100%',
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  goBackContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    marginTop: 20,
    marginLeft: 20,
  },
  goBackText: {
    color: 'black',
    textDecorationLine: 'underline',
    fontWeight: 'bold',
  },
});

export default AccountRecoveryScreen;
