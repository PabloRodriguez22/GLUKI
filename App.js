import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import JournalPage from './journal.js'; // Import the JournalPage component from journal.js

export default function App() {
  return (
    <View style={styles.container}>
      <Text></Text>
      {/* Include the JournalPage component */}
      <JournalPage />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

