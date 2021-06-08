import React , {useState} from "react";
import {Text,View, StyleSheet} from "react-native";
import CustomButton from "../componentes/CustomButton";
import TextInput from "../componentes/TextInput";
import Fire from "../database/fire";

const {firebase} = Fire;

export default function Registro({navigation}) {
    const [name,setName] = useState("")
   const [email,setEmail] = useState("")
   const [password,setPassword] = useState("")

   const Registro = async () => {
       if(email.length < 1 || password.length < 1 ) {
           alert("No dejes campos vacios")
           return
       }
       try {
        await firebase.auth().createUserWithEmailAndPassword(email,password)
       }
       catch(error) {
        if (error.code === 'auth/email-already-in-use') {
            alert('Este email ya está registrado');
        }
        else if (error.code === 'auth/invalid-email') {
            alert('¡Correo inválido!');
        } else {
            alert(error.code)
        }
          
          
       }
        
       
   }

    return (
        <View style={styles.container}>

            <Text style={styles.title}>Registrarse</Text>
            <TextInput placeholder="tu nombre" text={name} onChangeText={setName} nombre="Nombre"></TextInput>
            <TextInput placeholder="ejemplo@gmail.com" text={email} onChangeText={setEmail} nombre="Correo"></TextInput>
            <TextInput secureTextEntry placeholder="*****" text={password} onChangeText={setPassword} nombre="Contraseña"></TextInput>
            <CustomButton onPress={Registro} label="Registrarse" moreStyles={
                {marginTop:10}
            }></CustomButton>
            
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection:"column",
        alignItems:"center",
        
    },
    title: {
        fontSize:25,
        textTransform:"capitalize"
    }
})