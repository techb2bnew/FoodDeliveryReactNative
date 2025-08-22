import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useApp } from '../context/AppContext';
import Toast from 'react-native-simple-toast';

export default function WishlistScreen() {
  const navigation = useNavigation();
  const { state, dispatch } = useApp();

  const allItems = [
    {
      id: 1,
      name: 'Margherita Pizza',
      description: 'Fresh tomato, mozzarella, basil',
      price: 16.99,
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1579751626657-72bc17010498?q=80',
    },
    {
      id: 2,
      name: 'Chicken Alfredo',
      description: 'Creamy pasta with grilled chicken',
      price: 18.99,
      rating: 4.7,
      image: 'https://plus.unsplash.com/premium_photo-1723575734758-97e6e862a670?q=80',
    },
    {
      id: 3,
      name: 'Classic Burger',
      description: 'Beef patty, lettuce, tomato, cheese',
      price: 14.99,
      rating: 4.6,
      image: 'https://images.unsplash.com/photo-1550547660-d9450f859349',
    },
  ];

  const wishlistItems = allItems.filter(item => state.favorites.includes(item.id));

  const handleRemoveFavorite = (id) => {
    dispatch({ type: 'TOGGLE_FAVORITE', payload: id });
  };

  const handleAddToCart = (item) => {
    dispatch({ type: 'ADD_TO_CART', payload: item });
    Toast.show('Item added to cart!');

  };

  if (wishlistItems.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>Your wishlist is empty ❤️</Text>
        <TouchableOpacity
          style={styles.browseButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.browseButtonText}>Browse Menu</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={wishlistItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.info}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.description}>{item.description}</Text>
              <Text style={styles.price}>${item.price}</Text>

              <View style={styles.actions}>
                <TouchableOpacity
                  style={[styles.button, styles.removeButton]}
                  onPress={() => handleRemoveFavorite(item.id)}
                >
                  <Text style={styles.buttonText}>Remove</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[styles.button, styles.cartButton]}
                  onPress={() => handleAddToCart(item)}
                >
                  <Text style={styles.buttonText}>Add to Cart</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafb',
    padding: 12,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 16,
    color: '#6b7280',
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 14,
    padding: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 3,
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 8,
    marginRight: 12,
  },
  info: {
    flex: 1,
    justifyContent: 'space-between',
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
  },
  description: {
    fontSize: 13,
    color: '#6b7280',
    marginVertical: 3,
  },
  price: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#ef4444',
    marginBottom: 8,
  },
  actions: {
    flexDirection: 'row',
    gap: 8,
  },
  button: {
    flex: 1,
    paddingVertical: 8,
    borderRadius: 6,
    alignItems: 'center',
  },
  removeButton: {
    backgroundColor: '#ef4444',
  },
  cartButton: {
    backgroundColor: '#10b981',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 13,
  },
  browseButton: {
    backgroundColor: '#ef4444',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
    marginTop:20
  },
  browseButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
