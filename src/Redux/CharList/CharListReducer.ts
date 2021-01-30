export interface charsResponseType {
    id: number,
    name: string,
    status: "alive" | "dead" | "unknown",
    species: string,
    type: string,
    image: string,
    gender: "female" | "male" | "unknown",
    origin: {
        name: string,
        url: string,
    },
    location: {
        name: string,
        url: string,
    },
    episode: string[],
    created: string,


}


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
export const setChars = (chars: charsResponseType[]): Action<charsResponseType[]> => ({
    type: ActionType.SET_CHARS,
    payload: chars
})
export const addChars = (chars: charsResponseType[]): Action<charsResponseType[]> => ({
    type: ActionType.REQUEST_CHARS_NEXT_PAGE,
    payload: chars
})


export const isFetchingLoader = (isFetching: boolean): Action<boolean> => ({
    type: ActionType.IS_FETCHING,
    payload: isFetching
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

