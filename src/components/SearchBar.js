import React from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useApp } from '../context/AppContext';

export default function SearchBar() {
  const { state, dispatch } = useApp();
  
  const handleSearch = (text) => {
    dispatch({ type: 'SET_SEARCH_QUERY', payload: text });
  };
  
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="#6b7280" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search for dishes, cuisines..."
          value={state.searchQuery}
          onChangeText={handleSearch}
          placeholderTextColor="#9ca3af"
        />
        {/* <TouchableOpacity style={styles.voiceButton}>
          <Ionicons name="mic" size={20} color="#ef4444" />
        </TouchableOpacity> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#fff',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f3f4f6',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#111827',
  },
  voiceButton: {
    padding: 4,
  },
});