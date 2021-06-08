import React from "react";
import {TouchableOpacity,Text , StyleSheet} from "react-native";

export default function CustomButton({label , moreStyles,onPress}) {
    return (
        <TouchableOpacity style={
             {
                 ...styles.button,
                ...moreStyles
             }
            
            } onPress={onPress}>
            <Text style={styles.text}>{label}</Text>
        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    button: {
        width:327,
        height:48,
        borderRadius:98,
        backgroundColor:"black",
        justifyContent:"center",
        alignItems:"center",

    },
    text: {
        color:"white"
    }   
})