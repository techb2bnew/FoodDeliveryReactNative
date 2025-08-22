import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { useApp } from '../context/AppContext';
import Toast from 'react-native-simple-toast';

const recentItems = [
  {
    id: 5,
    name: 'Pepperoni Pizza',
    description: 'Classic pepperoni with mozzarella',
    price: 18.99,
    image: '🍕',
    lastOrdered: '3 days ago'
  },
  {
    id: 6,
    name: 'Chicken Wings',
    description: 'Spicy buffalo wings with ranch',
    price: 13.99,
    image: '🍗',
    lastOrdered: '1 week ago'
  },
];

export default function RecentlyOrdered() {
  const navigation = useNavigation();
  const { state, dispatch } = useApp();
  
  if (!state.isAuthenticated) {
    return null;
  }
  
  const handleItemPress = (item) => {
    dispatch({ type: 'SET_SELECTED_ITEM', payload: item });
    navigation.navigate('ItemDetail');
  };
  
  const handleAddToCart = (item) => {
    dispatch({ type: 'ADD_TO_CART', payload: item });
    Toast.show('Item added to cart!');

  };
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Order Again</Text>
      
      {recentItems.map((item) => (
        <TouchableOpacity
          key={item.id}
          style={styles.itemCard}
          onPress={() => handleItemPress(item)}
        >
          <Text style={styles.itemImage}>{item.image}</Text>
          
          <View style={styles.itemInfo}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemDescription}>{item.description}</Text>
            <Text style={styles.lastOrdered}>Last ordered: {item.lastOrdered}</Text>
          </View>
          
          <View style={styles.rightSection}>
            <Text style={styles.price}>${item.price}</Text>
            <TouchableOpacity 
              style={styles.addButton}
              onPress={() => handleAddToCart(item)}
            >
              <Ionicons name="add" size={16} color="#fff" />
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 16,
  },
  itemCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  itemImage: {
    fontSize: 40,
    marginRight: 12,
  },
  itemInfo: {
    flex: 1,
  },
  itemName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 4,
  },
  itemDescription: {
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 4,
  },
  lastOrdered: {
    fontSize: 12,
    color: '#9ca3af',
  },
  rightSection: {
    alignItems: 'flex-end',
    gap: 8,
  },
  price: {
    fontSize: 16,
    fontWeight: '600',
    color: '#ef4444',
  },
  addButton: {
    backgroundColor: '#ef4444',
    borderRadius: 12,
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
});