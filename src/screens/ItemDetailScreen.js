import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useApp } from '../context/AppContext';
import Toast from 'react-native-simple-toast';

export default function ItemDetailScreen({ navigation }) {
  const { state, dispatch } = useApp();
  const item = state.selectedItem;

  if (!item) {
    return (
      <View style={styles.container}>
        <Text>Item not found</Text>
      </View>
    );
  }

  const handleAddToCart = () => {
    dispatch({ type: 'ADD_TO_CART', payload: item });
      Toast.show('Item added to cart!');

    navigation.goBack();
  };

  const isImageUrl = (str) => {
    return typeof str === 'string' && str.startsWith('http');
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
      <View style={styles.imageContainer}>
        {isImageUrl(item.image) ? (
          <Image
            source={{ uri: item.image }}
            style={styles.itemImageReal}
            resizeMode="cover"
          />
        ) : (
          <Text style={styles.itemImage}>{item.image}</Text>
        )}

        <TouchableOpacity
          style={styles.favoriteButton}
          onPress={() => dispatch({ type: 'TOGGLE_FAVORITE', payload: item.id })}
        >
          <Ionicons
            name={state.favorites.includes(item.id) ? 'heart' : 'heart-outline'}
            size={24}
            color={state.favorites.includes(item.id) ? '#ef4444' : '#6b7280'}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemDescription}>{item.description}</Text>

        <View style={styles.ratingContainer}>
          <Ionicons name="star" size={16} color="#fbbf24" />
          <Text style={styles.rating}>{item.rating || '4.5'}</Text>
          <Text style={styles.ratingCount}>(156 reviews)</Text>
        </View>

        <View style={styles.detailsSection}>
          <Text style={styles.sectionTitle}>Details</Text>
          <Text style={styles.detailsText}>
            This delicious dish is prepared with the finest ingredients and traditional cooking methods.
            Perfect for lunch or dinner, served fresh and hot.
          </Text>
        </View>

        <View style={styles.nutritionSection}>
          <Text style={styles.sectionTitle}>Nutritional Info</Text>
          <View style={styles.nutritionGrid}>
            <View style={styles.nutritionItem}>
              <Text style={styles.nutritionValue}>320</Text>
              <Text style={styles.nutritionLabel}>Calories</Text>
            </View>
            <View style={styles.nutritionItem}>
              <Text style={styles.nutritionValue}>18g</Text>
              <Text style={styles.nutritionLabel}>Protein</Text>
            </View>
            <View style={styles.nutritionItem}>
              <Text style={styles.nutritionValue}>25g</Text>
              <Text style={styles.nutritionLabel}>Carbs</Text>
            </View>
            <View style={styles.nutritionItem}>
              <Text style={styles.nutritionValue}>12g</Text>
              <Text style={styles.nutritionLabel}>Fat</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.footer}>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>${item.price}</Text>
        </View>
        <TouchableOpacity style={styles.addToCartButton} onPress={handleAddToCart}>
          <Ionicons name="bag-add" size={20} color="#fff" />
          <Text style={styles.addToCartText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafb',
  },
  scrollContent: {
    paddingBottom: 100,
  },
  imageContainer: {
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingVertical: 40,
    position: 'relative',
  },
  itemImage: {
    fontSize: 120,
  },
  itemImageReal: {
    width: 250,
    height: 250,
    borderRadius: 16,
  },
  favoriteButton: {
    position: 'absolute',
    top: 16,
    right: 16,
    padding: 8,
  },
  content: {
    padding: 16,
  },
  itemName: {
    fontSize: 24,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 8,
  },
  itemDescription: {
    fontSize: 16,
    color: '#6b7280',
    lineHeight: 24,
    marginBottom: 16,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginBottom: 24,
  },
  rating: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
  },
  ratingCount: {
    fontSize: 14,
    color: '#6b7280',
  },
  detailsSection: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 8,
  },
  detailsText: {
    fontSize: 14,
    color: '#6b7280',
    lineHeight: 20,
  },
  nutritionSection: {
    marginBottom: 24,
  },
  nutritionGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  nutritionItem: {
    alignItems: 'center',
    flex: 1,
  },
  nutritionValue: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
  },
  nutritionLabel: {
    fontSize: 12,
    color: '#6b7280',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#e5e7eb',
  },
  priceContainer: {
    flex: 1,
  },
  price: {
    fontSize: 24,
    fontWeight: '600',
    color: '#ef4444',
  },
  addToCartButton: {
    backgroundColor: '#ef4444',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
    gap: 8,
  },
  addToCartText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
