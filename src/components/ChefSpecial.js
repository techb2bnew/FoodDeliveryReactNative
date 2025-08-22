import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { useApp } from '../context/AppContext';

export default function ChefSpecial() {
  const navigation = useNavigation();
  const { dispatch } = useApp();

  const specialItem = {
    id: 101,
    name: 'Truffle Mushroom Risotto',
    description: 'Creamy arborio rice with wild mushrooms and black truffle oil',
    price: 32.99,
    image: 'https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'special',
    rating: 5.0,
  };

  const handlePress = () => {
    dispatch({ type: 'SET_SELECTED_ITEM', payload: specialItem });
    navigation.navigate('ItemDetail');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.card} onPress={handlePress}>
        <LinearGradient
          colors={['#7c3aed', '#a855f7']}
          style={styles.gradient}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          <View style={styles.content}>
            <View style={styles.header}>
              <Ionicons name="star" size={24} color="#fbbf24" />
              <Text style={styles.badge}>Chef's Special</Text>
            </View>
            
            <Text style={styles.title}>{specialItem.name}</Text>
            <Text style={styles.description}>{specialItem.description}</Text>
            
            <View style={styles.footer}>
              <Text style={styles.price}>${specialItem.price}</Text>
              <TouchableOpacity style={styles.orderButton} onPress={handlePress}>
                <Text style={styles.orderButtonText}>Order Now</Text>
                <Ionicons name="arrow-forward" size={16} color="#7c3aed" />
              </TouchableOpacity>
            </View>
          </View>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  card: {
    borderRadius: 16,
    overflow: 'hidden',
  },
  gradient: {},
  content: {
    gap: 12,
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  badge: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: '#fff',
  },
  description: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.9)',
    lineHeight: 20,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  price: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
  },
  orderButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    gap: 4,
  },
  orderButtonText: {
    color: '#7c3aed',
    fontSize: 14,
    fontWeight: '600',
  },
});
