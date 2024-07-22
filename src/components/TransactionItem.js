import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const TransactionItem = ({ transaction, onPress }) => {
  return (
    <TouchableOpacity style={styles.item} onPress={onPress}>
      <View style={styles.header}>
        <Text style={styles.name}>{transaction.name}</Text>
        <Text style={styles.amount}>${transaction.amount.toFixed(2)}</Text>
      </View>
      <Text style={styles.date}>{transaction.date}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 20,
    marginVertical: 10,
    backgroundColor: '#333',
    borderRadius: 15,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
  },
  amount: {
    fontSize: 16,
    color: '#ffeb3b',
  },
  date: {
    fontSize: 12,
    color: '#bbb',
  },
});

export default TransactionItem;
