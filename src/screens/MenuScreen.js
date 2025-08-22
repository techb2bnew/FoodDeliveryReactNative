import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import QuickFilters from '../components/QuickFilters';
import MenuSection from '../components/MenuSection';

export default function MenuScreen() {
  return (
    <View style={styles.container}>
      <ScrollView 
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <SearchBar />
        <QuickFilters />
        <MenuSection />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafb',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 20,
  },
});