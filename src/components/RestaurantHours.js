import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const hours = [
  { day: 'Monday', hours: '11:00 AM - 10:00 PM' },
  { day: 'Tuesday', hours: '11:00 AM - 10:00 PM' },
  { day: 'Wednesday', hours: '11:00 AM - 10:00 PM' },
  { day: 'Thursday', hours: '11:00 AM - 10:00 PM' },
  { day: 'Friday', hours: '11:00 AM - 11:00 PM' },
  { day: 'Saturday', hours: '11:00 AM - 11:00 PM' },
  { day: 'Sunday', hours: '12:00 PM - 9:00 PM' },
];

export default function RestaurantHours() {
  // Get today name
  const todayIndex = new Date().getDay(); // Sunday=0, Monday=1, etc.
  const todayName = [
    'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
  ][todayIndex];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="time" size={24} color="#ef4444" />
        <Text style={styles.title}>Restaurant Hours</Text>
      </View>
      
      <View style={styles.hoursContainer}>
        {hours.map((schedule, index) => {
          const isToday = schedule.day === todayName;
          return (
            <View key={index} style={[styles.hourRow, isToday && styles.todayRow]}>
              <Text style={[styles.day, isToday && styles.todayText]}>
                {schedule.day}
              </Text>
              <Text style={[styles.hours, isToday && styles.todayText]}>
                {schedule.hours}
              </Text>
            </View>
          );
        })}
      </View>
      
      <View style={styles.statusContainer}>
        <View style={styles.statusDot} />
        <Text style={styles.statusText}>Open now • Closes at 10:00 PM</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    margin: 16,
    padding: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    gap: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
  },
  hoursContainer: {
    marginBottom: 16,
  },
  hourRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 4,
  },
  todayRow: {
    backgroundColor: '#fef2f2',
    paddingHorizontal: 8,
    borderRadius: 6,
    marginHorizontal: -8,
  },
  day: {
    fontSize: 14,
    color: '#6b7280',
  },
  hours: {
    fontSize: 14,
    color: '#6b7280',
  },
  todayText: {
    color: '#ef4444',
    fontWeight: '500',
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#10b981',
  },
  statusText: {
    fontSize: 14,
    color: '#10b981',
    fontWeight: '500',
  },
});
