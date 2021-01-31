import {put, call} from 'redux-saga/effects'
import {ActionType, addCharsSaga, isFetchingLoader, setChars} from "./CharListReducer";

//------------------------------API-------------------------------
//for chartListContainer
async function fetchGetChars(nextPage: number) {
    const res = await fetch(`https://rickandmortyapi.com/api/character?page=${nextPage}`)
    return   await res.json()
}





// -----------------------------SAGA-------------------------------
//ChartListContainer
export function* getChars(action:{type: ActionType.REQUEST_CHARS,  payload: number  }  ) {
    try {
        yield put(isFetchingLoader(true))
        const payload = yield call (fetchGetChars,  action.payload )
        yield put(setChars(payload.results))
        yield put (isFetchingLoader(false))
    }
    catch (error){
        console.log(error)
    }

}
export function* nextChars(action:{type:  ActionType.REQUEST_CHARS_NEXT_PAGE,  payload: number  }  ) {
    try {
        yield put(isFetchingLoader(true))
        const payload = yield call (fetchGetChars,  action.payload )
        yield put(addCharsSaga(payload.results))
        yield put (isFetchingLoader(false))
    }
    catch (error){
        console.log(error)
    }

}






