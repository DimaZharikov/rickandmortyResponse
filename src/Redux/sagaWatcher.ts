import {takeEvery} from "redux-saga/effects";
import {ActionType as EnumCharList} from "./CharList/CharListReducer";
import {getChars, nextChars} from "./CharList/Sagas";
import {ActionType as EnumPerson} from "./Persons/PersonsReducer";
import {ActionType as EnumLocation}  from "./location/LocationReducer";
import {getPersons} from "./Persons/Sagas";
import {getLocation, getResident} from "./location/Sagas";


//------------------WATCHER-----------------------------


export function* sagaWatcher(){
    //ChartListContainer
    yield takeEvery(EnumCharList.REQUEST_CHARS, getChars)
    yield takeEvery(EnumCharList.NEXT_PAGE, nextChars)

    //PersonsContainer
    yield takeEvery(EnumPerson.REQUEST_PERSON, getPersons)

    yield takeEvery(EnumLocation.REQUEST_LOCATION, getLocation)
    yield takeEvery(EnumLocation.REQUEST_GET_RESIDENTS, getResident)



}