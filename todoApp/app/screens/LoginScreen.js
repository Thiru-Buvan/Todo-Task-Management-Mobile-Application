import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Alert, TextInput } from 'react-native';
import { useRouter } from 'expo-router';

export default function LoginScreen() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
   router.replace('/(tabs)/tasklist');
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/images/login-illustration.png')} style={styles.image} />

      <Text style={styles.title}>ToDo List</Text>
      <Text style={styles.subtitle}>Daily Task</Text>

      <View style={styles.quoteContainer}>
        <Text style={styles.quote}>Success is the sum of small efforts</Text>
        <Text style={styles.quote}>repeated day in and day out</Text>
        <Text style={styles.author}>— Robert Collier</Text>
      </View>


      <TouchableOpacity style={styles.googleButton} onPress={handleLogin}>
        <Text style={styles.btnText}>Log In</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F2FCFE', justifyContent: 'center', alignItems: 'center', padding: 20 },
  image: { width: 280, height: 280, marginBottom: 20 },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 5 },
  subtitle: { fontSize: 20, fontWeight: '500', marginBottom: 25 },
  quoteContainer: { alignItems: 'center', marginBottom: 30, paddingHorizontal: 10 },
  quote: { fontSize: 16, color: '#444', textAlign: 'center', lineHeight: 22 },
  author: { fontSize: 14, color: '#777', marginTop: 10, fontStyle: 'italic' },
  input: {
    width: '100%',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginBottom: 12,
    fontSize: 16,
  },
  googleButton: {
    width: '100%',
    backgroundColor: '#6388AC',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  btnText: { fontSize: 16, fontWeight: '500', color: '#fff' },
});
