import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import LimitedTimeOffers from '../components/LimitedTimeOffers';
import ChefSpecial from '../components/ChefSpecial';

export default function OffersScreen() {
  return (
    <View style={styles.container}>
      <ScrollView 
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <LimitedTimeOffers />
        <ChefSpecial />
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