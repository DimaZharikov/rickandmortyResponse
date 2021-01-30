import {takeEvery} from "redux-saga/effects";
import {ActionType} from "./CharList/CharListReducer";
import {getChars, nextChars} from "./CharList/Sagas";


//------------------WATCHER-----------------------------


export function* sagaWatcher(){
    //ChartListContainer
    yield takeEvery(ActionType.REQUEST_CHARS, getChars)
    yield takeEvery(ActionType.NEXT_PAGE, nextChars)
    //PersonsContainer
}