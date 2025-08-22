import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { useApp } from '../context/AppContext';
import Toast from 'react-native-simple-toast';

const menuItems = [
  // Pizza
  {
    id: 1,
    name: 'Quattro Stagioni Pizza',
    description: 'Mushrooms, artichokes, olives, prosciutto',
    price: 22.99,
    image: 'https://plus.unsplash.com/premium_photo-1730829140510-68f7cf61d621?q=80&w=987&auto=format&fit=crop',
    category: 'pizza',
    rating: 4.9
  },
  {
    id: 2,
    name: 'Margherita Pizza',
    description: 'Classic tomato, mozzarella & basil',
    price: 18.99,
    image: 'https://images.unsplash.com/photo-1598023696416-0193a0bcd302?q=80&w=2136&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'pizza',
    rating: 4.7
  },

  // Burgers
  {
    id: 3,
    name: 'BBQ Bacon Burger',
    description: 'Angus beef, bacon, BBQ sauce, onion rings',
    price: 19.99,
    image: 'https://images.unsplash.com/photo-1561758033-f8ff74d6494a?q=80&w=800&auto=format&fit=crop',
    category: 'burger',
    rating: 4.7
  },
  {
    id: 4,
    name: 'Cheese Burger',
    description: 'Juicy beef patty with cheddar cheese',
    price: 15.99,
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=800&auto=format&fit=crop',
    category: 'burger',
    rating: 4.6
  },

  // Pasta
  {
    id: 5,
    name: 'Lobster Ravioli',
    description: 'Fresh lobster in creamy tomato sauce',
    price: 28.99,
    image: 'https://plus.unsplash.com/premium_photo-1664206964048-26b7a0ebf093?q=80&w=800&auto=format&fit=crop',
    category: 'pasta',
    rating: 4.8
  },
  {
    id: 6,
    name: 'Spaghetti Carbonara',
    description: 'Pasta with pancetta, eggs & parmesan',
    price: 16.99,
    image: 'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?q=80&w=800&auto=format&fit=crop',
    category: 'pasta',
    rating: 4.5
  },

  // Salads
  {
    id: 7,
    name: 'Greek Salad',
    description: 'Feta cheese, olives, cucumber, tomato',
    price: 12.99,
    image: 'https://images.unsplash.com/photo-1606735584785-1848fdcaea57?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'salad',
    rating: 4.6
  },
  {
    id: 8,
    name: 'Caesar Salad',
    description: 'Romaine lettuce, croutons, parmesan',
    price: 11.99,
    image: 'https://images.unsplash.com/photo-1512852939750-1305098529bf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'salad',
    rating: 4.4
  },

  // Desserts
  {
    id: 9,
    name: 'Tiramisu',
    description: 'Classic Italian dessert with mascarpone',
    price: 8.99,
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?q=80&w=800&auto=format&fit=crop',
    category: 'dessert',
    rating: 4.9
  },
  {
    id: 10,
    name: 'Chocolate Lava Cake',
    description: 'Warm chocolate cake with molten center',
    price: 9.99,
    image: 'https://plus.unsplash.com/premium_photo-1723867522131-af9733323bc1?q=80&w=2009&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'dessert',
    rating: 4.8
  },

  // Drinks
  {
    id: 11,
    name: 'Fresh Lemonade',
    description: 'Refreshing lemon juice with mint',
    price: 4.99,
    image: 'https://media.istockphoto.com/id/955909192/photo/ginger-ale.jpg?s=1024x1024&w=is&k=20&c=RgYr3mmU2VvFCuXEsGnfhBkn5C6C8hVw2_EDB4R6mlQ=',
    category: 'drink',
    rating: 4.5
  },
  {
    id: 12,
    name: 'Iced Coffee',
    description: 'Cold brew coffee with ice',
    price: 5.99,
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=800&auto=format&fit=crop',
    category: 'drink',
    rating: 4.6
  }
];


export default function MenuSection() {
  const navigation = useNavigation();
  const { state, dispatch } = useApp();

  const filteredItems = state.selectedCategory === 'all'
    ? menuItems
    : menuItems.filter(item => item.category === state.selectedCategory);

  const searchedItems = state.searchQuery
    ? filteredItems.filter(item =>
      item.name.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(state.searchQuery.toLowerCase())
    )
    : filteredItems;

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
      <Text style={styles.title}>Full Menu</Text>

        {searchedItems.map((item) => {
        const cartItem = state.cart.find(ci => ci.id === item.id);

        return (
          <TouchableOpacity
            key={item.id}
            style={styles.card}
            onPress={() => handleItemPress(item)}
          >
            <Image
              source={{ uri: item.image }}
              style={styles.image}
              resizeMode="cover"
            />

            <View style={styles.info}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.description}>{item.description}</Text>

              <View style={styles.bottomRow}>
                <Text style={styles.price}>${item.price}</Text>
                <View style={styles.ratingRow}>
                  <Ionicons name="star" size={14} color="#fbbf24" />
                  <Text style={styles.rating}>{item.rating}</Text>
                </View>
              </View>
            </View>

            {cartItem ? (
              <View style={styles.quantityControls}>
                <TouchableOpacity
                  style={styles.quantityButton}
                  onPress={() => updateQuantity(item.id, cartItem.quantity - 1)}
                >
                  <Ionicons name="remove" size={16} color="#ef4444" />
                </TouchableOpacity>

                <Text style={styles.quantity}>{cartItem.quantity}</Text>

                <TouchableOpacity
                  style={styles.quantityButton}
                  onPress={() => updateQuantity(item.id, cartItem.quantity + 1)}
                >
                  <Ionicons name="add" size={16} color="#ef4444" />
                </TouchableOpacity>
              </View>
            ) : (
              <TouchableOpacity
                style={styles.addButton}
                onPress={() => handleAddToCart(item)}
              >
                <Ionicons name="add" size={18} color="#fff" />
                <Text style={styles.addText}>Add</Text>
              </TouchableOpacity>
            )}
          </TouchableOpacity>
        );
      })}

      {searchedItems.length === 0 && (
        <View style={styles.noResults}>
          <Text style={styles.noResultsText}>No items found</Text>
        </View>
      )}
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
    marginBottom: 12,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 10,
    marginBottom: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
    elevation: 2,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 12,
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
  },
  description: {
    fontSize: 13,
    color: '#6b7280',
    marginVertical: 4,
  },
  bottomRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 4,
  },
  price: {
    fontSize: 15,
    fontWeight: '600',
    color: '#111827',
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  rating: {
    fontSize: 13,
    color: '#6b7280',
  },
  addButton: {
    flexDirection: 'row',
    backgroundColor: '#f97316',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 6,
    alignItems: 'center',
    marginLeft: 8,
  },
  addText: {
    color: '#fff',
    fontSize: 13,
    fontWeight: '500',
    marginLeft: 4,
  },
  noResults: {
    alignItems: 'center',
    paddingVertical: 32,
  },
  noResultsText: {
    fontSize: 16,
    color: '#6b7280',
  },
  quantityControls: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fef2f2',
    borderRadius: 20,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginLeft: 8,
  },
  quantityButton: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ef4444',
  },
  quantity: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
    marginHorizontal: 8,
    minWidth: 20,
    textAlign: 'center',
  },
});
