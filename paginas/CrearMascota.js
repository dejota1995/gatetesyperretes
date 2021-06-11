import React, { useState,useEffect } from "react";
import { Text, View, StyleSheet,ScrollView,Image,Alert } from "react-native";
import useAuth from "../hooks/useAuth";
import TextInput from "../componentes/TextInput";
import CustomPicker from "../componentes/Picker";
import {xorBy} from "lodash";
import SelectBox from "react-native-multi-selectbox";
import CustomButton from "../componentes/CustomButton";
import Fire from "../database/fire";
import {askCameraPermissions,pickImage,uploadImage} from "../helpers/upload";
const {db} = Fire;

export default function CrearMascota() {
    const isAuth = useAuth();
    //
    const [name, setName] = useState("")
    const [race, setRace] = useState("")
    const [selectedRaces,setSelectedRaces] = useState([])
    const [description,setDescription] = useState("")
    const [petType,setPetType] = useState("")
    const [age,setAge] = useState("")
    const [picUri,setPicUri] = useState("")
    const [uploadedPicURL,setUploadedPicURL] = useState("")
    //
    
    async function pictureHandler() {
        const gotPermissions = askCameraPermissions()
        if(!gotPermissions) {
            return
        }
        const uri = await pickImage()
        if(!uri) {
            return false
        }
        setPicUri(uri)
       }

       async function pictureHandlerStep2() {
           try {
            const reference = await uploadImage(picUri,Fire.firebase,Date.now())
            setUploadedPicURL(reference)
            
           } catch (error) {
               console.log(error)
           }
      
       }

    async function insertarMascota() {
      
        const datos = {
            name:name,
            race:race,
            personality:selectedRaces,
            description:description,
            type:petType,
            age:age,
            petPicture: uploadedPicURL
        }
        try {
            await db.collection("pets").add(datos)
            Alert.alert("Mascota insertada con éxito")
            
            setName("")
            setRace("")
            setSelectedRaces([])
            setDescription("")
            setPetType("")
            setAge("")
            setPicUri("")
            setUploadedPicURL("")

        } catch (error) {
            Alert.alert("Error creando mascota")
        }
        
       
    }
    const raceOptions = [
        {
            item: "Cariñoso",
            id: "Cariñoso"
        },
        {
            item: "Tranquilo",
            id: "Tranquilo"
        },
        {
            item: "Juguetón",
            id: "Juguetón"
        },
        {
            item: "Mimoso",
            id: "Mimoso"
        },
        {
            item: "Nervioso",
            id: "Nervioso"
        },
        {
            item: "Dominante",
            id: "Dominante"
        },
        {
            item: "Somnoliento",
            id: "Somnoliento"
        },
        {
            item: "Obediente",
            id: "Obediente"
        },
        {
            item: "Vago",
            id: "Vago"
        },

    ]
    useEffect(() => {
        if(name) {
            insertarMascota()
        }
        
    },[uploadedPicURL])
    return (
        <ScrollView contentContainerStyle={styles.container}>

            {picUri ?
                      <Image source={{uri:picUri}} style={{width:200,height:200,marginBottom:20}}>
            
                      </Image>
                    : null
            }
            <TextInput placeholder="ej: Coco" onChangeText={setName} nombre="Nombre de tu mascota" />
            <TextInput placeholder="ej: YorkShire" onChangeText={setRace} nombre="Raza de tu mascota" />
            
            <TextInput onChangeText={setAge}  placeholder="10"  nombre="Edad de tu mascota" />
            
            <TextInput 
            onChangeText={setDescription} 
            inputStyle={{height:100}}
             moreStyles={{height:100}} 
             lines={30} 
             placeholder="ej: Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..." nombre="Descripción breve sobre tu mascota" />
            
            <SelectBox
            labelStyle={{marginTop:20}}
            label="Selecciona la personalidad de tu mascota"
            options={raceOptions}
            selectedValues={selectedRaces}
            onMultiSelect={onMultiChange()}
            onTapClose={onMultiChange()}
            isMulti

            />

            <SelectBox
                label="Tipo de mascota"
                options={[{item:"Perro",id:"Perro"} , {item:"Gato",id:"Gato"}]}
                value={petType}
                onChange={onChange()}
                labelStyle={{marginTop:20}}
            />
            <Text style={styles.uploadText} onPress={pictureHandler}>Sube una foto de tu mascota</Text>

            <CustomButton onPress={() => pictureHandlerStep2() } moreStyles={{marginTop:15}} label="Crear"/>
            
        </ScrollView>
    )

    function onMultiChange() {
        return (item) => setSelectedRaces(xorBy(selectedRaces , [item] , 'id'))
    }

    function onChange() {
        return (val) => setPetType(val)
    }
    
}



const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        paddingTop:20,
        paddingBottom:20
    },
    uploadText: {
        marginTop:20,
        color:"black",
        fontSize:17,
        backgroundColor:"grey",
        borderWidth:3,
        borderColor:"rgba(0,0,0,0.3)",
        borderRadius:4,
        padding:10
    }
})