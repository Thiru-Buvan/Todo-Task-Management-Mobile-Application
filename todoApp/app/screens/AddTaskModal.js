import React, { useState } from 'react';
import {
  Modal,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Platform
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';

const AddTaskModal = ({ visible, onClose, onAdd }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [time, setTime] = useState('');

  const [pickerMode, setPickerMode] = useState(null); // 'start', 'end', 'time'
  const [showPicker, setShowPicker] = useState(false);

  const openPicker = (mode) => {
    setPickerMode(mode);
    setShowPicker(true);
  };

  const handleDateChange = (event, selectedDate) => {
    if (event.type === 'dismissed') {
      setShowPicker(false);
      return;
    }

    const date = selectedDate || new Date();
    const formattedDate = date.toDateString();
    const formattedTime = `${date.getHours().toString().padStart(2, '0')}:${date
      .getMinutes()
      .toString()
      .padStart(2, '0')}`;

    if (pickerMode === 'start') {
      setStartDate(formattedDate);
    } else if (pickerMode === 'end') {
      setEndDate(formattedDate);
    } else if (pickerMode === 'time') {
      setTime(formattedTime);
    }

    setShowPicker(false);
  };

  const handleAdd = () => {
    onAdd({ title, description, startDate, dueDate: endDate, time, status: 'open' });
    setTitle('');
    setDescription('');
    setStartDate('');
    setEndDate('');
    setTime('');
    onClose();
  };

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={styles.overlay}>
        <View style={styles.modal}>
          <View style={styles.header}>
            <TouchableOpacity onPress={onClose}>
              <Ionicons name="arrow-back" size={24} color="#000" />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Add Task</Text>
            <View style={{ width: 24 }} />
          </View>

          <View style={styles.inputBox}>
            <Text style={styles.label}>Task Name</Text>
            <TextInput
              placeholder="Enter Task Name"
              placeholderTextColor="#999"
              style={styles.input}
              value={title}
              onChangeText={setTitle}
            />
          </View>

          <View style={styles.inputBox}>
            <Text style={styles.label}>Description</Text>
            <TextInput
              placeholder="Enter Task Description"
              placeholderTextColor="#999"
              style={[styles.input, { height: 80 }]}
              multiline
              value={description}
              onChangeText={setDescription}
            />
          </View>

          {/* Start Date */}
          <TouchableOpacity style={styles.selectBox} onPress={() => openPicker('start')}>
            <Ionicons name="calendar-outline" size={20} color="#6388AC" />
            <View style={{ flex: 1, marginLeft: 10 }}>
              <Text style={styles.selectLabel}>Start Date</Text>
              <Text style={styles.selectValue}>{startDate || 'Enter the Start Date'}</Text>
            </View>
            <Ionicons name="chevron-down" size={20} color="#333" />
          </TouchableOpacity>

          {/* End Date */}
          <TouchableOpacity style={styles.selectBox} onPress={() => openPicker('end')}>
            <Ionicons name="calendar-outline" size={20} color="#6388AC" />
            <View style={{ flex: 1, marginLeft: 10 }}>
              <Text style={styles.selectLabel}>End Date</Text>
              <Text style={styles.selectValue}>{endDate || 'Enter the End Date'}</Text>
            </View>
            <Ionicons name="chevron-down" size={20} color="#333" />
          </TouchableOpacity>

          {/* Time */}
          <TouchableOpacity style={styles.selectBox} onPress={() => openPicker('time')}>
            <Ionicons name="time-outline" size={20} color="#6388AC" />
            <View style={{ flex: 1, marginLeft: 10 }}>
              <Text style={styles.selectLabel}>Time</Text>
              <Text style={styles.selectValue}>{time || 'Enter Time'}</Text>
            </View>
            <Ionicons name="chevron-down" size={20} color="#333" />
          </TouchableOpacity>

          {/* Date/Time Picker */}
          {showPicker && (
            <DateTimePicker
              value={new Date()}
              mode={pickerMode === 'time' ? 'time' : 'date'}
              display="default"
              onChange={handleDateChange}
            />
          )}

          <TouchableOpacity style={styles.addButton} onPress={handleAdd}>
            <Text style={styles.addButtonText}>Add Task</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default AddTaskModal;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'flex-end',
  },
  modal: {
    backgroundColor: '#fff',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  inputBox: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    marginBottom: 6,
    color: '#333',
  },
  input: {
    backgroundColor: '#F6F6F6',
    paddingHorizontal: 14,
    paddingVertical: 12,
    borderRadius: 12,
    fontSize: 14,
    color: '#000',
  },
  selectBox: {
    backgroundColor: '#F6F6F6',
    padding: 14,
    borderRadius: 12,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  selectLabel: {
    fontSize: 13,
    color: '#888',
  },
  selectValue: {
    fontSize: 14,
    fontWeight: '500',
    color: '#000',
  },
  addButton: {
    backgroundColor: '#6388AC',
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 10,
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
