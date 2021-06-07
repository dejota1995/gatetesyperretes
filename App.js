import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import InicioSesion from "./paginas/InicioSesion";
import Registro from "./paginas/registro";
import Home from "./paginas/Home";
const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="InicioDeSesión"
          component={InicioSesion}
        ></Stack.Screen>
        <Stack.Screen
          name="Registro"
          component={Registro}
        ></Stack.Screen>
        <Stack.Screen
          name="Home"
          component={Home}
        ></Stack.Screen>
      </Stack.Navigator>

    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
