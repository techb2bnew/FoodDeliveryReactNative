import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useApp } from '../context/AppContext';
import Toast from 'react-native-simple-toast';

export default function OrderHistoryScreen() {
  const { state, dispatch } = useApp();
  
  const handleReorder = (order) => {
    // Add order items back to cart
    order.items.forEach(itemName => {
      // This is simplified - in a real app you'd have proper item objects
      const item = {
        id: Math.random(),
        name: itemName,
        price: 15.99,
        image: '🍕',
        description: 'Delicious item'
      };
      dispatch({ type: 'ADD_TO_CART', payload: item });
        Toast.show('Item added to cart!');

    });
  };
  
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
      {state.orders.map((order) => (
        <View key={order.id} style={styles.orderCard}>
          <View style={styles.orderHeader}>
            <View>
              <Text style={styles.orderId}>Order #{order.id}</Text>
              <Text style={styles.orderDate}>{order.date}</Text>
            </View>
            <View style={styles.statusContainer}>
              <Text style={[styles.status, { color: order.status === 'Delivered' ? '#10b981' : '#f59e0b' }]}>
                {order.status}
              </Text>
            </View>
          </View>
          
          <View style={styles.orderItems}>
            {order.items.map((item, index) => (
              <Text key={index} style={styles.orderItem}>• {item}</Text>
            ))}
          </View>
          
          <View style={styles.orderFooter}>
            <Text style={styles.orderTotal}>${order.total}</Text>
            <TouchableOpacity 
              style={styles.reorderButton}
              onPress={() => handleReorder(order)}
            >
              <Ionicons name="refresh" size={16} color="#ef4444" />
              <Text style={styles.reorderText}>Reorder</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafb',
  },
  scrollContent: {
    padding: 16,
  },
  orderCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  orderHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  orderId: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
  },
  orderDate: {
    fontSize: 14,
    color: '#6b7280',
  },
  statusContainer: {
    backgroundColor: '#f3f4f6',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  status: {
    fontSize: 12,
    fontWeight: '500',
  },
  orderItems: {
    marginBottom: 12,
  },
  orderItem: {
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 4,
  },
  orderFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  orderTotal: {
    fontSize: 18,
    fontWeight: '600',
    color: '#ef4444',
  },
  reorderButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fef2f2',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
    gap: 4,
  },
  reorderText: {
    color: '#ef4444',
    fontSize: 14,
    fontWeight: '500',
  },
});