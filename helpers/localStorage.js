import AsyncStorage from '@react-native-async-storage/async-storage';

const key = "myfavpetsv5"

export async function pullFromStorage() {
    let result = await AsyncStorage.getItem(key)
    if(result) {
        result = JSON.parse(result)
    }
    return result;
}


export async function uploadToStorage(data) {
    const result = await pullFromStorage()
    let finaldata = [data]
    if(result) {
        finaldata = [...result,...finaldata]
    }

    AsyncStorage.setItem(key , JSON.stringify(finaldata))   
}


export  function isLiked(fulldata,actual) {
    const names = fulldata.map(data => data.name)
    const name = actual.name
    if(names.includes(name)) {
        return true
    } else {
        return false
    }
}