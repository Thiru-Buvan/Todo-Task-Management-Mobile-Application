import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Agenda } from 'react-native-calendars';

export default function Calendar() {
  const events = {
    '2025-08-06': [{ name: 'Finish UI Tasks' }],
    '2025-08-07': [{ name: 'Team Meeting' }],
    '2025-08-09': [{ name: 'Submit Project' }],
  };

  return (
    <View style={styles.container}>
      <Agenda
        items={events}
        selected={'2025-08-06'}
        renderItem={(item) => (
          <View style={styles.item}>
            <Text style={styles.text}>{item.name}</Text>
          </View>
        )}
        theme={{
          selectedDayBackgroundColor: '#6388AC',
          dotColor: '#6388AC',
          todayTextColor: '#6388AC',
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F2FCFE' },
  item: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 10,
    marginRight: 10,
    marginTop: 17,
  },
  text: { color: '#333' },
});
