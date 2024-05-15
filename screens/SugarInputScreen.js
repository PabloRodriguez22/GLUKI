import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Keyboard } from 'react-native';

const SugarInputScreen = ({ onSugarLevelSubmit }) => {
  const [sugarLevel, setSugarLevel] = useState('');

  const handleInputChange = (text) => {
    setSugarLevel(text);
  };

  const handleSubmit = () => {
    if (sugarLevel.trim() !== '') {
      onSugarLevelSubmit(parseFloat(sugarLevel));
      setSugarLevel('');
      Keyboard.dismiss(); // Dismiss the keyboard after submitting sugar level
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter your sugar level"
          onChangeText={handleInputChange}
          value={sugarLevel}
          keyboardType="numeric"
        />
        <Button title="Submit" onPress={handleSubmit} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 150,
  },
  inputContainer: {
    flexDirection: 'row', // Arrange children horizontally
    alignItems: 'center', // Center children vertically
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 30,
    padding: 10,
    marginBottom: 20,
    width: '46%', // Adjust the width to accommodate both input and button
    marginRight: 10, // Add some margin between input and button
  },
});

export default SugarInputScreen;
