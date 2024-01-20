import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image, TextInput, ScrollView } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

const HomeScreen = ({ navigation }) => {
  const handleLogout = () => {
    // Perform logout actions here
    navigation.replace('Login');
  };

  const [bmiData, setBmiData] = useState([
    // Initial dummy data (replace with actual data)
    { month: 'Jan', bmi: 20 },
    { month: 'Feb', bmi: 45 },
    { month: 'Mar', bmi: 28 },
    { month: 'Apr', bmi: 80 },
    { month: 'May', bmi: 99 },
    { month: 'Jun', bmi: 43 },
  ]);

  const [inputMonth, setInputMonth] = useState('');
  const [inputBmi, setInputBmi] = useState('');

  const handleAddData = () => {
    // Validate and add user-inputted data to the BMI chart
    if (inputMonth && inputBmi) {
      setBmiData([...bmiData, { month: inputMonth, bmi: parseFloat(inputBmi) }]);
      setInputMonth('');
      setInputBmi('');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={require('./')} style={styles.image} />

      {/* Chart */}
      <LineChart
        data={{
          labels: bmiData.map((data) => data.month),
          datasets: [
            {
              data: bmiData.map((data) => data.bmi),
            },
          ],
        }}
        width={300}
        height={200}
        yAxisSuffix=" BMI"
        yAxisInterval={1}
        chartConfig={{
          backgroundColor: '#ffffff',
          backgroundGradientFrom: '#ffffff',
          backgroundGradientTo: '#ffffff',
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: '6',
            strokeWidth: '2',
            stroke: '#ffa726',
          },
        }}
        bezier
        style={styles.chart}
      />

      {/* Input fields for adding data */}
      <TextInput
        placeholder="Month"
        value={inputMonth}
        onChangeText={(text) => setInputMonth(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="BMI"
        value={inputBmi}
        onChangeText={(text) => setInputBmi(text)}
        keyboardType="numeric"
        style={styles.input}
      />
      <TouchableOpacity style={styles.addButton} onPress={handleAddData}>
        <Text style={styles.buttonText}>Add Data</Text>
      </TouchableOpacity>

      {/* Logout Button */}
      <TouchableOpacity style={styles.buttonContainer} onPress={handleLogout}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 10,
  },
  chart: {
    marginVertical: 8,
    borderRadius: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    margin: 10,
    width: '80%',
    borderRadius: 5,
  },
  addButton: {
    backgroundColor: '#000000',
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 10,
    width: '80%',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonContainer: {
    width: '80%',
    backgroundColor: '#000000',
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 20,
  },
});

export default HomeScreen;
