import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons';
import { t } from 'i18next';
import { Colors } from '@/constants/Colors';

export default function SaveButton() {
  return (
    <TouchableOpacity style={styles.saveButton}>
      <Feather
        name='check-circle'
        color={Colors.green}
        size={20}
      />
      <Text style={styles.saveButtonText}>{t('common.saveButton')}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  saveButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  saveButtonText: {
    color: Colors.green,
  },
});