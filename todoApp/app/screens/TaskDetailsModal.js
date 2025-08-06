import React from 'react';
import { Modal, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const TaskDetailsModal = ({ visible, onClose, task }) => {
  if (!task) return null;

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={styles.overlay}>
        <View style={styles.modal}>
          <View style={styles.header}>
            <Text style={styles.title}>Task Details</Text>
            <TouchableOpacity onPress={onClose}>
              <Ionicons name="close" size={24} color="#000" />
            </TouchableOpacity>
          </View>

          <Text style={styles.label}>Task:</Text>
          <Text style={styles.value}>{task.title}</Text>

          <Text style={styles.label}>Description:</Text>
          <Text style={styles.value}>{task.description}</Text>

          <Text style={styles.label}>Start Date:</Text>
          <Text style={styles.value}>{task.startDate || '-'}</Text>

          <Text style={styles.label}>End Date:</Text>
          <Text style={styles.value}>{task.dueDate || '-'}</Text>

          <Text style={styles.label}>Status:</Text>
          <Text style={styles.value}>{task.status}</Text>
        </View>
      </View>
    </Modal>
  );
};

export default TaskDetailsModal;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    backgroundColor: '#fff',
    width: '90%',
    borderRadius: 12,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#333',
  },
  value: {
    fontSize: 14,
    color: '#555',
    marginTop: 4,
  },
});
