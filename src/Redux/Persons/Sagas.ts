import {ActionType, setPerson, setPersonIdSaga} from "./PersonsReducer";
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
export function* getPersonsId(action: { type: ActionType.REQUEST_PERSON_ID, payload: number }) {
    try {

        const payload = yield call(fetchGetPerson, action.payload)
        yield   put(setPersonIdSaga(payload.results.id))
    } catch (error) {
        console.log(error)
    }
}



