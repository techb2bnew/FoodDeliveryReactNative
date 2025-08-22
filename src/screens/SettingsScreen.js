import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Switch } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function SettingsScreen() {
  const [notifications, setNotifications] = useState(true);
  const [locationServices, setLocationServices] = useState(true);
  const [marketingEmails, setMarketingEmails] = useState(false);
  
  const settingsSections = [
    {
      title: 'Preferences',
      items: [
        {
          id: 'notifications',
          title: 'Push Notifications',
          subtitle: 'Receive order updates and offers',
          icon: 'notifications-outline',
          type: 'toggle',
          value: notifications,
          onChange: setNotifications,
        },
        {
          id: 'location',
          title: 'Location Services',
          subtitle: 'Help us find nearby restaurants',
          icon: 'location-outline',
          type: 'toggle',
          value: locationServices,
          onChange: setLocationServices,
        },
        {
          id: 'marketing',
          title: 'Marketing Emails',
          subtitle: 'Receive special offers via email',
          icon: 'mail-outline',
          type: 'toggle',
          value: marketingEmails,
          onChange: setMarketingEmails,
        },
      ],
    },
    {
      title: 'About',
      items: [
        {
          id: 'terms',
          title: 'Terms of Service',
          icon: 'document-text-outline',
          type: 'link',
        },
        {
          id: 'privacy',
          title: 'Privacy Policy',
          icon: 'shield-outline',
          type: 'link',
        },
        {
          id: 'version',
          title: 'App Version',
          subtitle: '1.0.0',
          icon: 'information-circle-outline',
          type: 'info',
        },
      ],
    },
  ];
  
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
      {settingsSections.map((section) => (
        <View key={section.title} style={styles.section}>
          <Text style={styles.sectionTitle}>{section.title}</Text>
          <View style={styles.sectionContent}>
            {section.items.map((item) => (
              <View key={item.id} style={styles.settingItem}>
                <View style={styles.settingLeft}>
                  <Ionicons name={item.icon} size={24} color="#6b7280" />
                  <View style={styles.settingText}>
                    <Text style={styles.settingTitle}>{item.title}</Text>
                    {item.subtitle && (
                      <Text style={styles.settingSubtitle}>{item.subtitle}</Text>
                    )}
                  </View>
                </View>
                
                {item.type === 'toggle' && (
                  <Switch
                    value={item.value}
                    onValueChange={item.onChange}
                    trackColor={{ false: '#d1d5db', true: '#fecaca' }}
                    thumbColor={item.value ? '#ef4444' : '#f3f4f6'}
                  />
                )}
                
                {item.type === 'link' && (
                  <Ionicons name="chevron-forward" size={20} color="#d1d5db" />
                )}
              </View>
            ))}
          </View>
        </View>
      ))}
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
  sectionContent: {
    backgroundColor: '#fff',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f3f4f6',
  },
  settingLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    gap: 12,
  },
  settingText: {
    flex: 1,
  },
  settingTitle: {
    fontSize: 16,
    color: '#111827',
  },
  settingSubtitle: {
    fontSize: 14,
    color: '#6b7280',
    marginTop: 2,
  },
});