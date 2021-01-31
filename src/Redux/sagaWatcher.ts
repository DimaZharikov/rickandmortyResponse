import {takeEvery} from "redux-saga/effects";
import {ActionType as EnumCharList} from "./CharList/CharListReducer";
import {getChars, nextChars} from "./CharList/Sagas";
import {ActionType as EnumPerson} from "./Persons/PersonsReducer";
import {getPersons, getPersonsId} from "./Persons/Sagas";


//------------------WATCHER-----------------------------


export function* sagaWatcher(){
    //ChartListContainer
    yield takeEvery(EnumCharList.REQUEST_CHARS, getChars)
    yield takeEvery(EnumCharList.NEXT_PAGE, nextChars)

    //PersonsContainer

    yield takeEvery(EnumPerson.REQUEST_PERSON, getPersons)
    yield takeEvery(EnumPerson.REQUEST_PERSON_ID, getPersonsId)

}