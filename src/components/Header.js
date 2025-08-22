import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { useApp } from '../context/AppContext';

export default function Header() {
  const navigation = useNavigation();
  const { state } = useApp();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.leftSection}>
          <View style={styles.locationContainer}>
            <Ionicons name="location" size={16} color="#ef4444" />
            <Text style={styles.locationText}>Delivering to</Text>
          </View>
          <Text style={styles.restaurantName}>Foodies Hub B2B</Text>
        </View>

        <View style={styles.rightSection}>
          <TouchableOpacity
            style={styles.cartButton}
            onPress={() => navigation.navigate('Cart')}
          >
            <Feather name="shopping-cart" size={24} color="#fff" />
            {state.cart.length > 0 && (
              <View style={styles.cartBadge}>
                <Text style={styles.cartBadgeText}>{state.cart.length}</Text>
              </View>
            )}
          </TouchableOpacity>

          {/* <TouchableOpacity
             style={styles.cartButton}
            onPress={() => navigation.navigate('Profile')}
          >
            <Feather name="user" size={24} color="#fff" />
          </TouchableOpacity> */}
          <TouchableOpacity
            style={styles.cartButton}
            onPress={() => navigation.navigate('Wishlist')}
          >
            <Feather name="heart" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#fff',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  leftSection: {
    flex: 1,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  locationText: {
    marginLeft: 4,
    fontSize: 12,
    color: '#6b7280',
  },
  restaurantName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
  },
  rightSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  cartButton: {
    backgroundColor: '#ef4444',
    borderRadius: 20,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  cartBadge: {
    position: 'absolute',
    top: -6,   // thoda upar shift
    right: -6, // thoda side me shift
    backgroundColor: '#dc2626',
    borderRadius: 10,
    minWidth: 18,
    height: 18,
    paddingHorizontal: 4,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#fff', // thoda outline for better visibility
  },
  cartBadgeText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: '600',
  },
  profileButton: {
    padding: 4,
  },
});