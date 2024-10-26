import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import colors from '../constants/colors';

export default function ItemCard({ item, onDelete }) {
  return (
    <View style={styles.card}>
      <View>
        <Text style={styles.name}>{item.name}</Text>
        {item.recipient && (
          <Text style={styles.recipient}>for {item.recipient}</Text>
        )}
      </View>
      <View style={styles.rightSection}>
        <Text style={styles.cost}>${item.cost}</Text>
        <TouchableOpacity onPress={() => onDelete(item.id)}>
          <MaterialIcons name="delete" size={24} color={colors.warning} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  // ... styles here
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    marginVertical: 8,
    backgroundColor: colors.card,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.border,
  },
  name: {
    fontSize: 18,
    color: colors.text,
  },
  recipient: {
    fontSize: 14,
    color: colors.text,
    marginTop: 4,
  },
  rightSection: {
    alignItems: 'flex-end',
  },
  cost: {
    fontSize: 18,
    color: colors.text,
    marginBottom: 8,
  },
});