import React from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import colors from '../constants/colors';

export default function BudgetInput({ value, onChangeText }) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Total Festival Budget</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.currency}>$</Text>
        <TextInput
          style={styles.input}
          value={value.toString()}
          onChangeText={onChangeText}
          keyboardType="numeric"
          placeholder="Enter your total budget"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: colors.background,
  },
  label: {
    fontSize: 18,
    color: colors.text,
    marginBottom: 8,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 8,
    padding: 8,
  },
  currency: {
    fontSize: 18,
    color: colors.text,
    marginRight: 4,
  },
  input: {
    flex: 1,
    fontSize: 18,
    color: colors.text,
  },
});
