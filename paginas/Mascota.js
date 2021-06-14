import {Alert,ScrollView,Text,StyleSheet,View,ImageBackground,TouchableOpacity} from "react-native";
import React , {useEffect,useState} from "react";
import IconoRaza from "../assets/raza.svg";
import IconoEdad from "../assets/edad.svg";
import TarjetaPersonalidad from "../componentes/tarjetaPersonalidad";
import BotonFav from "../componentes/BotonFav";
import CustomButton from "../componentes/CustomButton";
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function Mascota({route}) {
    const [liked,setLiked] = useState('notliked')
    useEffect(() => {
        async function getPets() {
            let pets = await AsyncStorage.getItem('@usrpets')
            let formated;
            if(pets) {
                pets = JSON.parse(pets)
                formated = pets.map(pet => {
                    return {
                        ...pet.mascota
                    }
                })
                
            }
             if(formated.filter(pet => pet.name === route?.params.name).length > 0) {
                setLiked('liked')
             }
             const filtered = formated.filter(pet => pet.name === route?.params.name)
             console.log(filtered)  
        }
        getPets()
    })
    const {name, race, type, petPicture, age, description, personality,owner} = route?.params
    return (
        <ScrollView style={styles.container}>
            <ImageBackground style={styles.background} source={{uri:petPicture}}>
            <View style={styles.imageContainer}></View>
            </ImageBackground>
           <View style={styles.infoContainer}>
               <View style={{flexDirection:'row',justifyContent:"space-between",paddingBottom:10}}>
                   <Text style={styles.petName}>{name ?? 'None'}</Text>
                   <BotonFav liked={liked} mascota={{name,race,type,petPicture,age,description,personality,owner}}/>
               </View>
               <View style={{flexDirection:'row'}}>
                    <View style={{flexDirection:'row',alignItems:'center',marginRight:135}}>
                        <IconoRaza/>
                        <Text style={styles.raceAndAgeText}>{race ?? 'None'}</Text>
                    </View>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                        <IconoEdad/>
                        <Text style={styles.raceAndAgeText}>{age ?? 'None'}</Text>
                    </View>
               </View>
               <View style={styles.personality}>
                    <Text style={{fontSize:18,fontWeight:'bold'}}>
                        Personalidad
                    </Text>
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}> 
                        {personality.map((per,index) => {
                            return (
                                <View style={{marginTop:10}}>
                                    <TarjetaPersonalidad key={index} personalidad={per.item}/>
                                </View>
                            )
                        })}
                    </View> 
                </View>
                <View style={styles.description}>
                    <Text style={{fontSize:18,fontWeight:'bold'}}>Descripción</Text>
                    <Text style={{fontSize:16,lineHeight:26,marginTop:5}}>{description ?? 'None'}</Text>
                </View>
                <View style={{marginTop:25,flexDirection:'row',paddingBottom:20,justifyContent:'space-between'}}>
                    <View>
                        <Text style={{fontSize:14}}>Publicado por</Text>
                        <Text style={{fontSize:18,fontWeight:'bold'}}>Maria Dolores</Text>
                    </View>
                    <CustomButton onPress={() => Alert.alert(owner)} moreStyles={{width:155,height:48}} label='Contactar' />
                </View>
           </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    imageContainer: {
        height:442,
    },
    background: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    infoContainer: {
        paddingTop:20,
        paddingLeft:25,
        paddingRight:25
    },
    petName: {
        fontSize:24,
        fontWeight:'bold'
    },
    raceAndAgeText: {
        fontSize:14,

    },
    personality: {
        marginTop:25
    },
    description: {
        marginTop: 20
    }
})