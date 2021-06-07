import React , {useEffect,useState} from "react";
import {Text,ScrollView,StyleSheet} from "react-native";
import Fire from "../database/fire";
import Categorias from "../componentes/Categorias";
const {firebase} = Fire;
export default function Home({navigation}) {
    const [isAuth,setAuth] = useState(false)
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
    <Categorias/>
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