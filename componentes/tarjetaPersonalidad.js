import React from "react";
import {View,Text,StyleSheet} from "react-native";
import Cariñoso from "../assets/cariñoso.svg"
import Nervioso from "../assets/nervioso.svg"
import Jugueton from "../assets/jugueton.svg";
import Mimoso from "../assets/mimoso.svg";
import Tranquilo from "../assets/tranquilo.svg";
export default function TarjetaPersonalidad({personalidad}) {
    return (
        <View style={styles.container}>
            {
                personalidad === 'Cariñoso' && <Cariñoso/>
            }
            {
                personalidad === 'Nervioso' && <Nervioso/>
            }
            {
                personalidad === 'Juguetón' && <Jugueton/>
            }
            {   
                personalidad === 'Mimoso' && <Mimoso/>
            }
            {
                personalidad === 'Tranquilo' && <Tranquilo/>
            }
            <Text style={{marginTop:10, fontWeight:'bold'}}>{personalidad}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width:92,
        height:92,
        borderRadius:8,
        borderWidth:2,
        borderColor:"#a786df",
        alignItems:'center',
        paddingTop:15,
        paddingBottom:15,
    }
})