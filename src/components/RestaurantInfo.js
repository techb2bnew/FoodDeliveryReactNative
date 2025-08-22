import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function RestaurantInfo() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Foodies Hub B2B</Text>
        <View style={styles.ratingContainer}>
          <Ionicons name="star" size={16} color="#fbbf24" />
          <Text style={styles.rating}>4.8</Text>
          <Text style={styles.ratingCount}>(2,500+ reviews)</Text>
        </View>
      </View>
      
      <Text style={styles.description}>
        Authentic Italian cuisine with a modern twist. Fresh ingredients, traditional recipes, and exceptional service.
      </Text>
      
      <View style={styles.infoRow}>
        <View style={styles.infoItem}>
          <Ionicons name="time" size={16} color="#6b7280" />
          <Text style={styles.infoText}>25-35 min</Text>
        </View>
        <View style={styles.infoItem}>
          <Ionicons name="bicycle" size={16} color="#6b7280" />
          <Text style={styles.infoText}>Free delivery</Text>
        </View>
        <View style={styles.infoItem}>
          <Ionicons name="card" size={16} color="#6b7280" />
          <Text style={styles.infoText}>Min $15</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    margin: 16,
    padding: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  header: {
    marginBottom: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 4,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  rating: {
    fontSize: 14,
    fontWeight: '600',
    color: '#111827',
  },
  ratingCount: {
    fontSize: 14,
    color: '#6b7280',
  },
  description: {
    fontSize: 14,
    color: '#6b7280',
    lineHeight: 20,
    marginBottom: 12,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  infoText: {
    fontSize: 14,
    color: '#6b7280',
  },
});