import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import transactions from '../data/transactions';

const Summary = () => {
  const totalExpenses = transactions.reduce((sum, transaction) => sum + transaction.amount, 0);
  const numberOfTransactions = transactions.length;

  const highestTransaction = transactions.reduce((max, transaction) => 
    transaction.amount > max.amount ? transaction : max,
    transactions[0]
  );

  const lowestTransaction = transactions.reduce((min, transaction) => 
    transaction.amount < min.amount ? transaction : min,
    transactions[0]
  );

  return (
    <View style={styles.container}>
      <Text style={styles.summaryText}>Summary</Text>
      <View style={styles.summaryBox}>
        <Text style={styles.summaryItem}>Transactions: {numberOfTransactions}</Text>
        <Text style={styles.summaryItem}>Total Expenses: ${totalExpenses.toFixed(2)}</Text>
        <Text style={styles.summaryItem}>Highest: {highestTransaction.name} (${highestTransaction.amount.toFixed(2)})</Text>
        <Text style={styles.summaryItem}>Lowest: {lowestTransaction.name} (${lowestTransaction.amount.toFixed(2)})</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#282828',
    padding: 20,
  },
  summaryText: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#ffeb3b',
    marginBottom: 30,
  },
  summaryBox: {
    backgroundColor: '#333',
    padding: 25,
    borderRadius: 15,
    width: '100%',
    alignItems: 'center',
  },
  summaryItem: {
    fontSize: 18,
    color: '#fff',
    marginVertical: 10,
  },
});

export default Summary;
