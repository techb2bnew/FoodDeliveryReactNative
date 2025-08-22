import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { useApp } from '../context/AppContext';
import Toast from 'react-native-simple-toast';

const popularItems = [
  {
    id: 1,
    name: 'Margherita Pizza',
    description: 'Fresh tomato, mozzarella, basil',
    price: 16.99,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1579751626657-72bc17010498?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Pizza image
    category: 'pizza'
  },
  {
    id: 2,
    name: 'Chicken Alfredo',
    description: 'Creamy pasta with grilled chicken',
    price: 18.99,
    rating: 4.7,
    image: 'https://plus.unsplash.com/premium_photo-1723575734758-97e6e862a670?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Pasta image
    category: 'pasta'
  },
  {
    id: 3,
    name: 'Classic Burger',
    description: 'Beef patty, lettuce, tomato, cheese',
    price: 14.99,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349', // Burger image
    category: 'burgers'
  },
  {
    id: 4,
    name: 'Caesar Salad',
    description: 'Romaine lettuce, parmesan, croutons',
    price: 12.99,
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38', // Salad image
    category: 'salads'
  },
];


export default function PopularItems() {
  const navigation = useNavigation();
  const { state, dispatch } = useApp();

  const handleItemPress = (item) => {
    dispatch({ type: 'SET_SELECTED_ITEM', payload: item });
    navigation.navigate('ItemDetail');
  };

  const handleAddToCart = (item) => {
    dispatch({ type: 'ADD_TO_CART', payload: item });
    Toast.show('Item added to cart!');
  };

  const updateQuantity = (itemId, newQuantity) => {
    if (newQuantity <= 0) {
      dispatch({ type: 'REMOVE_FROM_CART', payload: itemId });
    } else {
      dispatch({
        type: 'UPDATE_CART_QUANTITY',
        payload: { id: itemId, quantity: newQuantity }
      });
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Popular Items</Text>
        <TouchableOpacity>
          <Text style={styles.seeAll}>See All</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {popularItems.map((item) => {
          const cartItem = state.cart.find(ci => ci.id === item.id);

          return (
            <TouchableOpacity
              key={item.id}
              style={styles.itemCard}
              onPress={() => handleItemPress(item)}
            >
              <View style={styles.imageContainer}>
                <Image
                  source={{ uri: item.image }}
                  style={styles.itemImage}
                  resizeMode="cover"
                />
                <TouchableOpacity
                  style={styles.favoriteButton}
                  onPress={() => dispatch({ type: 'TOGGLE_FAVORITE', payload: item.id })}
                >
                  <Ionicons
                    name={state.favorites.includes(item.id) ? 'heart' : 'heart-outline'}
                    size={16}
                    color={state.favorites.includes(item.id) ? '#ef4444' : 'red'}
                  />
                </TouchableOpacity>
              </View>

              <View style={styles.itemInfo}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemDescription}>{item.description}</Text>

                <View style={styles.ratingContainer}>
                  <Ionicons name="star" size={12} color="#fbbf24" />
                  <Text style={styles.rating}>{item.rating}</Text>
                </View>

                <View style={styles.priceRow}>
                  <Text style={styles.price}>${item.price}</Text>

                  {cartItem ? (
                    <View style={styles.quantityControls}>
                      <TouchableOpacity
                        style={styles.quantityButton}
                        onPress={() => updateQuantity(item.id, cartItem.quantity - 1)}
                      >
                        <Ionicons name="remove" size={14} color="#ef4444" />
                      </TouchableOpacity>

                      <Text style={styles.quantity}>{cartItem.quantity}</Text>

                      <TouchableOpacity
                        style={styles.quantityButton}
                        onPress={() => updateQuantity(item.id, cartItem.quantity + 1)}
                      >
                        <Ionicons name="add" size={14} color="#ef4444" />
                      </TouchableOpacity>
                    </View>
                  ) : (
                    <TouchableOpacity
                      style={styles.addButton}
                      onPress={() => handleAddToCart(item)}
                    >
                      <Ionicons name="add" size={16} color="#fff" />
                    </TouchableOpacity>
                  )}
                </View>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: '#111827',
  },
  seeAll: {
    fontSize: 14,
    color: '#ef4444',
    fontWeight: '500',
  },
  scrollContent: {
    paddingHorizontal: 16,
    gap: 12,
  },
  itemCard: {
    width: 200,
    backgroundColor: '#fff',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  imageContainer: {
    position: 'relative',
    alignItems: 'center',
    paddingTop: 16,
  },
  itemImage: {
    fontSize: 48,
  },
  favoriteButton: {
    position: 'absolute',
    bottom: 8,
    right: 8,
    padding: 4,
  },
  itemInfo: {
    padding: 12,
  },
  itemName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 4,
  },
  itemDescription: {
    fontSize: 12,
    color: '#6b7280',
    marginBottom: 8,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginBottom: 8,
  },
  rating: {
    fontSize: 12,
    color: '#6b7280',
  },
  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
  itemImage: {
    width: '100%',
    height: 120,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  quantityControls: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fef2f2',
    borderRadius: 16,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  quantityButton: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ef4444',
  },
  quantity: {
    fontSize: 14,
    fontWeight: '600',
    color: '#111827',
    marginHorizontal: 6,
    minWidth: 18,
    textAlign: 'center',
  },
});