import React , {useState,useEffect} from "react";
import firebase from "firebase";

export default function useAuth() {
 const [isAuth,setAuth] = useState(false)
 const [email,setEmail] = useState("")
 useEffect(() => {
    const user = firebase.auth().currentUser;
    if(user) {
        setAuth(true)
        setEmail(user.email)
    } else {
        navigation.navigate('InicioDeSesión');
    }
},[isAuth])

return [isAuth,email]

}