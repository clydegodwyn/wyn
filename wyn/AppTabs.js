import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import SamplePage1Screen from './SamplePage1';
import ProfileScreen from './ProfilePage';
import BMIScreen from './BMIScreen';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

const AppTabs = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = 'home';
        } else if (route.name === 'Sleep Tracker') {
          iconName = 'moon-o'; 
        } else if (route.name === 'BMI Calculator') {
          iconName = 'calculator'; 
        } else if (route.name === 'Profile') {
          iconName = 'user'; 
        }

        // You can return any component here that you want as the tab icon
        return <FontAwesome name={iconName} size={size} color={color} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: 'black', 
      inactiveTintColor: 'gray', 
    }}
  >
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Sleep Tracker" component={SamplePage1Screen} />
    <Tab.Screen name="BMI Calculator" component={BMIScreen} />
    <Tab.Screen name="Profile" component={ProfileScreen} />
  </Tab.Navigator>
);

export default AppTabs;

