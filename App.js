import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import InicioSesion from "./paginas/InicioSesion";
import Registro from "./paginas/registro";
import Home from "./paginas/Home";
import CrearMascota from "./paginas/CrearMascota";
import Mascota from "./paginas/Mascota";
import Favoritos from "./paginas/Favoritos";
//import {} from "@ant-design/icons";
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
          <Stack.Screen
          name="CrearMascota"
          component={CrearMascota}
        ></Stack.Screen>
          <Stack.Screen
          name="Mascota"
          component={Mascota}
        ></Stack.Screen>
         <Stack.Screen
          name="Favoritos"
          component={Favoritos}
        ></Stack.Screen>
     
      </Stack.Navigator>
      <View style={styles.bottomNav}>

      </View>
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
  bottomNav: {
    height:40,
    backgroundColor:"red"
  }
});
