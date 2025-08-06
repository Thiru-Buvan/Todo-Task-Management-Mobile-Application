import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Swipeable } from 'react-native-gesture-handler';
import AddTaskModal from './AddTaskModal';
import TaskDetailsModal from './TaskDetailsModal';
import { useRouter } from 'expo-router';
import useTaskStore from '../store/taskStore';

const TaskListScreen = () => {
  const [filter, setFilter] = useState('All');
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [showDetails, setShowDetails] = useState(false);

  const { tasks, addTask, deleteTask, toggleStatus } = useTaskStore();
  const router = useRouter();

  const filteredTasks = tasks.filter(task => {
    if (filter === 'All') return true;
    return filter === 'Completed' ? task.status === 'complete' : task.status === 'open';
  });

  const renderRightActions = (progress, dragX, index) => (
    <TouchableOpacity style={styles.deleteBox} onPress={() => deleteTask(index)}>
      <Ionicons name="trash-outline" size={24} color="#fff" />
    </TouchableOpacity>
  );

  const renderTask = ({ item, index }) => (
    <Swipeable renderRightActions={(progress, dragX) => renderRightActions(progress, dragX, index)}>
      <TouchableOpacity
        style={styles.taskCard}
        onPress={() => {
          setSelectedTask(item);
          setShowDetails(true);
        }}
      >
        <TouchableOpacity onPress={() => toggleStatus(index)} style={styles.circleBtn}>
          <Ionicons
            name={item.status === 'complete' ? 'checkmark-circle' : 'ellipse-outline'}
            size={24}
            color={item.status === 'complete' ? '#2ecc71' : '#999'}
          />
        </TouchableOpacity>

        <View style={{ flex: 1 }}>
          <Text style={[styles.taskTitle, item.status === 'complete' && styles.completedText]}>
            {item.title}
          </Text>
          <View style={styles.dateRow}>
            <Ionicons name="calendar-outline" size={16} color="#6388AC" style={{ marginRight: 4 }} />
            <Text style={styles.taskDate}>Due: {item.dueDate}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </Swipeable>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.userInfo}>
          <View>
            <Text style={styles.name}>Hello! Thiru</Text>
            <Text style={styles.dateText}>
              {new Date().toLocaleDateString('en-US', {
                weekday: 'long',
                month: 'short',
                day: 'numeric',
              })}
            </Text>
          </View>
        </View>
        <TouchableOpacity onPress={() => router.push('/profile')}>
          <Image source={require('../../assets/images/profile-icon.jpg')} style={styles.profileIcon} />
        </TouchableOpacity>
      </View>

      {/* Manage Box */}
      <View style={styles.manageBox}>
        <View style={{ flex: 1 }}>
          <Text style={styles.manageText}>Every minute counts</Text>
          <Text style={styles.manageText}>Make each one meaningful !!!</Text>
        </View>
        <TouchableOpacity onPress={() => router.push('/insights')}>
          <Image source={require('../../assets/images/Topstory.png')} style={styles.manageImg} />
        </TouchableOpacity>
      </View>

      {/* Filters */}
      <View style={styles.filterRow}>
        {['All', 'Completed', 'Pending'].map(tab => (
          <TouchableOpacity
            key={tab}
            style={[styles.filterBtn, filter === tab && styles.filterBtnActive]}
            onPress={() => setFilter(tab)}
          >
            <Text style={[styles.filterText, filter === tab && styles.filterTextActive]}>
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Task List */}
      <FlatList
        data={filteredTasks}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderTask}
        contentContainerStyle={{ paddingBottom: 100 }}
      />

      {/* Floating Add Button */}
      <TouchableOpacity style={styles.fab} onPress={() => setModalVisible(true)}>
        <Ionicons name="add" size={30} color="#fff" />
      </TouchableOpacity>

      {/* Modals */}
      <AddTaskModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onAdd={(task) => addTask(task)}
      />
      <TaskDetailsModal
        visible={showDetails}
        task={selectedTask}
        onClose={() => setShowDetails(false)}
      />
    </View>
  );
};

export default TaskListScreen;

// styles remain same (you can keep your existing style object)


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2FCFE',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  hello: {
    fontSize: 14,
    color: '#333',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  profileIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  manageBox: {
    backgroundColor: '#6388AC',
    borderRadius: 12,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  manageText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  manageImg: {
    width: 40,
    height: 40,
  },
  filterRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  filterBtn: {
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 20,
    backgroundColor: '#DAE3EB',
  },
  filterBtnActive: {
    backgroundColor: '#6388AC',
  },
  filterText: {
    fontSize: 14,
    color: '#444',
  },
  filterTextActive: {
    color: '#fff',
    fontWeight: '600',
  },
  taskCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 4,
    elevation: 1,
  },
  circleBtn: {
    marginRight: 12,
  },
  taskTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  completedText: {
    textDecorationLine: 'line-through',
    color: '#888',
  },
  dateRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  taskDate: {
    fontSize: 13,
    color: '#6388AC',
  },
  deleteBox: {
    backgroundColor: '#d11a2a',
    justifyContent: 'center',
    alignItems: 'center',
    width: 70,
    borderRadius: 12,
    marginTop: 4,
    marginBottom: 4,
  },
  fab: {
    position: 'absolute',
    bottom: 30,
    right: 20,
    backgroundColor: '#6388AC',
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 6,
  },
});
