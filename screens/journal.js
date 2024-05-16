import React, { useState, useRef } from 'react';
import { 
  StyleSheet, 
  TextInput, 
  View, 
  Dimensions, 
  KeyboardAvoidingView, 
  ScrollView, 
  TouchableOpacity, 
  Text, 
  Image 
} from 'react-native';

// Import your image
import myImage from '../assets/happygluki.png';

export default function JournalPage() {
  const [entry, setEntry] = useState('');
  const inputRef = useRef(null);

  const handleInputChange = (text) => {
    setEntry(text);
  };

  const handleSaveEntry = () => {
    console.log('Entry saved:', entry);
  };

  const handleEditNote = () => {
    console.log('Editing note');
    // Implement your edit note functionality here
  };

  const renderLines = () => {
    return (
      <View style={styles.linesContainer}>
        <View style={styles.lines}>
          {[...Array(20)].map((_, index) => (
            <View key={index} style={styles.line} />
          ))}
        </View>
      </View>
    );
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="position">
      <View style={styles.centeredContainer}>
        <View style={styles.header}>
          {/* Use your image */}
          <button onClick={() => navigation.navigate('Home')} style={{ background: 'none', border: 'none' }}>
            <Image
              source={myImage}
              style={styles.logo}
            />
          </button>
          <TouchableOpacity onPress={handleEditNote} style={styles.editButtonContainer}>
            <Text style={styles.editButtonText}>Edit Note</Text>
          </TouchableOpacity>
          <Text style={styles.levelText}>Level 1: Score 1000</Text>
        </View>

        
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.contentContainer}>
          {renderLines()}
          <TextInput
            ref={inputRef}
            style={styles.input}
            multiline
            value={entry}
            onChangeText={handleInputChange}
            placeholder="Write your journal entry here..."
            textAlign="center"
            backgroundColor="#FDF3BF"
          />
        </View>
      </ScrollView>

      <TouchableOpacity style={styles.button} onPress={handleSaveEntry}>
        <Text style={styles.buttonText}>Save Entry</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDF3BF',
    padding: 20,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  contentContainer: {
    // marginTop: 20, // Adjust this value as needed for spacing
  },
  linesContainer: {
    marginTop: 10, // Adjust this value as needed for spacing
  },
  paper: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    maxHeight: windowHeight * 0.7,
    maxWidth: windowWidth * 0.9,
  },
  lines: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    zIndex: -1,
  },
  line: {
    borderBottomWidth: 2,
    borderColor: '#ccc',
    marginVertical: 8,
  },
  input: {
    fontSize: 16,
    color: '#333',
    flex: 1,
    textAlignVertical: 'center',
    textAlign: 'center',
    paddingVertical: 8,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 130,
  },
  buttonText: {
    color: 'black', // Change font color to black
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'JustAnotherHand_400Regular', // Change font family to 'Just Another Hand'
  },
  // Styles for the "Edit Note" button
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // Align items and Level text horizontally
    marginBottom: 20,
  },
  logo: {
    width: 50, // Adjust the width and height as needed
    height: 65,
    marginRight: 10,
  },
  editButtonContainer: {
    alignItems: 'center', // Center horizontally
  },
  editButtonText: {
    color: 'black', // Change font color to black
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'JustAnotherHand_400Regular', // Change font family to 'Just Another Hand'
  },
  // Style for the Level text
  levelContainer: {
    // position: 'absolute',
    // top: 0,
    // right: 0,
    // padding: 10,
  },
  levelText: {
    fontSize: 18, // Smaller font size
    fontWeight: 'bold',
    fontFamily: 'JustAnotherHand_400Regular',
    maxWidth: "25%",
    textAlign: "center"

  },
  centeredContainer: {
    // flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',

  },
});









