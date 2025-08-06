import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import LoginScreen from '../screens/LoginScreen';

const STORAGE_KEY = '@user_name';

export default function ProfileScreen() {
  const [name, setName] = useState('');
  const [tempName, setTempName] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const router = useRouter();

  useEffect(() => {
    loadName();
  }, []);

  const loadName = async () => {
    try {
      const storedName = await AsyncStorage.getItem(STORAGE_KEY);
      if (storedName) {
        setName(storedName);
        setTempName(storedName);
      } else {
        setName('Thiru Buvan');
        setTempName('Thiru Buvan');
      }
    } catch (e) {
      console.log('Failed to load name');
    }
  };

  const handleUpdate = async () => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, tempName);
      setName(tempName);
      setIsEditing(false);
    } catch (e) {
      console.log('Failed to save name');
    }
  };

  const handleLogout = () => {
    router.replace('/LoginScreen');
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image source={require('../../assets/images/profile-icon.jpg')} style={styles.profileImage} />
        <TouchableOpacity style={styles.editIcon}>
          <Ionicons name="camera-outline" size={20} color="#fff" />
        </TouchableOpacity>
      </View>

      <View style={styles.infoBox}>
        <View style={styles.nameRow}>
          <Text style={styles.label}>Name</Text>
          <TouchableOpacity onPress={() => setIsEditing(true)}>
            <Ionicons name="pencil" size={16} color="#6388AC" />
          </TouchableOpacity>
        </View>

        {isEditing ? (
          <TextInput
            style={styles.input}
            value={tempName}
            onChangeText={setTempName}
            placeholder="Enter name"
          />
        ) : (
          <Text style={styles.value}>{name}</Text>
        )}

        <Text style={styles.label}>Email</Text>
        <Text style={styles.value}>thiru@example.com</Text>

        <Text style={styles.label}>Contact</Text>
        <Text style={styles.value}>+91 98765 43210</Text>
      </View>

      {isEditing && (
        <TouchableOpacity style={styles.updateButton} onPress={handleUpdate}>
          <Ionicons name="checkmark" size={20} color="#fff" style={{ marginRight: 8 }} />
          <Text style={styles.updateText}>Update</Text>
        </TouchableOpacity>
      )}

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Ionicons name="log-out-outline" size={20} color="#fff" style={{ marginRight: 8 }} />
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2FCFE',
    alignItems: 'center',
    padding: 20,
  },
  profileContainer: {
    position: 'relative',
    marginTop: 40,
    marginBottom: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  editIcon: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    backgroundColor: '#6388AC',
    borderRadius: 20,
    padding: 6,
  },
  infoBox: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    elevation: 1,
  },
  label: {
    fontSize: 14,
    color: '#999',
    marginTop: 10,
  },
  nameRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  value: {
    fontSize: 16,
    color: '#000',
    fontWeight: '500',
  },
  input: {
    fontSize: 16,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 4,
    color: '#000',
  },
  updateButton: {
    marginTop: 20,
    backgroundColor: '#6388AC',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 12,
  },
  updateText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  logoutButton: {
    marginTop: 20,
    backgroundColor: '#6388AC',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 12,
  },
  logoutText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
