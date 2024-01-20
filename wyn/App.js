// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppTabs from './AppTabs';

import LandingScreen from './LandingScreen';
import LoginScreen from './LoginScreen';
import SignupScreen from './SignupScreen';
import AccountRecoveryScreen from './AccountRecoveryScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Landing" component={LandingScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="HomeTabs" component={AppTabs} options={{ headerShown: false }} />
        <Stack.Screen name="AccountRecovery" component={AccountRecoveryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
