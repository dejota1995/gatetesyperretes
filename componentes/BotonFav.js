import React , {useState} from "react";
import {StyleSheet,TouchableOpacity} from "react-native";
import FavUncolored from "../assets/favuncolored.svg";
import FavColored from "../assets/favcolored.svg"
export default function BotonFav() {
    const [isLiked,setLike] = useState(false)
    const giveLike = () => {
        if(!isLiked) {
            setLike(true)
        }
    }
    return (
    <TouchableOpacity onPress={giveLike} style={styles.likeButton}>
        {
            isLiked 
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