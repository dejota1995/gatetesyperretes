import React from "react";
import TarjetaMascota from "./TarjetaMascota";
import {StyleSheet,View} from "react-native";

export default function TarjetasMascotas({mascotas}) {
    return (
        <View style={styles.container}>
            {
                  mascotas.map((mascota , index) => {
                    return <TarjetaMascota key={index} mascota={mascota}></TarjetaMascota>
                })
            }
        </View>

      
    )
}

const styles = StyleSheet.create({
container: {
    flexDirection:"row",
    marginTop:18
  
}
})