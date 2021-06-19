import React , {useEffect,useState} from "react";
import {Text,ScrollView,StyleSheet,Image} from "react-native";
import Fire from "../database/fire";
import Categorias from "../componentes/Categorias";
import TarjetasMascotas from "../componentes/TarjetasMascotas";
import AsyncStorage from '@react-native-async-storage/async-storage';

import {pullFromStorage} from "../helpers/localStorage";



export default function Favoritos({navigation}) {

    const [pets,setPets] = useState([])

    const [selected,doSelection] = useState("Gatos")
 
    const setActive = (mascota) => doSelection(mascota)

    useEffect(() => {
         ( async () => {
            const result = await pullFromStorage()
            setPets(result)
        })()
    })

     return (
        <ScrollView style={{paddingLeft:24,paddingRight:24 , backgroundColor:"#FEC7D7"}}>
    <Text style={{
        ...styles.title,
        color: "#0E172C"
        }}>Adopta una adorable mascota</Text> 
    <Categorias changePet={setActive} current={selected}/>
    {
        pets && 
        <TarjetasMascotas navigation={navigation} mascotas={
            selected === "Gatos" ? pets.filter(pet => pet.type.item === 'Gato') : pets.filter(pet => pet.type.item === 'Perro')
        }/>
    }
    
    </ScrollView>
     )
}

const styles = StyleSheet.create({
    title: {
        fontSize:24,
        fontWeight:"bold",
        marginTop:40
    }
})