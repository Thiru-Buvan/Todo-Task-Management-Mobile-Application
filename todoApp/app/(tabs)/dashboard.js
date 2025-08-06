import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const Dashboard = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Main Menu</Text>

      <View style={styles.menuList}>
        <TouchableOpacity style={styles.menuItem} onPress={() => router.push('/insights')}>
          <Ionicons name="bar-chart-outline" size={24} color="#6388AC" style={styles.icon} />
          <Text style={styles.menuText}>Insights</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem} onPress={() => router.push('/calendar')}>
          <Ionicons name="calendar-outline" size={24} color="#6388AC" style={styles.icon} />
          <Text style={styles.menuText}>Calendar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem} onPress={() => router.push('/notifications')}>
          <Ionicons name="notifications-outline" size={24} color="#6388AC" style={styles.icon} />
          <Text style={styles.menuText}>Notifications</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem} onPress={() => router.push('/settings')}>
          <Ionicons name="settings-outline" size={24} color="#6388AC" style={styles.icon} />
          <Text style={styles.menuText}>Settings</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2FCFE',
    paddingTop: 60,
    paddingLeft: 20,
  },
  heading: {
    fontSize: 22,
    fontWeight: '700',
    color: '#333',
    marginBottom: 30,
  },
  menuList: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
  },
  icon: {
    marginRight: 15,
  },
  menuText: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
});
