import React, { useRef } from 'react';
import { StyleSheet, View, Text, Dimensions, Image, TouchableOpacity } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { captureRef } from 'react-native-view-shot';
import * as FileSystem from 'expo-file-system'; // Import FileSystem for file operations
import './font.css'; 

const sadGlukiImage = require('../assets/sadgluki.png');
const supermangluki = require('../assets/supermangluki.png');
const happyGlukiImage = require('../assets/happygluki.png');
const levelNscore = require('../assets/levelNscore.png');

const LineChartScreen = ({ data, onClearData }) => {
  const chartRef = useRef(); // Create a ref for the chart component

  const handleSaveImage = async () => {
    try {
      const uri = await captureRef(chartRef, {
        format: 'png', 
        quality: 1, 
      });

      // Create a file name for the saved image
      const fileName = 'my_chart_image.png';

      // Save the captured image to the device's storage
      await FileSystem.copyAsync({
        from: uri,
        to: `${FileSystem.documentDirectory}${fileName}`,
      });

      // Alert the user that the image has been saved
      alert('Image saved successfully!');
    } catch (error) {
      console.error('Error saving image:', error);
      alert('Failed to save image.');
    }
  };

  const line = {
    datasets: [
      {
        data: data.map(entry => entry.level),
        color: (opacity = 1) => {
          const level = data[data.length - 1]?.level || 0;
          return level < 85 ? 'red' : 'green';
        },
      },
    ],
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <button onClick={() => navigation.navigate('Home')} style={{ background: 'none', border: 'none' }}>
          <Image source={supermangluki} style={styles.image} />
        </button>
        <Image source={levelNscore} style={styles.pointsImage} /> 
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>
          {'\n'}Gluki sometimes feels happy or sad. Share how you feel today!
        </Text>
      </View>
      {data.length > 0 ? (
        <View style={styles.chartContainer}>
          <View ref={chartRef}>
            {/* Ref attached to the View wrapping the chart */}
            <LineChart
              data={line}
              width={Dimensions.get('window').width - 40}
              height={200}
              chartConfig={{
                backgroundColor: '#FFFFFF',
                backgroundGradientFrom: '#248199',
                backgroundGradientTo: '#74D0E8',
                decimalPlaces: 0,
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                style: {
                  borderRadius: 16,
                },
              }}
              bezier
            />
          </View>
          <Text style={styles.caption}>
            Gluki will be sad if your sugar level is below 85. ☹
          </Text>
          <Text style={styles.caption}>
            Gluki will be happy if your sugar level is above 85! ☻
          </Text>
          <TouchableOpacity style={styles.saveButton} onPress={handleSaveImage}>
            <Text style={styles.saveButtonText}>Save Image</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <Text style={styles.getStartedText}>
        {'\n'}
        {'\n'}
        Get started by inputting your sugar level!
      </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  getStartedText: {
    marginTop: 30, 
    fontSize: 25,
    fontFamily: 'customFont', 
  },
  container: {
    flex: 2,
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 10,
    fontFamily: 'customFont',
  },
  image: {
    width: 50,
    height: 65,
  },
  pointsImage: {
    width: 101, // Adjust size as needed
    height: 50, // Adjust size as needed
  },
  titleContainer: {
    fontFamily: 'customFont',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 7,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: 'customFont',
  },
  chartContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  caption: {
    fontSize: 25,
    marginTop: 2,
    fontFamily: 'customFont',
  },
  saveButton: {
    marginTop: 10,
    backgroundColor: '#248199',
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 6,
    fontFamily: 'customFont',
  },
  saveButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'customFont',
  },
});

export default LineChartScreen;
