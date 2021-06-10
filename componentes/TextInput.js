import React , {useState} from "react";
import {View,StyleSheet,Text,TextInput as OGTextInput } from "react-native";

export default function TextInput({inputStyle,nombre,onChangeText, text , placeholder,secureTextEntry,lines,moreStyles}) {
    return (
      <View>
          <Text style={styles.label}>{nombre}</Text>
          <View style={{...styles.container, ...moreStyles}}>
        <OGTextInput numberOfLines={lines ?? 1} secureTextEntry={secureTextEntry} placeholder={placeholder} value={text} style={styles.textInput} onChangeText={onChangeText}>
      
        </OGTextInput>
      </View>
      </View>
    )
}

const styles = StyleSheet.create({
   container: {
       width:327,
       height:48,
       borderColor:"black",
       borderWidth:2,
       borderRadius:4,
       marginBottom:15
   },
   textInput: {
    width:327,
    height:48,
    fontSize: 24
   },
   label: {
       marginBottom:7 
   }
})