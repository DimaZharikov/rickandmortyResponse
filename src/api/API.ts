import axios from "axios";
import {charsResponseType} from "../Redux/CharList/CharListReducer";


const instance = axios.create({
    baseURL: ('https://rickandmortyapi.com/api/character')
})



export const CharsAPI = {
    getChars(){
        return instance.get('')
    },
    getPerson(id: number) {
        return instance.get('/' + id)
    },
    getPages(pages: number) {
        return instance.get('/?page=' + pages)
    }
}