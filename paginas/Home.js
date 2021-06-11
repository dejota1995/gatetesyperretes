import React , {useEffect,useState} from "react";
import {Text,ScrollView,StyleSheet,Image} from "react-native";
import Fire from "../database/fire";
import Categorias from "../componentes/Categorias";
import TarjetasMascotas from "../componentes/TarjetasMascotas";



const {firebase,db} = Fire;

function getPets() {
    const pets = []
    db.collection("pets").onSnapshot(querySnapshot => {
        querySnapshot.forEach(doc => {
            const {name,race,type,petPicture} = doc.data()
            pets.push({
                id:doc.id,
                name,
                race,
                type,
                petPicture
            })
        })
    })
    return pets
}

export default function Home({navigation}) {
    const [pets,setPets] = useState([])
    useEffect(() => {
        const Pets = getPets()
        setPets(Pets)
    }, [])
    const [selected,doSelection] = useState("Gatos")
 
    const setActive = (mascota) => doSelection(mascota)

    return (
    <ScrollView style={{paddingLeft:24,paddingRight:24 , backgroundColor:"#FEC7D7"}}>
    <Text style={{
        ...styles.title,
        color: "#0E172C"
        }}>Adopta una adorable mascota</Text> 
    <Categorias changePet={setActive} current={selected}/>
    {
        pets && <TarjetasMascotas mascotas={
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