import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { BarChart } from 'react-native-chart-kit';

const screenWidth = Dimensions.get('window').width;

export default function Insights() {
  const data = {
    labels: ['Assigned', 'Completed', 'Pending'],
    datasets: [{ data: [10, 6, 4] }],
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Task Progress</Text>
      <BarChart
        data={data}
        width={screenWidth - 40}
        height={250}
        chartConfig={{
          backgroundColor: '#fff',
          backgroundGradientFrom: '#fff',
          backgroundGradientTo: '#fff',
          decimalPlaces: 0,
          color: () => '#6388AC',
          labelColor: () => '#333',
        }}
        style={styles.chart}
        fromZero
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F2FCFE', alignItems: 'center', paddingTop: 40 },
  title: { fontSize: 20, fontWeight: 'bold', color: '#333', marginBottom: 10 },
  chart: { borderRadius: 12 },
});
