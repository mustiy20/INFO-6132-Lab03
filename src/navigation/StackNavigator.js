import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import TransactionDetail from '../screens/TransactionDetail';
import TransactionsList from '../screens/TransactionsList';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TransactionsList"
        component={TransactionsList}
        options={{
          title: 'Transactions',
          headerStyle: {
            backgroundColor: '#1c1c1c', // Dark background for the header
          },
          headerTintColor: '#ffeb3b',    // Bright yellow for header text
          headerTitleStyle: {
            fontWeight: 'bold',           // Bold title text
          },
        }}
      />
      <Stack.Screen
        name="TransactionDetail"
        component={TransactionDetail}
        options={{
          title: 'Transaction Detail',
          headerStyle: {
            backgroundColor: '#1c1c1c', // Dark background for the header
          },
          headerTintColor: '#ffeb3b',    // Bright yellow for header text
          headerTitleStyle: {
            fontWeight: 'bold',           // Bold title text
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
