import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { ProgressBar } from 'react-native-paper';
import useTaskStore from '../store/taskStore'; // ✅ correct relative path

const ProgressScreen = () => {
  const tasks = useTaskStore(state => state.tasks); // ✅ this re-renders on change

  const completed = tasks.filter(task => task.status === 'complete').length;
  const pending = tasks.filter(task => task.status === 'open').length;
  const total = completed + pending;
  const progress = total === 0 ? 0 : completed / total;

  const getMessage = () => {
    if (progress === 1) return "🎉 Amazing! All tasks are done.";
    if (progress >= 0.75) return "💪 You're almost there. Keep going!";
    if (progress >= 0.5) return "🔥 Halfway through! Great work!";
    if (progress >= 0.25) return "👏 Nice start! Stay consistent.";
    return "🚀 Let's get started. You got this!";
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Progress</Text>

      <ProgressBar progress={progress} color="#6388AC" style={styles.progressBar} />

      <Text style={styles.percent}>{Math.round(progress * 100)}% Completed</Text>
      <Text style={styles.message}>{getMessage()}</Text>

      <Image
        source={require('../../assets/images/progress.png')}
        style={styles.image}
      />
    </View>
  );
};

export default ProgressScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2FCFE',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 20,
    color: '#333',
  },
  progressBar: {
    width: '100%',
    height: 16,
    borderRadius: 8,
    backgroundColor: '#DAE3EB',
  },
  percent: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 10,
    color: '#6388AC',
  },
  message: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 24,
    color: '#444',
  },
  image: {
    marginTop: 30,
    width: 180,
    height: 180,
    resizeMode: 'contain',
  },
});
