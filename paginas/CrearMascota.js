import React, { useState } from "react";
import { Text, View, StyleSheet,ScrollView,Image } from "react-native";
import useAuth from "../hooks/useAuth";
import TextInput from "../componentes/TextInput";
import CustomPicker from "../componentes/Picker";
import {xorBy} from "lodash";
import SelectBox from "react-native-multi-selectbox";
import CustomButton from "../componentes/CustomButton";
import Fire from "../database/fire";
import {askCameraPermissions,pickImage} from "../helpers/upload";
const {db} = Fire;

export default function CrearMascota() {
    const isAuth = useAuth();
    const [name, setName] = useState("")
    const [race, setRace] = useState("")
    const [selectedRaces,setSelectedRaces] = useState([])
    const [description,setDescription] = useState("")
    const [petType,setPetType] = useState("")
    const [age,setAge] = useState("")
    const [pictureInfo,setPicture] = useState({})
    const [picUri,setPicUri] = useState("")
    
    async function pictureHandler() {
        const gotPermissions = askCameraPermissions()
        if(!gotPermissions) {
            return
        }
        const uri = await pickImage()
        if(uri) {
            setPicUri(uri)
          
        }
    }

    function insertarMascota() {
        const datos = {
            name:name,
            race:race,
            personality:selectedRaces,
            description:description,
            type:petType,
            age:age
        }
        db.collection("pets").add(datos)
        .then(() => {
            alert("añadido")
        })
        .catch(error => {
            alert(error.code)
        })
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

    ]
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
                options={[{item:"perro",id:"perro"} , {item:"gato",id:"gato"}]}
                value={petType}
                onChange={onChange()}
                labelStyle={{marginTop:20}}
            />
            <CustomButton onPress={() => pictureHandler() } moreStyles={{marginTop:15}} label="Crear"/>
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
    }
})