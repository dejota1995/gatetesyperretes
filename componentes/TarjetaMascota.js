import React from "react";
import {View , StyleSheet , Text} from "react-native";
import Papo from "../assets/Papo.svg";
//TODO: Crear la tarjeta de mascota
export default function TarjetaMascota({mascota}) {
    return (
        <View style={styles.container}>
            <Papo style={styles.picture}/>
            <View style={styles.dogInfo}>
            <Text style={styles.text}>{mascota.nombre}</Text>
            <Text style={styles.subtext}>{mascota.raza}</Text>
            </View>

            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width:156,
        height:250,
        backgroundColor:"red",
        borderRadius:16,
        position:"relative",
        marginRight:40
    },
    picture: {
        position:"absolute"
    },
    text: {
        color:"white",
        fontSize:20,
        fontWeight:"bold",
        textTransform:"capitalize"
    },
    subtext: {
        color:"white",
        fontSize:12,
    },
    dogInfo: {
        position:"absolute",
        bottom:0,
        padding:20,
        fontWeight:"100",
        textTransform:"capitalize"
    }
})