import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Pressable } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useApp } from '../context/AppContext';
import { useNavigation } from '@react-navigation/native';

const offers = [
  {
    id: 1,
    title: 'Flash Sale: 40% OFF',
    description: 'All Burgers & Fries',
    newPrice: 9.59,
    oldPrice: 15.99,
    price: 9.59,
    discount: '40% OFF',
    color: '#ef4444',
    claimed: 67,
    total: 100,
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349',
    endTime: new Date(Date.now() + 50 * 60 * 1000), // 50 minutes left
  },
  {
    id: 2,
    title: 'Buy 2 Get 1 Free',
    description: 'Premium Desserts',
    newPrice: 5.99,
    oldPrice: 8.99,
    price: 5.99,
    discount: '33% OFF',
    color: '#f43f5e',
    claimed: 23,
    total: 50,
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836',
    endTime: new Date(Date.now() + 110 * 60 * 1000), // 1h 50min left
  },
];

export default function LimitedTimeOffers() {
  const [timeLeft, setTimeLeft] = useState({});
  const navigation = useNavigation();
  const { dispatch } = useApp();


  const handleOfferPress = (offer) => {
    dispatch({ type: 'SET_SELECTED_ITEM', payload: offer });
    navigation.navigate('ItemDetail');
  };

  useEffect(() => {
    const timer = setInterval(() => {
      const updated = {};
      offers.forEach((offer) => {
        const diff = offer.endTime - new Date();
        if (diff > 0) {
          const hours = String(Math.floor(diff / (1000 * 60 * 60))).padStart(2, '0');
          const minutes = String(Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
          const seconds = String(Math.floor((diff % (1000 * 60)) / 1000)).padStart(2, '0');
          updated[offer.id] = `${hours}:${minutes}:${seconds}`;
        } else {
          updated[offer.id] = 'Expired';
        }
      });
      setTimeLeft(updated);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Ionicons name="flame-outline" size={20} color="#ef4444" />
        <Text style={styles.title}>Limited Time Offers</Text>
        <View style={styles.endingSoonBadge}>
          <Ionicons name="time-outline" size={14} color="#ef4444" />
          <Text style={styles.endingSoonText}>Ending Soon</Text>
        </View>
      </View>

      {offers.map((offer) => {
        const percentage = Math.round((offer.claimed / offer.total) * 100);

        return (
          <Pressable key={offer.id} style={styles.offerCard} onPress={() => handleOfferPress(offer)}>
            <Image source={{ uri: offer.image }} style={styles.thumbnail} />

            <View style={styles.offerInfo}>
              <View style={styles.topRow}>
                <View style={{ flex: 1 }}>
                  <Text style={styles.offerTitle}>{offer.title}</Text>
                  <Text style={styles.offerDescription}>{offer.description}</Text>
                </View>
                <View style={styles.timerBadge}>
                  <Text style={styles.timerText}>
                    {timeLeft[offer.id] || '--:--:--'}
                  </Text>
                </View>
              </View>

              <View style={styles.priceRow}>
                <Text style={styles.newPrice}>${offer.newPrice.toFixed(2)}</Text>
                <Text style={styles.oldPrice}>${offer.oldPrice.toFixed(2)}</Text>
                <View style={[styles.discountBadge, { backgroundColor: offer.color }]}>
                  <Text style={styles.discountText}>{offer.discount}</Text>
                </View>
              </View>

              <View style={styles.claimedRow}>
                <Text style={styles.claimedText}>
                  Claimed: {offer.claimed}/{offer.total}
                </Text>
                <Text style={styles.claimedText}>{percentage}% claimed</Text>
              </View>

              <View style={styles.progressBarBg}>
                <View style={[styles.progressBarFill, { width: `${percentage}%` }]} />
              </View>

              <TouchableOpacity style={styles.claimButton}>
                <Ionicons name="trending-up-outline" size={16} color="#fff" />
                <Text style={styles.claimButtonText}>Claim Offer</Text>
              </TouchableOpacity>
            </View>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    marginLeft: 6,
    color: '#111827',
  },
  endingSoonBadge: {
    flexDirection: 'row',
    backgroundColor: '#fee2e2',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    marginLeft: 'auto',
    alignItems: 'center',
  },
  endingSoonText: {
    color: '#ef4444',
    fontSize: 12,
    marginLeft: 4,
    fontWeight: '600',
  },
  offerCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  thumbnail: {
    width: 90,
    height: 90,
  },
  offerInfo: {
    flex: 1,
    padding: 12,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 4,
  },
  offerTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#111827',
  },
  offerDescription: {
    fontSize: 12,
    color: '#6b7280',
    marginTop: 2,
  },
  timerBadge: {
    backgroundColor: '#ef4444',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 6,
  },
  timerText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 6,
  },
  newPrice: {
    color: '#ef4444',
    fontWeight: '700',
    fontSize: 14,
    marginRight: 6,
  },
  oldPrice: {
    color: '#9ca3af',
    fontSize: 12,
    textDecorationLine: 'line-through',
    marginRight: 6,
  },
  discountBadge: {
    borderRadius: 4,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  discountText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: '600',
  },
  claimedRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  claimedText: {
    fontSize: 10,
    color: '#6b7280',
  },
  progressBarBg: {
    height: 6,
    backgroundColor: '#e5e7eb',
    borderRadius: 3,
    marginVertical: 4,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: 6,
    backgroundColor: '#111827',
  },
  claimButton: {
    flexDirection: 'row',
    backgroundColor: '#ef4444',
    borderRadius: 20,
    paddingVertical: 6,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 6,
  },
  claimButtonText: {
    color: '#fff',
    fontSize: 13,
    fontWeight: '600',
    marginLeft: 4,
  },
});
