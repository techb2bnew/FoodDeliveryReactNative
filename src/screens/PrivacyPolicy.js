import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const PrivacyPolicy = ({ navigation }) => {
  const handleBack = () => {
    navigation.goBack();
  };

  const PolicySection = ({ title, icon, children, iconColor = '#3B82F6' }) => (
    <View style={styles.sectionContainer}>
      <View style={styles.sectionHeader}>
        <Icon name={icon} size={16} color={iconColor} style={styles.sectionIcon} />
        <Text style={styles.sectionTitle}>{title}</Text>
      </View>
      <View style={styles.sectionContent}>
        {children}
      </View>
    </View>
  );

  const BulletPoint = ({ children }) => (
    <View style={styles.bulletContainer}>
      <Text style={styles.bulletPoint}>•</Text>
      <Text style={styles.bulletText}>{children}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBack} style={styles.backButton}>
          <Icon name="arrow-left" size={20} color="#feffffff" />
        </TouchableOpacity>
        <View style={styles.headerTitle}>
          <Icon name="shield" size={20} color="#fefefeff" style={styles.headerIcon} />
          <Text style={styles.headerText}>Privacy Policy</Text>
        </View>
      </View>

      {/* Content */}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <PolicySection title="Your Privacy Matters" icon="shield">
          <Text style={styles.lastUpdated}>Last updated: December 18, 2024</Text>
          <Text style={styles.bodyText}>
            At FoodieHub, we respect your privacy and are committed to protecting your personal data. 
            This privacy policy explains how we collect, use, and safeguard your information when you use our food delivery service.
          </Text>
        </PolicySection>

        <PolicySection title="Information We Collect" icon="database" iconColor="#10B981">
          <View style={styles.subsection}>
            <Text style={styles.subsectionTitle}>Personal Information</Text>
            <BulletPoint>Name, email address, and phone number</BulletPoint>
            <BulletPoint>Delivery addresses and location data</BulletPoint>
            <BulletPoint>Payment information (processed securely)</BulletPoint>
            <BulletPoint>Profile picture (optional)</BulletPoint>
          </View>

          <View style={styles.subsection}>
            <Text style={styles.subsectionTitle}>Order Information</Text>
            <BulletPoint>Order history and preferences</BulletPoint>
            <BulletPoint>Food allergies and dietary restrictions</BulletPoint>
            <BulletPoint>Reviews and ratings</BulletPoint>
            <BulletPoint>Communication with customer support</BulletPoint>
          </View>

          <View style={styles.subsection}>
            <Text style={styles.subsectionTitle}>Technical Information</Text>
            <BulletPoint>Device information and app usage data</BulletPoint>
            <BulletPoint>IP address and approximate location</BulletPoint>
            <BulletPoint>Cookies and similar technologies</BulletPoint>
          </View>
        </PolicySection>

        <PolicySection title="How We Use Your Information" icon="eye" iconColor="#F59E0B">
          <BulletPoint>Process and deliver your food orders</BulletPoint>
          <BulletPoint>Provide customer support and resolve issues</BulletPoint>
          <BulletPoint>Send order updates and delivery notifications</BulletPoint>
          <BulletPoint>Improve our service and app functionality</BulletPoint>
          <BulletPoint>Personalize your experience and recommendations</BulletPoint>
          <BulletPoint>Prevent fraud and ensure account security</BulletPoint>
          <BulletPoint>Comply with legal obligations</BulletPoint>
        </PolicySection>

        <PolicySection title="Information Sharing" icon="share-2" iconColor="#8B5CF6">
          <Text style={styles.bodyText}>
            We do not sell your personal information. We may share information with:
          </Text>
          <BulletPoint>Restaurant partners to fulfill your orders</BulletPoint>
          <BulletPoint>Delivery partners to complete deliveries</BulletPoint>
          <BulletPoint>Payment processors for secure transactions</BulletPoint>
          <BulletPoint>Service providers who help us operate the app</BulletPoint>
          <BulletPoint>Legal authorities when required by law</BulletPoint>
        </PolicySection>

        <PolicySection title="Data Security" icon="lock" iconColor="#EF4444">
          <Text style={styles.bodyText}>
            We implement industry-standard security measures to protect your data:
          </Text>
          <BulletPoint>Encryption of sensitive data in transit and at rest</BulletPoint>
          <BulletPoint>Secure payment processing through certified providers</BulletPoint>
          <BulletPoint>Regular security audits and updates</BulletPoint>
          <BulletPoint>Limited access to personal data on a need-to-know basis</BulletPoint>
          <BulletPoint>Secure data centers with physical access controls</BulletPoint>
        </PolicySection>

        <PolicySection title="Your Rights" icon="users" iconColor="#14B8A6">
          <Text style={styles.bodyText}>You have the right to:</Text>
          <BulletPoint>Access and review your personal data</BulletPoint>
          <BulletPoint>Correct inaccurate or incomplete information</BulletPoint>
          <BulletPoint>Delete your account and associated data</BulletPoint>
          <BulletPoint>Export your data in a portable format</BulletPoint>
          <BulletPoint>Opt out of marketing communications</BulletPoint>
          <BulletPoint>Restrict certain data processing activities</BulletPoint>
        </PolicySection>

        <PolicySection title="Cookies and Tracking" icon="bell" iconColor="#F59E0B">
          <Text style={styles.bodyText}>
            We use cookies and similar technologies to:
          </Text>
          <BulletPoint>Remember your preferences and settings</BulletPoint>
          <BulletPoint>Analyze app usage and improve performance</BulletPoint>
          <BulletPoint>Provide personalized content and recommendations</BulletPoint>
          <BulletPoint>Ensure security and prevent fraud</BulletPoint>
          <Text style={styles.bodyText}>
            You can manage cookie preferences in your device settings.
          </Text>
        </PolicySection>

        <PolicySection title="Data Retention" icon="clock">
          <Text style={styles.bodyText}>
            We retain your personal data only as long as necessary to provide our services and comply with legal obligations. 
            Order history is kept for 7 years for tax and legal purposes. Account data is deleted within 30 days of account closure, 
            unless retention is required by law.
          </Text>
        </PolicySection>

        <PolicySection title="Children's Privacy" icon="user">
          <Text style={styles.bodyText}>
            Our service is not intended for children under 13 years of age. We do not knowingly collect personal information 
            from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, 
            please contact us to have it removed.
          </Text>
        </PolicySection>

        <PolicySection title="Changes to This Policy" icon="refresh-cw">
          <Text style={styles.bodyText}>
            We may update this privacy policy from time to time. We will notify you of any material changes by posting the new 
            policy in the app and sending a notification. Your continued use of the service after changes become effective 
            constitutes acceptance of the updated policy.
          </Text>
        </PolicySection>

        {/* <PolicySection title="Contact Us" icon="phone">
          <Text style={styles.bodyText}>
            If you have questions about this privacy policy or our data practices, please contact us:
          </Text>
          <View style={styles.contactInfo}>
            <Text style={styles.contactItem}>• Email: privacy@foodiehub.com</Text>
            <Text style={styles.contactItem}>• Phone: 1-800-FOODIE-1</Text>
            <Text style={styles.contactItem}>• Address: 123 Food Street, Delivery City, DC 12345</Text>
          </View>
        </PolicySection> */}

        <View style={styles.bottomSpacing} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  header: {
    backgroundColor: '#ef4444',
    paddingHorizontal: 16,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  backButton: {
    padding: 8,
    marginRight: 8,
  },
  headerTitle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerIcon: {
    marginRight: 8,
  },
  headerText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  sectionContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  sectionIcon: {
    marginRight: 8,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
  },
  sectionContent: {
    gap: 12,
  },
  lastUpdated: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 12,
  },
  bodyText: {
    fontSize: 14,
    color: '#374151',
    lineHeight: 20,
  },
  subsection: {
    marginBottom: 16,
  },
  subsectionTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 8,
  },
  bulletContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 6,
  },
  bulletPoint: {
    fontSize: 14,
    color: '#374151',
    marginRight: 8,
    lineHeight: 20,
  },
  bulletText: {
    fontSize: 14,
    color: '#374151',
    lineHeight: 20,
    flex: 1,
  },
  contactInfo: {
    marginTop: 12,
  },
  contactItem: {
    fontSize: 14,
    color: '#374151',
    lineHeight: 20,
    marginBottom: 4,
  },
  bottomSpacing: {
    height: 24,
  },
});

export default PrivacyPolicy;