// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PlannerContextProvider } from './src/context/PlannerContext';
import HomeScreen from './src/screens/HomeScreen';
import AddItemScreen from './src/screens/AddItemScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PlannerContextProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
            name="Home" 
            component={HomeScreen}
            options={{ title: 'Festival Budget Planner' }}
          />
          <Stack.Screen 
            name="AddItem" 
            component={AddItemScreen}
            options={{ title: 'Add New Item' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PlannerContextProvider>
  );
}