import React from "react";
import {TouchableOpacity, View , StyleSheet , Text,ImageBackground} from "react-native";
import Papo from "../assets/Papo.svg";

export default function TarjetaMascota({mascota,navigation}) {

    return (
        <TouchableOpacity onPress={() => navigation.navigate('Mascota' , mascota)} style={styles.container}>
            <ImageBackground style={styles.image} source={{uri:mascota.petPicture}}>
            <View style={styles.dogInfo}>
            <Text style={styles.text}>{mascota.name}</Text>
            <Text style={styles.subtext}>{mascota.race}</Text>
            </View>
            </ImageBackground>
            
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
    },
    container: {
        width:156,
        height:250,
        backgroundColor:"red",
        borderRadius:16,
        position:"relative",
        marginRight:10,
        marginLeft:10,
        marginBottom:25,
        overflow:"hidden"
    },
    picture: {
     
        height:250,
        width:156,
        resizeMode:'stretch'
    },
    text: {
        color:"white",
        fontSize:20,
        fontWeight:"bold",
        textTransform:"capitalize",
     
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