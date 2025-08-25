import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Alert, Dimensions } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useApp } from '../context/AppContext';
import LinearGradient from 'react-native-linear-gradient';
import ConfirmationModal from '../components/Modal/ConfirmationModal';

export default function ProfileScreen({ navigation }) {
  const { state, dispatch } = useApp();
  const { height } = Dimensions.get('window');
  const [modalVisible, setModalVisible] = useState(false);
  const [modalType, setModalType] = useState(null); // 'signout' or 'delete'

  const handleConfirm = () => {
    if (modalType === 'signout') {
      dispatch({ type: 'LOGOUT' });
    } else if (modalType === 'delete') {
      // Call your delete account API or logic here
      console.log('Account Deleted');
      dispatch({ type: 'LOGOUT' });
    }
    setModalVisible(false);
  };


  if (!state.isAuthenticated) {
    return (
      <View style={styles.container}>
        <View style={styles.signInPrompt}>
          <Ionicons name="person-circle-outline" size={100} color="#ef4444" />
          <Text style={styles.signInTitle}>Welcome to Foodies Hub B2B</Text>
          <Text style={styles.signInSubtitle}>
            Sign in to access your profile, order history, and more
          </Text>
          <TouchableOpacity
            style={styles.signInButton}
            onPress={() => navigation.navigate('Auth')}
          >
            <Text style={styles.signInButtonText}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  const menuItems = [
    { id: 'edit', title: 'Edit Profile', icon: 'person-outline', screen: 'ProfileEdit' },
    { id: 'orders', title: 'Order History', icon: 'receipt-outline', screen: 'OrderHistory' },
    { id: 'addresses', title: 'Saved Addresses', icon: 'location-outline', screen: 'Addresses' },
    { id: 'settings', title: 'Settings', icon: 'settings-outline', screen: 'Settings' },
    { id: 'privacy', title: 'Privacy Policy', icon: 'document-text-outline', screen: 'PrivacyPolicy' },
    { id: 'terms', title: 'Terms of Service', icon: 'reader-outline', screen: 'TermsConditions' },];

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
      {/* Profile Header */}
      <LinearGradient colors={['#ef4444', '#f97316']} style={[styles.header, { height: height * 0.25 }]}>
        <Ionicons name="person-circle" size={100} color="#fff" style={styles.avatarShadow} />
        <Text style={styles.userName}>{state.user?.name || 'User'}</Text>
        <Text style={styles.userEmail}>{state.user?.email || 'user@example.com'}</Text>
      </LinearGradient>

      {/* Menu Items */}
      <View style={styles.menuContainer}>
        {menuItems.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.menuItem}
            onPress={() => navigation.navigate(item.screen)}
          >
            <View style={styles.menuItemLeft}>
              <View style={styles.iconWrapper}>
                <Ionicons name={item.icon} size={22} color="#ef4444" />
              </View>
              <Text style={styles.menuItemText}>{item.title}</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#9ca3af" />
          </TouchableOpacity>
        ))}

        {/* Delete Account */}
       
        {/* <TouchableOpacity
          style={[styles.menuItem, styles.signOutItem]}
          onPress={() => {
            setModalType('delete');
            setModalVisible(true);
          }}
        >
          <View style={styles.menuItemLeft}>
            <View style={[styles.iconWrapper, { backgroundColor: '#fee2e2' }]}>
              <Ionicons name="trash-outline" size={22} color="#ef4444" />
            </View>
            <Text style={[styles.menuItemText, { color: '#ef4444', fontWeight: '600' }]}>
              Delete Account
            </Text>

          </View>
          <Ionicons name="chevron-forward" size={20} color="#9ca3af" />

        </TouchableOpacity> */}

        {/* Sign Out */}
        <TouchableOpacity
          style={[styles.menuItem]}
          onPress={() => {
            setModalType('signout');
            setModalVisible(true);
          }}
        >
          <View style={styles.menuItemLeft}>
            <View style={[styles.iconWrapper, { backgroundColor: '#fee2e2' }]}>
              <Ionicons name="log-out-outline" size={22} color="#ef4444" />
            </View>
            <Text style={[styles.menuItemText, { color: '#ef4444', fontWeight: '600' }]}>
              Sign Out
            </Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color="#9ca3af" />

        </TouchableOpacity>



        <ConfirmationModal
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
          onConfirm={handleConfirm}
          title={modalType === 'delete' ? 'Delete Account' : 'Sign Out'}
          message={
            modalType === 'delete'
              ? 'This will permanently delete your account and all data. Are you sure?'
              : 'Are you sure you want to sign out?'
          }
          confirmText={modalType === 'delete' ? 'Delete' : 'Sign Out'}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f4f6',
  },
  scrollContent: {
    paddingBottom: 20,
  },
  // Sign in view
  signInPrompt: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 32,
    backgroundColor: '#fff',
    margin: 20,
    borderRadius: 16,
    paddingVertical: 40,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 2,
  },
  signInTitle: {
    fontSize: 21,
    fontWeight: '700',
    color: '#111827',
    marginTop: 16,
    marginBottom: 6,
    textAlign:"center"
  },
  signInSubtitle: {
    fontSize: 15,
    color: '#6b7280',
    textAlign: 'center',
    marginBottom: 24,
    lineHeight: 20,
  },
  signInButton: {
    backgroundColor: '#ef4444',
    paddingHorizontal: 36,
    paddingVertical: 12,
    borderRadius: 8,
  },
  signInButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },

  header: {
    alignItems: 'center',
    paddingBottom: 40,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    elevation: 4,

  },
  avatarShadow: {
    textShadowColor: 'rgba(0,0,0,0.3)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  userName: { fontSize: 22, fontWeight: '700', color: '#fff', marginTop: 8, },
  userEmail: { fontSize: 14, color: '#fff', marginTop: 2 },

  // Menu
  menuContainer: {
    backgroundColor: '#fff',
    marginHorizontal: 16,
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#f3f4f6',
  },
  menuItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconWrapper: {
    backgroundColor: '#fee2e2',
    padding: 6,
    borderRadius: 8,
    marginRight: 12,
  },
  menuItemText: {
    fontSize: 16,
    color: '#111827',
  },
  signOutItem: {
    borderBottomWidth: 0,
  },
});
