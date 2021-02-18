import {call, put} from "redux-saga/effects";
import {ActionType, setResidents, setLocation} from "./LocationReducer";



async function fetchGetLocation(id: number) {

    const res = await fetch(`https://rickandmortyapi.com/api/location/${id}`)
    return await res.json()
}






export function* getLocation(action: { type: ActionType.SET_LOCATION, payload: number }) {
    try {
        const location = yield call(fetchGetLocation, action.payload)
        yield   put(setLocation(location))
    } catch (error) {
        console.log(error)
    }
}

async function fetchGetResidents(id: number) {
    const res = await fetch (`https://rickandmortyapi.com/api/character/${id}`)
    return await res.json()
}

export function* getResident (action: {type: ActionType.GET_RESIDENTS, payload: number}) {

    try{
        const payload = yield call (fetchGetResidents, action.payload)
        yield put(setResidents(payload.results))
    }
    catch (error) {
        console.log(error)
    }
}






