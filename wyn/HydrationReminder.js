// Example component using the hydration reminder
import React, { useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import PushNotification from 'react-native-push-notification';
import BackgroundTimer from 'react-native-background-timer';

const HydrationReminder = () => {
  const showNotification = () => {
    PushNotification.localNotification({
      title: 'Hydration Reminder',
      message: 'Remember to drink water!',
    });
  };

  const scheduleReminder = () => {
    // Schedule a background task using BackgroundTimer
    BackgroundTimer.runBackgroundTimer(() => {
      showNotification();
    }, 60 * 60 * 1000); // Every 1 hour (adjust the time as needed)
  };

  useEffect(() => {
    scheduleReminder();

    return () => {
      // Clear the background task when the component unmounts
      BackgroundTimer.stopBackgroundTimer();
    };
  }, []);

  return (
    <View>
      <Text>Hydration Reminder Component</Text>
      <Button title="Show Reminder Now" onPress={showNotification} />
    </View>
  );
};

export default HydrationReminder;
