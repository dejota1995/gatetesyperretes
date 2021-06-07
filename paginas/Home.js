import React , {useEffect,useState} from "react";
import {Text,ScrollView,StyleSheet} from "react-native";
import Fire from "../database/fire";
import Categorias from "../componentes/Categorias";
import TarjetasMascotas from "../componentes/TarjetasMascotas";
const mascotitas= [
    {
        nombre:"bonano",
        raza:"mis huevos",
        tipo:"perro"
    } , 
    {
        nombre:"bonanin",
        raza:"mi huevin",
        tipo:"gato"
    },
    
]
const {firebase} = Fire;
export default function Home({navigation}) {
    const [isAuth,setAuth] = useState(false)
    const [selected,doSelection] = useState("Gatos")
    const perros = mascotitas.filter(mascota => mascota.tipo === 'perro')
    const gatos = mascotitas.filter(mascota => mascota.tipo === 'gato')
    const setActive = (mascota) => doSelection(mascota)

    useEffect(() => {
        const user = firebase.auth().currentUser;
        if(user) {
            setAuth(true)
        } else {
            navigation.navigate('InicioDeSesión');
        }
    },[isAuth])


    return (
    <ScrollView style={{paddingLeft:24,paddingRight:24 , backgroundColor:"#FEC7D7"}}>
    <Text style={{
        ...styles.title,
        color: "#0E172C"
        }}>Adopta una adorable mascota</Text> 
    <Categorias changePet={setActive} current={selected}/>
    <TarjetasMascotas mascotas={selected === 'Perros' ? perros : gatos}/>
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