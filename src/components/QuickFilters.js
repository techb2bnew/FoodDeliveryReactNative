import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { useApp } from '../context/AppContext';

const filters = [
  { id: 'all', name: 'All', emoji: '🍽️' },
  { id: 'pizza', name: 'Pizza', emoji: '🍕' },
  { id: 'burger', name: 'Burgers', emoji: '🍔' },
  { id: 'pasta', name: 'Pasta', emoji: '🍝' },
  { id: 'salad', name: 'Salads', emoji: '🥗' },
  { id: 'dessert', name: 'Desserts', emoji: '🍰' },
  { id: 'drink', name: 'Drinks', emoji: '🥤' },
];

export default function QuickFilters() {
  const { state, dispatch } = useApp();

  // ✅ Ensure "all" is selected by default if nothing is set
  useEffect(() => {
    if (!state.selectedCategory) {
      dispatch({ type: 'SET_SELECTED_CATEGORY', payload: 'all' });
    }
  }, [state.selectedCategory, dispatch]);

  const handleFilterSelect = (filterId) => {
    dispatch({ type: 'SET_SELECTED_CATEGORY', payload: filterId });
  };

  return (
    <View style={styles.container}>
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {filters.map((filter) => (
          <TouchableOpacity
            key={filter.id}
            style={[
              styles.filterButton,
              state.selectedCategory === filter.id && styles.activeFilterButton
            ]}
            onPress={() => handleFilterSelect(filter.id)}
          >
            <Text style={styles.filterEmoji}>{filter.emoji}</Text>
            <Text style={[
              styles.filterText,
              state.selectedCategory === filter.id && styles.activeFilterText
            ]}>
              {filter.name}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
  },
  scrollContent: {
    paddingHorizontal: 16,
    gap: 12,
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f3f4f6',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    gap: 6,
  },
  activeFilterButton: {
    backgroundColor: '#ef4444',
  },
  filterEmoji: {
    fontSize: 16,
  },
  filterText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#374151',
  },
  activeFilterText: {
    color: '#fff',
  },
});
