import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Linking } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function SupportScreen() {
  const supportOptions = [
    {
      id: 'call',
      title: 'Call Us',
      subtitle: '+1 (555) 123-4567',
      icon: 'call-outline',
      action: () => Linking.openURL('tel:+15551234567'),
    },
    {
      id: 'email',
      title: 'Email Support',
      subtitle: 'support@bellavista.com',
      icon: 'mail-outline',
      action: () => Linking.openURL('mailto:support@bellavista.com'),
    },
    {
      id: 'chat',
      title: 'Live Chat',
      subtitle: 'Available 9 AM - 9 PM',
      icon: 'chatbubble-outline',
      action: () => {},
    },
  ];
  
  const faqItems = [
    {
      question: 'How long does delivery take?',
      answer: 'Delivery typically takes 25-35 minutes depending on your location and order size.',
    },
    {
      question: 'What are your delivery hours?',
      answer: 'We deliver from 11 AM to 10 PM Monday through Saturday, and 12 PM to 9 PM on Sunday.',
    },
    {
      question: 'Do you offer contactless delivery?',
      answer: 'Yes, we offer contactless delivery. Just mention it in the special instructions when placing your order.',
    },
    {
      question: 'Can I modify my order after placing it?',
      answer: 'You can modify your order within 5 minutes of placing it. Contact us immediately for changes.',
    },
  ];
  
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Contact Us</Text>
        <View style={styles.contactOptions}>
          {supportOptions.map((option) => (
            <TouchableOpacity
              key={option.id}
              style={styles.contactOption}
              onPress={option.action}
            >
              <Ionicons name={option.icon} size={24} color="#ef4444" />
              <View style={styles.contactText}>
                <Text style={styles.contactTitle}>{option.title}</Text>
                <Text style={styles.contactSubtitle}>{option.subtitle}</Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#d1d5db" />
            </TouchableOpacity>
          ))}
        </View>
      </View>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Frequently Asked Questions</Text>
        <View style={styles.faqContainer}>
          {faqItems.map((item, index) => (
            <View key={index} style={styles.faqItem}>
              <Text style={styles.faqQuestion}>{item.question}</Text>
              <Text style={styles.faqAnswer}>{item.answer}</Text>
            </View>
          ))}
        </View>
      </View>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Business Hours</Text>
        <View style={styles.hoursContainer}>
          <View style={styles.hourRow}>
            <Text style={styles.dayText}>Monday - Saturday</Text>
            <Text style={styles.timeText}>11:00 AM - 10:00 PM</Text>
          </View>
          <View style={styles.hourRow}>
            <Text style={styles.dayText}>Sunday</Text>
            <Text style={styles.timeText}>12:00 PM - 9:00 PM</Text>
          </View>
        </View>
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
    padding: 16,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 12,
  },
  contactOptions: {
    backgroundColor: '#fff',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  contactOption: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f3f4f6',
  },
  contactText: {
    flex: 1,
    marginLeft: 12,
  },
  contactTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#111827',
  },
  contactSubtitle: {
    fontSize: 14,
    color: '#6b7280',
    marginTop: 2,
  },
  faqContainer: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  faqItem: {
    marginBottom: 16,
  },
  faqQuestion: {
    fontSize: 16,
    fontWeight: '500',
    color: '#111827',
    marginBottom: 4,
  },
  faqAnswer: {
    fontSize: 14,
    color: '#6b7280',
    lineHeight: 20,
  },
  hoursContainer: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  hourRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
  dayText: {
    fontSize: 16,
    color: '#111827',
  },
  timeText: {
    fontSize: 16,
    color: '#6b7280',
  },
});