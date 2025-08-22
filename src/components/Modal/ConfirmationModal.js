import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function ConfirmationModal({
  visible,
  onClose,
  onConfirm,
  title,
  message,
  icon
}) {
  return (
    <Modal
      visible={visible}
      animationType="fade"
      transparent
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.modalBox}>
          <View style={styles.iconCircle}>
            <Ionicons
              name={icon || 'alert-circle-outline'}
              size={50}
              color="#ef4444"
            />
          </View>

          <Text style={styles.title}>{title || 'Are you sure?'}</Text>
          <Text style={styles.message}>
            {message || 'This action cannot be undone.'}
          </Text>

          <View style={styles.buttonRow}>
            <TouchableOpacity
              style={[styles.button, styles.cancelButton]}
              onPress={onClose}
              activeOpacity={0.8}
            >
              <Text style={[styles.buttonText, { color: '#374151' }]}>
                Cancel
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.button, styles.confirmButton]}
              onPress={onConfirm}
              activeOpacity={0.8}
            >
              <Text style={[styles.buttonText, { color: '#fff' }]}>Confirm</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.45)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20
  },
  modalBox: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 25,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 8 },
    shadowRadius: 20,
    elevation: 10
  },
  iconCircle: {
    backgroundColor: '#fee2e2',
    padding: 15,
    borderRadius: 50,
    marginBottom: 15
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 6
  },
  message: {
    fontSize: 15,
    color: '#6b7280',
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 20
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 10
  },
  cancelButton: {
    backgroundColor: '#f3f4f6',
    marginRight: 8
  },
  confirmButton: {
    backgroundColor: '#ef4444',
    marginLeft: 8
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600'
  }
});
