import React, { useState } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import SugarInputScreen from './SugarInputScreen';
import LineChartScreen from './LineChartScreen';

const App = () => {
  const [sugarData, setSugarData] = useState([70,100]); //can be an empty array

  const handleSugarLevelSubmit = (level) => {
    //add sugar level to existin array
    setSugarData([...sugarData, level]);
  };

  return (
    <View style={styles.container}>
      <LineChartScreen data={sugarData} />
      <View style={styles.spacing} />
      <SugarInputScreen onSugarLevelSubmit={handleSugarLevelSubmit} />
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
});

export default App;
