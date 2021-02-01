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
    data: charsResponseType | null


}


const initialState: stateProps = {
    data: null,



}


//Type
export enum ActionType {
    SET_PERSON = "PERSON-CONTAINER/SET-PERSON",


    //sagaRequest
    REQUEST_PERSON = "/CHARACTER-CONTAINER/REQUEST_PERSON",



}


//actions

interface Action<T> {
    type: ActionType,
    payload: T

}

//ActionCreator
export const setPerson = (data: charsResponseType): Action<charsResponseType> => ({
    type: ActionType.SET_PERSON,
    payload: data
})




//sagaCreator
export const setPersonIdSaga = (id: number) : {type: ActionType.REQUEST_PERSON, payload: number} => ({
    type: ActionType.REQUEST_PERSON,
    payload: id

})






const PersonReducer = (state: stateProps = initialState, action: Action<charsResponseType>): stateProps => {
    switch (action.type) {


        case ActionType.SET_PERSON:{
            debugger
            return {
                ...state,
                data: action.payload
            };
        }

    }
    return state
}

export default PersonReducer