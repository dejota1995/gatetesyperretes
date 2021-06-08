import React , {useState,useEffect} from "react";
import firebase from "firebase";

export default function useAuth() {
 const [isAuth,setAuth] = useState(false)
 useEffect(() => {
    const user = firebase.auth().currentUser;
    if(user) {
        setAuth(true)
    } else {
        navigation.navigate('InicioDeSesión');
    }
},[isAuth])

return isAuth

}