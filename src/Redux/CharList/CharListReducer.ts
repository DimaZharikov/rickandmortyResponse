import {charsResponseType} from "../Persons/PersonsReducer";


export interface stateProps {
    data: charsResponseType[]
    isFetching: boolean

}


const initialState: stateProps = {
    data: [],
    isFetching: false


}


//Type
export enum ActionType {
    SET_CHARS = "CHARACTER-COMPONENT/SET-CHARS",
    IS_FETCHING = "IN_GLOBAL",
    NEXT_PAGE = 'CHARACTER-COMPONENT/NEXT_PAGE',


    //sagaRequest
    REQUEST_CHARS = "/CHARACTER-CONTAINER/REQUEST_CHARS",
    REQUEST_CHARS_NEXT_PAGE = 'CHARACTER_CONTAINER/REQUEST_CHARS_NEXT_PAGE',
}


//actions

interface Action<T> {
    type: ActionType,
    payload: T

}

//ActionCreator
//inGlobal
export const isFetchingLoader = (isFetching: boolean): Action<boolean> => ({
    type: ActionType.IS_FETCHING,
    payload: isFetching
})


//for Request
export const setChars = (chars: charsResponseType[]): Action<charsResponseType[]> => ({
    type: ActionType.SET_CHARS,
    payload: chars
})


export const nextPagesCall = (next: number): Action<number> => ({
    type: ActionType.NEXT_PAGE,
    payload: next
})


//sagaCreator
export const setCharsSaga = (nextPage: number): { type: ActionType.REQUEST_CHARS, payload: number } => ({
    type: ActionType.REQUEST_CHARS,
    payload: nextPage

})
export const addCharsSaga = (chars: charsResponseType[]): Action<charsResponseType[]> => ({
    type: ActionType.REQUEST_CHARS_NEXT_PAGE,
    payload: chars
})




const charListReducer = (state: stateProps = initialState, action: Action<charsResponseType[] & boolean>): stateProps => {
    switch (action.type) {
        //getChars from response
        case ActionType.SET_CHARS:
            return {
                ...state,
                data: action.payload
            };
        case ActionType.REQUEST_CHARS_NEXT_PAGE:
            return {
                ...state, data: [...state.data, ...action.payload]
            };
        //isLoader fetching for brake call
        case ActionType.IS_FETCHING: {
            return {
                ...state,
                isFetching: action.payload
            };

        }

    }
    return state
}

export default charListReducer

