import React , {useEffect,useState} from "react";
import {Text} from "react-native";
import Fire from "../database/fire";
import Categoria from "../componentes/Categoria";
const {firebase} = Fire;
export default function Home({navigation}) {
    const [isAuth,setAuth] = useState(false)
    useEffect(() => {
        const user = firebase.auth().currentUser;
        if(user) {
            setAuth(true)
        } else {
            navigation.navigate('InicioDeSesión');
        }
    },[isAuth])
    return (
    <>
    <Text>{isAuth ? 'Logeado' : 'Nope'}</Text> 
    <Categoria/>
    </>
    )
}