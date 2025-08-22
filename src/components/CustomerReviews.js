import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const reviews = [
  {
    id: 1,
    name: 'Sarah Johnson',
    rating: 5,
    comment: 'Amazing food and quick delivery! The pizza was still hot when it arrived.',
    date: '2 days ago'
  },
  {
    id: 2,
    name: 'Mike Chen',
    rating: 4,
    comment: 'Great variety of dishes. The pasta was delicious but could use more seasoning.',
    date: '1 week ago'
  },
  {
    id: 3,
    name: 'Emma Wilson',
    rating: 5,
    comment: 'Best Italian restaurant in town! Always consistent quality.',
    date: '2 weeks ago'
  },
];

export default function CustomerReviews() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Customer Reviews</Text>
      
      <ScrollView 
        // horizontal 
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {reviews.map((review) => (
          <View key={review.id} style={styles.reviewCard}>
            <View style={styles.reviewHeader}>
              <Text style={styles.reviewerName}>{review.name}</Text>
              <Text style={styles.reviewDate}>{review.date}</Text>
            </View>
            
            <View style={styles.ratingContainer}>
              {[...Array(5)].map((_, i) => (
                <Ionicons
                  key={i}
                  name="star"
                  size={14}
                  color={i < review.rating ? '#fbbf24' : '#e5e7eb'}
                />
              ))}
            </View>
            
            <Text style={styles.reviewComment}>{review.comment}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 16,
    paddingHorizontal: 16,
  },
  scrollContent: {
    paddingHorizontal: 16,
    gap: 12,
  },
  reviewCard: {
    width: "100%",
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  reviewHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  reviewerName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#111827',
  },
  reviewDate: {
    fontSize: 12,
    color: '#9ca3af',
  },
  ratingContainer: {
    flexDirection: 'row',
    gap: 2,
    marginBottom: 8,
  },
  reviewComment: {
    fontSize: 14,
    color: '#6b7280',
    lineHeight: 20,
  },
});