import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/home/Home';
import CadastroImovel from './src/imovel/CadastroImovel';
import ListaImovel from './src/imovel/ListaImovel';
import CadastroComodo from './src/comodo/CadastroComodo';
import ListaComodo from './src/comodo/ListaComodo';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        options={{ headerShown: false }}
        component={Home} />

      <Stack.Screen
        name="CadastroImovel"
        options={{ headerShown: false }}
        component={CadastroImovel} />

      <Stack.Screen
        name="ListaImovel"
        options={{ headerShown: false }}
        component={ListaImovel} />

      <Stack.Screen
        name="CadastroComodo"
        options={{ headerShown: false }}
        component={CadastroComodo} />

      <Stack.Screen
        name="ListaComodo"
        options={{ headerShown: false }}
        component={ListaComodo} />

    </Stack.Navigator>
  </NavigationContainer>
  );
}
