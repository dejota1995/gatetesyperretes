import React from "react";
import {View,StyleSheet,Text} from "react-native";
export default function Categoria({Svg,Nombre,Seleccionado}) {
    return (
        <View style={
            {...styles.container,
            opacity: Seleccionado ? 1 : 0.6
            }}>
            <View style={styles.circle}>
                <Svg/>
            </View>
            <Text style={{color:"white"}}>{Nombre}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width:156,
        height:80,
        borderRadius:8,
        backgroundColor:"#0E172C",
        alignItems:"center",
        flexDirection:"row",
        marginRight:40
    },
    circle: {
        width:64,
        height:64,
        borderRadius:64 / 2,
        backgroundColor:"#85D1CE",
        marginLeft:7,
        marginRight:15,
        justifyContent:"center",
        alignItems:"center"
    }
})