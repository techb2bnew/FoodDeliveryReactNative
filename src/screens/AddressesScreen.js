import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Alert, TextInput } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useApp } from '../context/AppContext';

export default function AddressesScreen() {
  const { state, dispatch } = useApp();
  const [showAddForm, setShowAddForm] = useState(false);
  const [newAddress, setNewAddress] = useState('');
  const [addressType, setAddressType] = useState('Home');
  
  const handleAddAddress = () => {
    if (!newAddress.trim()) {
      Alert.alert('Error', 'Please enter an address');
      return;
    }
    
    const address = {
      id: Date.now(),
      type: addressType,
      address: newAddress,
      isDefault: state.addresses.length === 0,
    };
    
    dispatch({ type: 'ADD_ADDRESS', payload: address });
    setNewAddress('');
    setShowAddForm(false);
  };
  
  const handleDeleteAddress = (addressId) => {
    Alert.alert(
      'Delete Address',
      'Are you sure you want to delete this address?',
      [
        { text: 'Cancel', style: 'cancel' },
        { 
          text: 'Delete', 
          style: 'destructive',
          onPress: () => dispatch({ type: 'DELETE_ADDRESS', payload: addressId })
        }
      ]
    );
  };
  
  const handleSetDefault = (addressId) => {
    dispatch({ type: 'SET_DEFAULT_ADDRESS', payload: addressId });
  };
  
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
      {state.addresses.map((address) => (
        <View key={address.id} style={styles.addressCard}>
          <View style={styles.addressHeader}>
            <View style={styles.addressTypeContainer}>
              <Text style={styles.addressType}>{address.type}</Text>
              {address.isDefault && (
                <View style={styles.defaultBadge}>
                  <Text style={styles.defaultText}>Default</Text>
                </View>
              )}
            </View>
            <TouchableOpacity onPress={() => handleDeleteAddress(address.id)}>
              <Ionicons name="trash-outline" size={20} color="#ef4444" />
            </TouchableOpacity>
          </View>
          
          <Text style={styles.addressText}>{address.address}</Text>
          
          {!address.isDefault && (
            <TouchableOpacity 
              style={styles.setDefaultButton}
              onPress={() => handleSetDefault(address.id)}
            >
              <Text style={styles.setDefaultText}>Set as Default</Text>
            </TouchableOpacity>
          )}
        </View>
      ))}
      
      {showAddForm ? (
        <View style={styles.addForm}>
          <Text style={styles.formTitle}>Add New Address</Text>
          
          <View style={styles.typeSelector}>
            {['Home', 'Work', 'Other'].map((type) => (
              <TouchableOpacity
                key={type}
                style={[styles.typeButton, addressType === type && styles.selectedType]}
                onPress={() => setAddressType(type)}
              >
                <Text style={[styles.typeText, addressType === type && styles.selectedTypeText]}>
                  {type}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
          
          <TextInput
            style={styles.addressInput}
            placeholder="Enter your address"
            value={newAddress}
            onChangeText={setNewAddress}
            multiline
          />
          
          <View style={styles.formButtons}>
            <TouchableOpacity 
              style={styles.cancelButton}
              onPress={() => setShowAddForm(false)}
            >
              <Text style={styles.cancelButtonText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.saveButton}
              onPress={handleAddAddress}
            >
              <Text style={styles.saveButtonText}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <TouchableOpacity 
          style={styles.addButton}
          onPress={() => setShowAddForm(true)}
        >
          <Ionicons name="add" size={24} color="#ef4444" />
          <Text style={styles.addButtonText}>Add New Address</Text>
        </TouchableOpacity>
      )}
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
  addressCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  addressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  addressTypeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  addressType: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
  },
  defaultBadge: {
    backgroundColor: '#10b981',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 12,
  },
  defaultText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '500',
  },
  addressText: {
    fontSize: 14,
    color: '#6b7280',
    lineHeight: 20,
    marginBottom: 12,
  },
  setDefaultButton: {
    alignSelf: 'flex-start',
  },
  setDefaultText: {
    color: '#ef4444',
    fontSize: 14,
    fontWeight: '500',
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    borderWidth: 2,
    borderColor: '#ef4444',
    borderStyle: 'dashed',
    gap: 8,
  },
  addButtonText: {
    color: '#ef4444',
    fontSize: 16,
    fontWeight: '500',
  },
  addForm: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  formTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 16,
  },
  typeSelector: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 16,
  },
  typeButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#f3f4f6',
  },
  selectedType: {
    backgroundColor: '#ef4444',
  },
  typeText: {
    color: '#6b7280',
    fontSize: 14,
    fontWeight: '500',
  },
  selectedTypeText: {
    color: '#fff',
  },
  addressInput: {
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    minHeight: 80,
    textAlignVertical: 'top',
    marginBottom: 16,
  },
  formButtons: {
    flexDirection: 'row',
    gap: 12,
  },
  cancelButton: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#d1d5db',
    alignItems: 'center',
  },
  cancelButtonText: {
    color: '#6b7280',
    fontSize: 16,
    fontWeight: '500',
  },
  saveButton: {
    flex: 1,
    backgroundColor: '#ef4444',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});