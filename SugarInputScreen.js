import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const SugarInputScreen = ({ onSugarLevelSubmit }) => {
  const [sugarLevel, setSugarLevel] = useState('');

  const handleInputChange = (text) => {
    setSugarLevel(text);
  };

  const handleSubmit = () => {
    onSugarLevelSubmit(parseFloat(sugarLevel)); // Call the callback function with the new sugar level
    setSugarLevel('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter your sugar level"
        onChangeText={handleInputChange}
        value={sugarLevel}
        keyboardType="numeric"
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 150,
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 20,
    padding: 10,
    marginBottom: 0,
    width: '80%',
  },
});

export default SugarInputScreen;
