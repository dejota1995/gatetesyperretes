import React , {useState , useEffect} from "react";
import {Text,View, StyleSheet} from "react-native";
import CustomButton from "../componentes/CustomButton";
import TextInput from "../componentes/TextInput";
import Fire from "../database/fire";

const {firebase} = Fire

export default function InicioSesion({navigation}) {
   const [email,setEmail] = useState("")
   const [password,setPassword] = useState("")

    const IniciarSesion = () => {
        if(email.length < 1 || password.length < 1 ) {
            alert("No dejes campos vacios")
            return
        }
        firebase.auth().signInWithEmailAndPassword(email,password)
        .then(() => {
            navigation.navigate("Home")
        })
        .catch(error => {
            if(error.code === 'auth/user-not-found') {
                alert("No se encontró este usuario")
            } else if(error.code === 'auth/wrong-password') {
                alert("Contraseña incorrecta")
            } 
            else {    
                alert("hubo el siguiente error" + error.code)
            }
          
        })
    }
    return (
        <View style={styles.container}>

            <Text style={styles.title}>Inicia sesión</Text>
            <TextInput placeholder="ejemplo@gmail.com" text={email} onChangeText={setEmail} nombre="Correo"></TextInput>
            <TextInput secureTextEntry placeholder="*****" text={password} onChangeText={setPassword} nombre="Contraseña"></TextInput>
            <CustomButton onPress={IniciarSesion} label="Entrar" moreStyles={
                {marginTop:10}
            }></CustomButton>
            <Text style={{marginTop:20}}>
                ¿Aún no tienes cuenta? <Text onPress={() => navigation.navigate("Registro")} style={{color: "red"}}>Registrate</Text>
            </Text>
            <Text style={{marginTop:20}}>
                <Text onPress={() => navigation.navigate("Home")} style={{color: "green"}}>vete a adios</Text>
            </Text>
            <Text style={{marginTop:20}}>
                <Text onPress={() => navigation.navigate("CrearMascota")} style={{color: "green"}}>vete a crearMascota</Text>
            </Text>
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