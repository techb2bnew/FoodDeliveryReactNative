import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useApp } from '../context/AppContext';

const categories = [
  { id: 'starters', name: 'Starters', count: 5, image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400' },
  { id: 'maincourse', name: 'Main Course', count: 5, image: 'https://media.istockphoto.com/id/996699224/photo/assorted-indian-food-for-lunch-or-dinner-rice-lentils-paneer-dal-makhani-naan-chutney-spices.jpg?s=1024x1024&w=is&k=20&c=Jl_3te-B0rNAyBltzMbLAQG58Aj-uI1doPr6yyisGIQ=' },
  { id: 'desserts', name: 'Desserts', count: 5, image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=400' },
  { id: 'beverages', name: 'Beverages', count: 5, image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400' },
  { id: 'pizza', name: 'Pizza', count: 5, image: 'https://images.unsplash.com/photo-1594007654729-407eedc4be65?w=400' },
  { id: 'burgers', name: 'Burgers', count: 5, image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400' },
  { id: 'rolls', name: 'Rolls', count: 5, image: 'https://media.istockphoto.com/id/1400256468/photo/mix-vegetable-kathi-roll.jpg?s=1024x1024&w=is&k=20&c=6HZFbhwKO4pFBGG5EI78PKKfpx6o5GF8ag_Tgbp5qAU=' },
  { id: 'salads', name: 'Salads', count: 5, image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 'combos', name: 'Combos', count: 5, image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400' },
];

export default function CategoryGrid() {
  const navigation = useNavigation();
  const { dispatch } = useApp();

  const handleCategoryPress = (categoryId) => {
    dispatch({ type: 'SET_SELECTED_CATEGORY', payload: categoryId });
    navigation.navigate('CategoryItemsScreen',{
      categoryId:categoryId
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Categories</Text>
      <View style={styles.grid}>
        {categories.map((category) => (
          <TouchableOpacity
            key={category.id}
            style={styles.card}
            onPress={() => handleCategoryPress(category.id)}
          >
            <View style={styles.imageWrapper}>
              <Image source={{ uri: category.image }} style={styles.image} />
              <View style={styles.badge}>
                <Text style={styles.badgeText}>{category.count}</Text>
              </View>
            </View>
            <Text style={styles.name}>{category.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
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
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    width: '30%',
    backgroundColor: '#fff',
    borderRadius: 12,
    alignItems: 'center',
    paddingVertical: 12,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  imageWrapper: {
    position: 'relative',
    marginBottom: 6,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  badge: {
    position: 'absolute',
    top: -6,
    right: -6,
    backgroundColor: '#ff6600',
    borderRadius: 10,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  badgeText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: '600',
  },
  name: {
    fontSize: 13,
    fontWeight: '500',
    color: '#374151',
    textAlign: 'center',
  },
});
