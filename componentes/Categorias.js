import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Categoria from "./Categoria";
import DogPicture from "../assets/perros.svg";
import CatPicture from "../assets/gatos.svg";
export default function Categorias({changePet,current}) {
    return (
        <View>
            <Text style={{
                ...styles.title,
                color: "#0E172C",
                }}>Categorías de mascotas</Text>
            <View style={styles.container}>
                <Categoria changePet={changePet} current={current} Nombre="Perros" Svg={DogPicture} />
                <Categoria changePet={changePet} current={current} Nombre="Gatos" Svg={CatPicture} />
            </View>
        </View>


    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
    },
    title: {
        fontSize:18,
        marginTop:30,
        marginBottom:14
    }
})
