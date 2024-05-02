// import React, { useState, useRef } from 'react';
// import { StyleSheet, TextInput, View, Dimensions, KeyboardAvoidingView, ScrollView, TouchableOpacity, Text } from 'react-native';

// export default function JournalPage() {
//   const [entry, setEntry] = useState(''); // Initial value as an empty string
//   const inputRef = useRef(null);

//   const handleInputChange = (text) => {
//     setEntry(text);
//   };

//   const handleSaveEntry = () => {
//     // Handle saving the journal entry here
//     console.log('Entry saved:', entry);
//   };

//   const renderLines = () => {
//     return (
//       <View style={styles.lines}>
//         {[...Array(20)].map((_, index) => (
//           <View key={index} style={styles.line} />
//         ))}
//       </View>
//     );
//   };

//   return (
//     <KeyboardAvoidingView style={styles.container} behavior="position">
//       <ScrollView contentContainerStyle={styles.scrollContainer}>
//         <View style={styles.paper}>
//           {renderLines()}
//           <TextInput
//             ref={inputRef}
//             style={styles.input}
//             multiline
//             value={entry}
//             onChangeText={handleInputChange}
//             placeholder="Write your journal entry here..."
//             textAlign="center" // Center the text within the input
//             backgroundColor="#FDF3BF" // Set the background color to match the paper
//           />
//         </View>
//       </ScrollView>
//       {/* Button to save the entry */}
//       <TouchableOpacity style={styles.button} onPress={handleSaveEntry}>
//         <Text style={styles.buttonText}>Save Entry</Text>
//       </TouchableOpacity>
//     </KeyboardAvoidingView>
//   );
// }

// const windowHeight = Dimensions.get('window').height;
// const windowWidth = Dimensions.get('window').width;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#FDF3BF',
//     padding: 20,
//   },
//   scrollContainer: {
//     flexGrow: 1,
//   },
//   paper: {
//     backgroundColor: '#fff',
//     borderRadius: 10,
//     padding: 20,
//     marginBottom: 20,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     maxHeight: windowHeight * 0.7, // Adjust as needed to fit screen
//     maxWidth: windowWidth * 0.9, // Adjust as needed to fit screen
//   },
//   lines: {
//     position: 'absolute',
//     left: 0,
//     right: 0,
//     top: 0,
//     bottom: 0,
//     zIndex: -1,
//   },
//   line: {
//     borderBottomWidth: 2, // Increase border width for wide-ruled lines
//     borderColor: '#ccc',
//     marginVertical: 8, // Increase spacing between lines for wide-ruled lines
//   },
//   input: {
//     fontSize: 16,
//     color: '#333',
//     flex: 1,
//     textAlignVertical: 'center', // Center the text vertically within the input
//     textAlign: 'center', // Center the text horizontally within the input
//     paddingVertical: 8, // Add padding to align the text within each line
//   },
//   button: {
//     backgroundColor: '#007bff',
//     padding: 10,
//     borderRadius: 5,
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });



//new line of code 

import * as React from "react";
import {
  FlatList,
  ScrollView,
  View,
  StyleSheet,
  Image,
  Text,
} from "react-native";

