import React, { useState } from 'react';
import { View, StyleSheet, Button, Keyboard } from 'react-native';
import SugarInputScreen from './SugarInputScreen';
import LineChartScreen from './LineChartScreen';
import './font.css'; 
import { useFonts } from 'expo-font';

const App = () => {
  let [fontsLoaded] = useFonts({
    'JustAnotherHand': require('./assets/JustAnotherHand-Regular.ttf'),
  });

  if (!fontsLoaded){
    return <AppLoading/>
  }

  const [sugarData, setSugarData] = useState([]);

  const handleSugarLevelSubmit = (level) => {
    const entry = {
      level,
      date: new Date().toISOString().slice(0, 10), // Get current date in YYYY-MM-DD format
    };
    setSugarData([...sugarData, entry]);
  };

  const handleClearData = () => {
    Keyboard.dismiss(); // Dismiss the keyboard
    setSugarData([]); // Clear the sugar data
  };
  return (
    <View style={styles.container}>
      <LineChartScreen data={sugarData} onClearData={handleClearData} />
      <View style={styles.spacing} />
      <SugarInputScreen onSugarLevelSubmit={handleSugarLevelSubmit} />
      <View style={styles.spacing} />
      <Button title="Clear Data" onPress={handleClearData} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C0ECF8',
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  spacing: {
    marginVertical: 10,
  },
  defaultText: {
    fontFamily: 'JustAnotherHand', 
    fontSize: 16,
  },
});

export default App;
