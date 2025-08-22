import React, { useState, useRef, useEffect } from 'react';
import { View, Text, ScrollView, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const { width } = Dimensions.get('window');
const BANNER_WIDTH = width - 32;

const banners = [
  {
    id: 1,
    title: "50% OFF",
    subtitle: "on your first order!",
    description: "Use code WELCOME50",
    colors: ['#ef4444', '#dc2626'],
  },
  {
    id: 2,
    title: "Free Delivery",
    subtitle: "on orders above $25",
    description: "Limited time offer",
    colors: ['#f59e0b', '#d97706'],
  },
  {
    id: 3,
    title: "Weekend Special",
    subtitle: "Buy 2 Get 1 Free",
    description: "Valid on all pizzas",
    colors: ['#10b981', '#059669'],
  },
];

export default function PromotionalBanner() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollViewRef = useRef(null);
  
  useEffect(() => {
    const timer = setInterval(() => {
      const nextIndex = (currentIndex + 1) % banners.length;
      setCurrentIndex(nextIndex);
      scrollViewRef.current?.scrollTo({
        x: nextIndex * BANNER_WIDTH,
        animated: true,
      });
    }, 3000);
    
    return () => clearInterval(timer);
  }, [currentIndex]);
  
  const handleScroll = (event) => {
    const contentOffset = event.nativeEvent.contentOffset.x;
    const index = Math.round(contentOffset / BANNER_WIDTH);
    setCurrentIndex(index);
  };
  
  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={handleScroll}
        contentContainerStyle={styles.scrollContent}
      >
        {banners.map((banner) => (
          <TouchableOpacity key={banner.id} style={styles.bannerContainer}>
            <LinearGradient
              colors={banner.colors}
              style={styles.banner}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
            >
              <View style={styles.bannerContent}>
                <Text style={styles.bannerTitle}>{banner.title}</Text>
                <Text style={styles.bannerSubtitle}>{banner.subtitle}</Text>
                <Text style={styles.bannerDescription}>{banner.description}</Text>
              </View>
            </LinearGradient>
          </TouchableOpacity>
        ))}
      </ScrollView>
      
      <View style={styles.pagination}>
        {banners.map((_, index) => (
          <View
            key={index}
            style={[
              styles.paginationDot,
              { backgroundColor: index === currentIndex ? '#ef4444' : '#d1d5db' }
            ]}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  scrollContent: {
    alignItems: 'center',
  },
  bannerContainer: {
    width: BANNER_WIDTH,
    marginHorizontal: 0,
  },
  banner: {
    height: 120,
    borderRadius: 16,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  bannerContent: {
    alignItems: 'flex-start',
  },
  bannerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 4,
  },
  bannerSubtitle: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 4,
  },
  bannerDescription: {
    fontSize: 14,
    color: '#fef3f3',
    opacity: 0.9,
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 12,
    gap: 8,
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
});