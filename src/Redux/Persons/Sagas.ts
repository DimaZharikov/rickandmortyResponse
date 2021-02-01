import {ActionType, setPerson} from "./PersonsReducer";
import {call, put} from "redux-saga/effects";



async function fetchGetPerson(id: number) {

    const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
    return await res.json()
}


export function* getPersons(action: { type: ActionType.REQUEST_PERSON, payload: number }) {
    try {
    debugger
        const payload = yield call(fetchGetPerson, action.payload)
        yield   put(setPerson(payload))
    } catch (error) {
        console.log(error)
    }
}




