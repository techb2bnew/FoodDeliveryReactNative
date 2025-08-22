import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import PromotionalBanner from '../components/PromotionalBanner';
import QuickFilters from '../components/QuickFilters';
import RestaurantInfo from '../components/RestaurantInfo';
import CategoryGrid from '../components/CategoryGrid';
import PopularItems from '../components/PopularItems';
import RecentlyOrdered from '../components/RecentlyOrdered';
import ChefSpecial from '../components/ChefSpecial';
import LimitedTimeOffers from '../components/LimitedTimeOffers';
import MenuSection from '../components/MenuSection';
import CustomerReviews from '../components/CustomerReviews';
import RestaurantHours from '../components/RestaurantHours';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <SearchBar />
        <PromotionalBanner />
        <QuickFilters />
        <MenuSection />
        <CategoryGrid />
        <PopularItems />
        <RecentlyOrdered />
        <ChefSpecial />
        <LimitedTimeOffers />
        <CustomerReviews />
        <RestaurantInfo />
        <RestaurantHours />
        <View style={styles.bottomSpacing} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafb',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 20,
  },
  bottomSpacing: {
    height: 24,
  },
});