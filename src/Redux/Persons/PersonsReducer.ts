import {charsResponseType} from "../CharList/CharListReducer";

export interface stateProps {
    data: charsResponseType | null


}


const initialState: stateProps = {
    data: null,


}


//Type
export enum ActionType {
    SET_CHARS = "CHARACTER-COMPONENT/SET-CHARS",


    //sagaRequest
    REQUEST_CHARS = "/CHARACTER-CONTAINER/REQUEST_CHARS",

}


//actions

interface Action<T> {
    type: ActionType,
    payload: T

}

//ActionCreator
export const setChars = (chars: charsResponseType[]): Action<charsResponseType[]> => ({
    type: ActionType.SET_CHARS,
    payload: chars
})


//sagaCreator
export const setCharsSaga = (nextPage: number): { type: ActionType.REQUEST_CHARS, payload: number } => ({

    type: ActionType.REQUEST_CHARS,
    payload: nextPage

})


const charListReducer = (state: stateProps = initialState, action: Action<charsResponseType[] & boolean>): stateProps => {
    switch (action.type) {
        //getChars from response
        case ActionType.SET_CHARS:
            return {
                ...state,

            };

    }
    return state
}

export default charListReducer