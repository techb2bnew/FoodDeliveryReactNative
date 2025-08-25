import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useApp } from '../context/AppContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function AuthScreen({ navigation }) {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const { dispatch } = useApp();

  const handleAuth = async () => {
    if (!email || !password || (isSignUp && !name)) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    const user = {
      id: '1',
      name: isSignUp
        ? (email?.split('@')[0])   // अगर name empty है तो email से निकालो
        : 'Test User',
      email,
    };

    try {
      await AsyncStorage.setItem('user', JSON.stringify(user)); // Save to storage
      dispatch({ type: 'SET_USER', payload: user });
      navigation.goBack();
    } catch (error) {
      console.error('Error saving user:', error);
    }
  };

  return (
    <View style={styles.container}>
      {/* Logo and Tagline */}
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://i.pinimg.com/736x/a5/c1/bc/a5c1bca23f422395414a5252148af632.jpg' }} // Pizza logo
          style={styles.logo}
        />
        <Text style={styles.appName}>Foodies Hub B2B</Text>
        <Text style={styles.tagline}>
          {isSignUp ? 'Join us & taste the magic 🍕' : 'Sign in & get your pizza fix 🍕'}
        </Text>
      </View>

      {/* Auth Form */}
      <View style={styles.form}>
        <Text style={styles.title}>{isSignUp ? 'Create Account' : 'Welcome Back'}</Text>
        <Text style={styles.subtitle}>
          {isSignUp ? 'Sign up to get started' : 'Sign in to continue'}
        </Text>

        {isSignUp && (
          <TextInput
            style={styles.input}
            placeholder="Full Name"
            value={name}
            onChangeText={setName}
            autoCapitalize="words"
            placeholderTextColor="#a1a1aa"
          />
        )}

        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          placeholderTextColor="#a1a1aa"
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          placeholderTextColor="#a1a1aa"
        />

        <TouchableOpacity
          onPress={handleAuth}
          activeOpacity={0.85}>
          <LinearGradient
            colors={['#ff5f6d', '#ef4444']}
            style={styles.authButton}
          >
            <Text style={styles.authButtonText}>
              {isSignUp ? 'Sign Up' : 'Sign In'}
            </Text>
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.switchButton}
          onPress={() => setIsSignUp(!isSignUp)}
        >
          <Text style={styles.switchButtonText}>
            {isSignUp ? 'Already have an account? Sign In' : "Don't have an account? Sign Up"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fdfdfd',
    // justifyContent: 'center',
    paddingHorizontal: 20,
  },
  header: {
    alignItems: 'center',
    marginVertical: 34,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 8,
    resizeMode: "contain"
  },
  appName: {
    fontSize: 26,
    fontWeight: '700',
    color: '#ef4444',
  },
  tagline: {
    fontSize: 14,
    color: '#6b7280',
    textAlign: 'center',
    marginTop: 4,
  },
  form: {
    backgroundColor: '#fff',
    borderRadius: 24,
    padding: 26,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.08,
    shadowRadius: 14,
    elevation: 4,
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    color: '#1f2937',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 15,
    color: '#6b7280',
    textAlign: 'center',
    marginBottom: 24,
  },
  input: {
    borderWidth: 1,
    borderColor: '#e4e4e7',
    borderRadius: 14,
    padding: 14,
    // paddingVertical: 12,
    fontSize: 16,
    backgroundColor: '#fafafa',
    marginBottom: 24,
    color: '#111827',
  },
  authButton: {
    borderRadius: 14,
    alignItems: 'center',
    marginBottom: 14,
  },
  authButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
    paddingVertical: 15,
  },
  switchButton: {
    alignItems: 'center',
    marginTop: 2,
  },
  switchButtonText: {
    color: '#ef4444',
    fontSize: 14,
    fontWeight: '500',
  },
});
