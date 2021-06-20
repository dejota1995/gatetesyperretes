import 'react-native-gesture-handler';
import React , {useRef} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import InicioSesion from "./paginas/InicioSesion";
import Registro from "./paginas/registro";
import Home from "./paginas/Home";
import CrearMascota from "./paginas/CrearMascota";
import Mascota from "./paginas/Mascota";
import Favoritos from "./paginas/Favoritos"; 
import HomeSvg from "./assets/home.svg";
import FavSvg from "./assets/favoritos.svg";

const Stack = createStackNavigator();

export default function App() {
  const navigationRef = useRef(null)
  return (
    <NavigationContainer ref={navigationRef}>
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
          <TouchableOpacity onPress={() => navigationRef.current?.navigate('Home')}>
              <HomeSvg/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.add} onPress={() => navigationRef.current?.navigate('Favoritos')}>
              <Text style={{fontSize:30}}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigationRef.current?.navigate('Favoritos')}>
              <FavSvg/>
          </TouchableOpacity>
        
     
      </View>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  add: {
    justifyContent:"center",
    backgroundColor:"white",
    borderRadius:30 / 2,
    alignItems:"center",
    width:30,
    height:30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
  },
  shadowOpacity: 0.43,
  shadowRadius: 9.51,
  elevation: 15,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomNav: {
    height:40,
    backgroundColor:"white",
    flexDirection:"row",
    justifyContent:"space-around",
    alignItems:"center",
    shadowColor: "#000",
    shadowOffset: {
	  width: 0,
	  height: 7,
},
shadowOpacity: 0.43,
shadowRadius: 9.51,
elevation: 15,
  }
});
