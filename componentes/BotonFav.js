import React , {useState,useEffect} from "react";
import {StyleSheet,TouchableOpacity,Alert} from "react-native";
import FavUncolored from "../assets/favuncolored.svg";
import FavColored from "../assets/favcolored.svg";
import {uploadToStorage,pullFromStorage,isLiked} from "../helpers/localStorage";

export default function BotonFav(props) {
    const [wasLiked,setWasLiked] = useState(false)
    async function onClick() {
        if(wasLiked) {
            Alert.alert("Ya lo tienes en favoritos")
            return
        }
        await uploadToStorage(props.pet)
        setWasLiked(true)
    }
    useEffect(() => {
        (async () => {
            const result = await pullFromStorage()
            const likedresult = isLiked(result,props.pet)
            if(likedresult) {
                setWasLiked(true)
            }
        })()
        
    })
    return (
    <TouchableOpacity onPress={onClick}  style={styles.likeButton}>
         
            {
                wasLiked ? <FavColored style={{marginTop:6,marginLeft:3}}/> :<FavUncolored style={{marginTop:6,marginLeft:3}}/>
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