import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

const TransactionDetail = ({ route }) => {
  const { transaction } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.name}>{transaction.name}</Text>
      <Text style={styles.amount}>${transaction.amount.toFixed(2)}</Text>
      <Text style={styles.date}>{transaction.date}</Text>
      <Text style={styles.description}>{transaction.description}</Text>
      <Text style={styles.location}>Location: {transaction.location}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 25,
    backgroundColor: '#212121', // Dark background
  },
  name: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#ffeb3b', // Bright yellow for name
    marginBottom: 15,
  },
  amount: {
    fontSize: 26,
    color: '#4caf50', // Green for amount
    marginBottom: 15,
  },
  date: {
    fontSize: 18,
    color: '#757575', // Grey for date
    marginBottom: 15,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#ddd', // Light grey for description
    marginBottom: 15,
  },
  location: {
    fontSize: 16,
    color: '#ffeb3b', // Bright yellow for location
  },
});

export default TransactionDetail;
