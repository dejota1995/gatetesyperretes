import React from "react";
import {View,StyleSheet,Text} from "react-native";
import DogPicture from "../assets/perros.svg";
export default function Categoria() {
    return (
        <View style={styles.container}>
            <View style={styles.circle}>
                <DogPicture/>
            </View>
            <Text style={{color:"white"}}>Perros</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width:156,
        height:80,
        borderRadius:8,
        backgroundColor:"#0E172C"
        ,
        alignItems:"center",
        flexDirection:"row"
    },
    circle: {
        width:64,
        height:64,
        borderRadius:64 / 2,
        backgroundColor:"#85D1CE",
        marginLeft:7,
        marginRight:15
    }
})