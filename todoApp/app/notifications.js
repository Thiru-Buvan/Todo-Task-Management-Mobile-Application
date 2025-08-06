import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const notifications = [
  { id: '1', title: 'Welcome!', message: 'Start your day by planning your tasks.' },
  { id: '2', title: 'Tip', message: 'Swipe a task to delete it instantly.' },
  { id: '3', title: 'Reminder', message: 'Stay focused and complete pending tasks.' },
  { id: '4', title: 'Motivation', message: 'Every small step counts!' },
];

export default function NotificationsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Notifications</Text>
      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.message}>{item.message}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F2FCFE', padding: 20 },
  heading: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 10,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 3 },
    elevation: 2,
  },
  title: { fontSize: 16, fontWeight: '600', marginBottom: 4 },
  message: { fontSize: 14, color: '#444' },
});
