import React , {useState} from "react";
import {StyleSheet,TouchableOpacity} from "react-native";
import FavUncolored from "../assets/favuncolored.svg";
import FavColored from "../assets/favcolored.svg";

import AsyncStorage from '@react-native-async-storage/async-storage';
export default function BotonFav(mascota,liked) {
    const [isLiked,setLike] = useState(liked)
    const giveLike = async () => {
        if(isLiked !== 'liked') {
            try {
                let pets = await AsyncStorage.getItem('@usrpets')
                if(pets) {
                   pets = JSON.parse(pets)
                } else {
                    console.log('we got no data')
                }
                let full_items = [mascota];
                if(pets) {
                    full_items = [...pets,mascota]
                }
                AsyncStorage.setItem('@usrpets' , JSON.stringify(full_items))
                .then(() => {
                    console.log('añadido correctamente')
                  
                    
                })
                .catch(error => {
                    console.log(error)
                })
               
            } catch (error) {
                console.log(error)
            }
           
            setLike('liked')
        } else {
            alert('Ya likeado')
        }
    }
    return (
    <TouchableOpacity onPress={giveLike} style={styles.likeButton}>
        {
            isLiked === 'liked'
            ? 
            <FavColored style={{marginTop:6,marginLeft:3}}/>
            :
            <FavUncolored style={{marginTop:6,marginLeft:3}}/>

        }
      
    </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    likeButton: {
        width:48,
        height:48,
        borderRadius: 48 / 2,
        shadowColor: "rgba(0,0,0,0.25)",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        justifyContent:'center',
        alignItems:'center',
    }
})