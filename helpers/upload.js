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