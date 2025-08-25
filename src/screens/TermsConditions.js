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

const TermsConditions = ({ navigation }) => {
  const handleBack = () => {
    navigation.goBack();
  };

  const TermsSection = ({ title, icon, children, iconColor = '#3B82F6' }) => (
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
          <Icon name="arrow-left" size={20} color="#ffffffff" />
        </TouchableOpacity>
        <View style={styles.headerTitle}>
          <Icon name="file-text" size={20} color="#fcfcfcff" style={styles.headerIcon} />
          <Text style={styles.headerText}>Terms of Service</Text>
        </View>
      </View>

      {/* Content */}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <TermsSection title="Terms of Service" icon="file-text">
          <Text style={styles.lastUpdated}>Last updated: December 18, 2024</Text>
          <Text style={styles.bodyText}>
            Welcome to FoodieHub! These Terms of Service ("Terms") govern your use of our food delivery platform. 
            By using our service, you agree to be bound by these terms.
          </Text>
        </TermsSection>

        <TermsSection title="Acceptance of Terms" icon="check-circle">
          <Text style={styles.bodyText}>
            By creating an account, downloading our app, or using our services, you acknowledge that you have read, 
            understood, and agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree 
            to these terms, please do not use our service.
          </Text>
        </TermsSection>

        <TermsSection title="Eligibility" icon="user-check">
          <Text style={styles.bodyText}>To use FoodieHub, you must:</Text>
          <BulletPoint>Be at least 18 years old or have parental consent</BulletPoint>
          <BulletPoint>Provide accurate and complete registration information</BulletPoint>
          <BulletPoint>Have the legal capacity to enter into binding agreements</BulletPoint>
          <BulletPoint>Not be prohibited from using our service under applicable law</BulletPoint>
          <BulletPoint>Maintain the security of your account credentials</BulletPoint>
        </TermsSection>

        <TermsSection title="Account Responsibilities" icon="user" iconColor="#10B981">
          <Text style={styles.bodyText}>You are responsible for:</Text>
          <BulletPoint>Maintaining the confidentiality of your account information</BulletPoint>
          <BulletPoint>All activities that occur under your account</BulletPoint>
          <BulletPoint>Providing accurate delivery addresses and contact information</BulletPoint>
          <BulletPoint>Notifying us immediately of any unauthorized account access</BulletPoint>
          <BulletPoint>Complying with all applicable laws and regulations</BulletPoint>
        </TermsSection>

        <TermsSection title="Service Description" icon="truck" iconColor="#F59E0B">
          <Text style={styles.bodyText}>
            FoodieHub provides a platform connecting customers with local restaurants for food delivery. Our service includes:
          </Text>
          <BulletPoint>Online ordering from partner restaurants</BulletPoint>
          <BulletPoint>Real-time order tracking</BulletPoint>
          <BulletPoint>Secure payment processing</BulletPoint>
          <BulletPoint>Customer support</BulletPoint>
          <BulletPoint>Delivery coordination</BulletPoint>
          <Text style={styles.bodyText}>
            We act as an intermediary and are not responsible for food preparation, quality, or restaurant operations.
          </Text>
        </TermsSection>

        <TermsSection title="Orders and Payments" icon="credit-card" iconColor="#8B5CF6">
          <View style={styles.subsection}>
            <Text style={styles.subsectionTitle}>Order Process</Text>
            <BulletPoint>Orders are confirmed when payment is successfully processed</BulletPoint>
            <BulletPoint>Prices may vary by restaurant and are subject to change</BulletPoint>
            <BulletPoint>Delivery fees, taxes, and tips are clearly displayed before checkout</BulletPoint>
            <BulletPoint>We reserve the right to refuse or cancel orders at our discretion</BulletPoint>
          </View>

          <View style={styles.subsection}>
            <Text style={styles.subsectionTitle}>Payment Terms</Text>
            <BulletPoint>Payment is due at the time of order placement</BulletPoint>
            <BulletPoint>We accept major credit cards, debit cards, and digital wallets</BulletPoint>
            <BulletPoint>Refunds are processed according to our refund policy</BulletPoint>
            <BulletPoint>You authorize us to charge your payment method for all orders</BulletPoint>
          </View>
        </TermsSection>

        <TermsSection title="Delivery Policy" icon="map-pin">
          <BulletPoint>Delivery times are estimates and may vary due to weather, traffic, or high demand</BulletPoint>
          <BulletPoint>You must be available to receive your order at the specified delivery address</BulletPoint>
          <BulletPoint>Valid ID may be required for age-restricted items</BulletPoint>
          <BulletPoint>We are not liable for orders delivered to incorrect addresses provided by you</BulletPoint>
          <BulletPoint>Contactless delivery options are available upon request</BulletPoint>
        </TermsSection>

        <TermsSection title="Cancellations and Refunds" icon="rotate-ccw">
          <View style={styles.subsection}>
            <Text style={styles.subsectionTitle}>Cancellation Policy</Text>
            <BulletPoint>Orders can be cancelled within 2 minutes of placement</BulletPoint>
            <BulletPoint>Once preparation begins, orders cannot be cancelled</BulletPoint>
            <BulletPoint>Restaurant-initiated cancellations result in automatic refunds</BulletPoint>
          </View>

          <View style={styles.subsection}>
            <Text style={styles.subsectionTitle}>Refund Policy</Text>
            <BulletPoint>Refunds are issued for cancelled or undelivered orders</BulletPoint>
            <BulletPoint>Quality issues must be reported within 2 hours of delivery</BulletPoint>
            <BulletPoint>Refunds are processed to the original payment method within 5-7 business days</BulletPoint>
            <BulletPoint>Delivery fees are non-refundable unless we fail to deliver</BulletPoint>
          </View>
        </TermsSection>

        <TermsSection title="Prohibited Conduct" icon="x-circle">
          <Text style={styles.bodyText}>You agree not to:</Text>
          <BulletPoint>Use the service for any illegal or unauthorized purpose</BulletPoint>
          <BulletPoint>Violate any applicable laws or regulations</BulletPoint>
          <BulletPoint>Provide false or misleading information</BulletPoint>
          <BulletPoint>Attempt to gain unauthorized access to our systems</BulletPoint>
          <BulletPoint>Interfere with the proper functioning of the service</BulletPoint>
          <BulletPoint>Harass, abuse, or harm other users or our staff</BulletPoint>
          <BulletPoint>Use automated systems to access the service</BulletPoint>
          <BulletPoint>Reverse engineer or attempt to extract source code</BulletPoint>
        </TermsSection>

        <TermsSection title="Disclaimers and Limitations" icon="alert-triangle" iconColor="#EF4444">
          <View style={styles.subsection}>
            <Text style={styles.subsectionTitle}>Service Availability</Text>
            <Text style={styles.bodyText}>
              We do not guarantee uninterrupted service availability. The service may be temporarily unavailable 
              due to maintenance, technical issues, or circumstances beyond our control.
            </Text>
          </View>

          <View style={styles.subsection}>
            <Text style={styles.subsectionTitle}>Food Safety and Quality</Text>
            <Text style={styles.bodyText}>
              While we work with licensed restaurants, we are not responsible for food preparation, ingredients, 
              allergens, or food safety. Please inform restaurants of any dietary restrictions or allergies.
            </Text>
          </View>

          <View style={styles.subsection}>
            <Text style={styles.subsectionTitle}>Limitation of Liability</Text>
            <Text style={styles.bodyText}>
              Our liability is limited to the amount you paid for the specific order. We are not liable for 
              indirect, incidental, or consequential damages.
            </Text>
          </View>
        </TermsSection>

        <TermsSection title="Intellectual Property" icon="copyright">
          <Text style={styles.bodyText}>
            All content, trademarks, logos, and intellectual property on our platform are owned by FoodieHub or 
            our licensors. You may not use, reproduce, or distribute our intellectual property without explicit 
            written permission.
          </Text>
        </TermsSection>

        <TermsSection title="Privacy" icon="shield">
          <Text style={styles.bodyText}>
            Your privacy is important to us. Please review our Privacy Policy to understand how we collect, 
            use, and protect your personal information. By using our service, you consent to our data practices 
            as described in the Privacy Policy.
          </Text>
        </TermsSection>

        <TermsSection title="Termination" icon="power">
          <Text style={styles.bodyText}>
            We may suspend or terminate your account at any time for violation of these terms or for any other reason. 
            You may delete your account at any time through the app settings. Upon termination, your right to use 
            the service ceases immediately.
          </Text>
        </TermsSection>

        <TermsSection title="Governing Law" icon="scale" iconColor="#14B8A6">
          <Text style={styles.bodyText}>
            These terms are governed by the laws of the jurisdiction where FoodieHub is headquartered. 
            Any disputes will be resolved through binding arbitration in accordance with the rules of the 
            American Arbitration Association.
          </Text>
        </TermsSection>

        <TermsSection title="Changes to Terms" icon="edit-3">
          <Text style={styles.bodyText}>
            We may modify these terms at any time. Material changes will be communicated through the app or 
            via email. Continued use of the service after changes constitute acceptance of the modified terms.
          </Text>
        </TermsSection>

        {/* <TermsSection title="Contact Information" icon="phone">
          <Text style={styles.bodyText}>
            For questions about these Terms of Service, please contact us:
          </Text>
          <View style={styles.contactInfo}>
            <Text style={styles.contactItem}>• Email: legal@foodiehub.com</Text>
            <Text style={styles.contactItem}>• Phone: 1-800-FOODIE-1</Text>
            <Text style={styles.contactItem}>• Address: 123 Food Street, Delivery City, DC 12345</Text>
            <Text style={styles.contactItem}>• Customer Support: support@foodiehub.com</Text>
          </View>
          <Text style={styles.bodyText}>
            By using FoodieHub, you acknowledge that you have read and understood these Terms of Service.
          </Text>
        </TermsSection> */}

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

export default TermsConditions;