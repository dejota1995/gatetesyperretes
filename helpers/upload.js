import * as ImagePicker from "expo-image-picker";

export async function askCameraPermissions() {
        const {status} = await ImagePicker.requestMediaLibraryPermissionsAsync()
        if(status !== 'granted') {
            alert("no se concedieron permisos")
            return false
        }
        return true
}

export async function pickImage() {
    const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes:ImagePicker.MediaTypeOptions.All,
        allowsEditing:true,
        aspect:[4,3],
        quality:1
    })
    if(!result.cancelled) {
        return result.uri
    }
}

export async function uploadImage(uri,firebase,imgname) {
    const response = await fetch(uri)
    const blob = await response.blob()
    const ref = firebase.storage().ref().child(`images/${imgname}`)
    const uploadTask = await ref.put(blob)
    const imageUrl = ref.getDownloadURL();
    return imageUrl
}