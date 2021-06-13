import React from "react";
import TarjetaMascota from "./TarjetaMascota";
import {StyleSheet,View} from "react-native";

export default function TarjetasMascotas({mascotas,navigation}) {
    return (
        <View style={styles.container}>
            {
                  mascotas.map((mascota , index) => {
                    return <TarjetaMascota navigation={navigation} key={index} mascota={mascota}></TarjetaMascota>
                })
            }
        </View>

      
    )
}

const styles = StyleSheet.create({
container: {
    flexDirection:"row",
    marginTop:18,
    flex:1,
    flexWrap:'wrap'
  
}
})