import React from 'react';
import { FlatList, StyleSheet, View, Text } from 'react-native';
import TransactionItem from '../components/TransactionItem';
import transactions from '../data/transactions';

const TransactionsList = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Transactions</Text>
      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TransactionItem
            transaction={item}
            onPress={() => navigation.navigate('TransactionDetail', { transaction: item })}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c1c1c',
    padding: 15,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffeb3b',
    marginBottom: 20,
  },
});

export default TransactionsList;
