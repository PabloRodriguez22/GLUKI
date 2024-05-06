import React from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

const LineChartScreen = ({ data }) => {
  const line = {
    datasets: [
      {
        data: data,
        strokeWidth: 2,
      },
    ],
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gluki sometimes feels happy or sad. Share how you feel today!</Text>
      <View style={styles.chartContainer}>
        <LineChart
          data={line}
          width={Dimensions.get('window').width - 40} // adjust width
          height={200}
          chartConfig={{
            backgroundColor: '#67C4DD',
            backgroundGradientFrom: '#38A8C4',
            backgroundGradientTo: '#F5DE8B',
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: '6',
              strokeWidth: '2',
              stroke: '#000000',
              fill: '#000000'
            },
          }}
          bezier
        />
        <Text style={styles.caption}>
          Gluki will be sad if your sugar level is below 70.{'\n'}
          Gluki will be happy if your sugar level is above 70!
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  chartContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  caption: {
    fontSize: 16,
    marginTop: 10,
  },
});

export default LineChartScreen;
