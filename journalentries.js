import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import * as FileSystem from 'expo-file-system';

export default function JournalEntries() {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    // Fetch saved entries when component mounts
    fetchEntries();
  }, []);

  const fetchEntries = async () => {
    try {
      // Read saved entries from file system
      const dirContents = await FileSystem.readDirectoryAsync(FileSystem.documentDirectory);
      const entryFiles = dirContents.filter(file => file.endsWith('.txt'));
      const fetchedEntries = await Promise.all(
        entryFiles.map(async file => {
          const entryUri = `${FileSystem.documentDirectory}${file}`;
          const entryContent = await FileSystem.readAsStringAsync(entryUri);
          return { id: file, content: entryContent };
        })
      );
      // Update state with fetched entries
      setEntries(fetchedEntries);
    } catch (error) {
      console.error('Error fetching entries:', error);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>My Journal Entries</Text>
      {entries.map(entry => (
        <View key={entry.id} style={styles.entry}>
          <Text style={styles.date}>{formatDate(new Date(parseInt(entry.id)))}</Text>
          <Text style={styles.entryText}>{entry.content}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const formatDate = date => {
  const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
  return date.toLocaleDateString('en-US', options);
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FDF3BF', // Yellow background color
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  entry: {
    backgroundColor: '#E0F7FA', // Light blue background color for paper lines
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    borderWidth: 1, // Add a border to the paper
    borderColor: '#B2EBF2', // Border color
  },
  date: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  entryText: {
    fontSize: 16,
    lineHeight: 20,
    color: '#333', // Darker color for text to resemble pen ink
  },
});