function MyComponent() {
  return (
    <View className="flex flex-col pt-6 mx-auto w-full bg-yellow-100 max-w-[480px]">
      <View className="flex gap-5 justify-between self-center w-full max-w-[356px]">
        <View className="flex justify-center items-center px-3 bg-blue-300 rounded-full shadow-sm h-[72px] w-[72px]">
          <View
            loading="lazy"
            srcSet="..."
            className="shadow-sm aspect-[0.89] w-[50px]"
          />
        </View>
        <View className="flex gap-5 justify-between items-start my-auto text-3xl tracking-normal text-center text-blue-950">
          <View className="z-10 px-8 pt-1.5 mt-5 rounded-3xl shadow-sm bg-white bg-opacity-30">
            <Text>Edit Note</Text>
          </View>
          <View
            loading="lazy"
            srcSet="..."
            className="shrink-0 border border-black border-solid shadow-sm aspect-[2.33] w-[92px]"
          />
        </View>
      </View>
      <View className="mt-4 w-full text-2xl tracking-wider text-black">
        <Text>
          I ate all of my favorite foods today, and my sugar levels did not drop
          or go too high!!{" "}
        </Text>
      </View>
      <View className="mt-3.5 w-full border border-solid border-neutral-200 border-opacity-80 min-h-[1px]" />
      <View className="mt-5 w-full border border-solid border-neutral-200 border-opacity-80 min-h-[1px]" />
      <View className="mt-5 w-full border border-solid border-neutral-200 border-opacity-80 min-h-[1px]" />
      <View className="mt-5 w-full border border-solid border-neutral-200 border-opacity-80 min-h-[2px]" />
      <View className="mt-5 w-full border border-solid border-neutral-200 border-opacity-80 min-h-[1px]" />
      <View className="mt-5 w-full border border-solid border-neutral-200 border-opacity-80 min-h-[1px]" />
      <View className="mt-6 w-full border border-solid border-neutral-200 border-opacity-80 min-h-[1px]" />
      <View className="mt-5 w-full border border-solid border-neutral-200 border-opacity-80 min-h-[2px]" />
      <View className="mt-5 w-full border border-solid border-neutral-200 border-opacity-80 min-h-[1px]" />
      <View className="mt-5 w-full border border-solid border-neutral-200 border-opacity-80 min-h-[1px]" />
      <View className="mt-5 w-full border border-solid border-neutral-200 border-opacity-80 min-h-[1px]" />
      <View className="mt-5 w-full border border-solid border-neutral-200 border-opacity-80 min-h-[2px]" />
      <View className="mt-5 w-full border border-solid border-neutral-200 border-opacity-80 min-h-[1px]" />
      <View className="mt-5 w-full border border-solid border-neutral-200 border-opacity-80 min-h-[1px]" />
      <View className="mt-5 w-full border border-solid border-neutral-200 border-opacity-80 min-h-[1px]" />
      <View className="flex gap-5 justify-between items-start px-20 py-4 mt-6 bg-zinc-300">
        <View
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/2b867681626a519a69e2c52aa190b5a646146be04ede4b9d1fadeaaa70d2e9a1?"
          className="shrink-0 w-3 aspect-[0.7] fill-zinc-800"
        />
        <View
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/af34e053ae95114a55b777f59f7f57dafb0422ed612002d5c766bfa52f022666?"
          className="shrink-0 aspect-[0.65] fill-zinc-800 w-[11px]"
        />
        <View
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/c681a18a8a6109809c889976a66180194dee1db3dec347f5d30bdd9942f407df?"
          className="shrink-0 w-3.5 aspect-[0.74] fill-zinc-800"
        />
        <View
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/e7762cea532ea7de76b4196f3d8dc6d32fa829c631fb3f88a1dc8ef53f0aba71?"
          className="shrink-0 aspect-[0.95] fill-zinc-800 w-[21px]"
        />
        <View
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/c45c5029a64def56a24319e615e05381a58aabaaf253b75e6c894f80ef955595?"
          className="shrink-0 aspect-[1.22] fill-zinc-800 w-[22px]"
        />
      </View>
      <View className="flex flex-col pt-2 pb-5 w-full bg-gray-300 backdrop-blur-[54.36563491821289px]">
        <View className="flex gap-1.5 px-5 w-full text-2xl tracking-tight text-center whitespace-nowrap text-neutral-900">
          <View className="justify-center px-2.5 py-3.5 bg-white rounded-md shadow-sm">
            <Text>Q</Text>
          </View>
          <View className="justify-center py-3.5 bg-white rounded-md shadow-sm">
            <Text>W</Text>
          </View>
          <View className="justify-center items-start px-3 py-3.5 bg-white rounded-md shadow-sm">
            <Text>E</Text>
          </View>
          <View className="justify-center items-start px-2.5 py-3.5 bg-white rounded-md shadow-sm">
            <Text>R</Text>
          </View>
          <View className="justify-center items-start px-2.5 py-3.5 bg-white rounded-md shadow-sm">
            <Text>T</Text>
          </View>
          <View className="justify-center py-3.5 bg-white rounded-md shadow-sm">
            <Text>Y</Text>
          </View>
          <View className="justify-center py-3.5 bg-white rounded-md shadow-sm">
            <Text>U</Text>
          </View>
          <View className="justify-center items-start px-4 py-3.5 bg-white rounded-md shadow-sm">
            <Text>I</Text>
          </View>
          <View className="justify-center py-3.5 bg-white rounded-md shadow-sm">
            <Text>O</Text>
          </View>
          <View className="justify-center px-3 py-3.5 bg-white rounded-md shadow-sm">
            <Text>P</Text>
          </View>
        </View>
        <View className="flex gap-1.5 self-center px-5 mt-3.5 w-full text-2xl tracking-tight text-center whitespace-nowrap max-w-[387px] text-neutral-900">
          <View className="justify-center py-3.5 bg-white rounded-md shadow-sm">
            <Text>A</Text>
          </View>
          <View className="justify-center items-start px-2.5 py-3.5 bg-white rounded-md shadow-sm">
            <Text>S</Text>
          </View>
          <View className="justify-center py-3.5 bg-white rounded-md shadow-sm">
            <Text>D</Text>
          </View>
          <View className="justify-center px-3 py-3.5 bg-white rounded-md shadow-sm">
            <Text>F</Text>
          </View>
          <View className="justify-center py-3.5 bg-white rounded-md shadow-sm">
            <Text>G</Text>
          </View>
          <View className="justify-center items-start px-2.5 py-3.5 bg-white rounded-md shadow-sm">
            <Text>H</Text>
          </View>
          <View className="justify-center items-start px-3 py-3.5 bg-white rounded-md shadow-sm">
            <Text>J</Text>
          </View>
          <View className="justify-center items-start px-2.5 py-3.5 bg-white rounded-md shadow-sm">
            <Text>K</Text>
          </View>
          <View className="justify-center px-3 py-3.5 bg-white rounded-md shadow-sm">
            <Text>L</Text>
          </View>
        </View>
        <View className="flex gap-3.5 px-5 mt-3.5 text-2xl tracking-tight text-center whitespace-nowrap text-neutral-900">
          <View
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7cf4c1e4f50f21bfb2707e9925e7b7a9255f58000e9bd302fce440f08f14dbbd?"
            className="shrink-0 w-11 aspect-square"
          />
          <View className="flex gap-1.5">
            <View className="justify-center items-start px-2.5 py-3.5 bg-white rounded-md shadow-sm">
              <Text>Z</Text>
            </View>
            <View className="justify-center py-3.5 bg-white rounded-md shadow-sm">
              <Text>X</Text>
            </View>
            <View className="justify-center py-3.5 bg-white rounded-md shadow-sm">
              <Text>C</Text>
            </View>
            <View className="justify-center px-2.5 py-3.5 bg-white rounded-md shadow-sm">
              <Text>V</Text>
            </View>
            <View className="justify-center px-3 py-3.5 bg-white rounded-md shadow-sm">
              <Text>B</Text>
            </View>
            <View className="justify-center py-3.5 bg-white rounded-md shadow-sm">
              <Text>N</Text>
            </View>
            <View className="justify-center py-3.5 bg-white rounded-md shadow-sm">
              <Text>M</Text>
            </View>
          </View>
          <View
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/08493fa8df6f75289341adbc7df88e05ee262e3d61ba623d16701e7c84a9713d?"
            className="shrink-0 w-11 aspect-square"
          />
        </View>
        <View className="flex gap-1.5 px-5 mt-3 w-full text-base tracking-tight leading-5 text-center whitespace-nowrap text-neutral-900">
          <View className="justify-center px-8 py-4 bg-gray-400 rounded-md shadow-[0px_1px_0px_rgba(137,138,141,1)]">
            <Text>123</Text>
          </View>
          <View className="justify-center items-center px-16 py-4 bg-white rounded-md shadow-[0px_1px_0px_rgba(168,168,168,1)]">
            <Text>space</Text>
          </View>
          <View className="justify-center px-9 py-4 bg-gray-400 rounded-md shadow-[0px_1px_0px_rgba(137,138,141,1)]">
            <Text>Go</Text>
          </View>
        </View>
        <View className="flex gap-5 justify-between items-start self-center px-5 mt-8 w-full max-w-[376px]">
          <View
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0b4ed6883206b87cdf9d7e7a9a240cf45ffb96fbd29ce413c834d225aec34525?"
            className="shrink-0 w-7 aspect-square fill-zinc-600"
          />
          <View className="shrink-0 self-end mt-7 bg-indigo-950 h-[5px] rounded-[100px] w-[134px]" />
          <View
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ac627876f604b979f5c86406d0a362f8e95076644ee02cabcd62a770b797ef50?"
            className="shrink-0 w-4 aspect-[0.61] fill-zinc-600"
          />
        </View>
      </View>
    </View>
  );
}









