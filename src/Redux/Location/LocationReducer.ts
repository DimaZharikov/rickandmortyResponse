import {charsResponseType} from "../Persons/PersonsReducer";

export interface locationResponseType {
    id: number,
    name: string,
    type: string
    dimension: string
    "residents": [
        string
    ],
    url: string
    created:string


}

export interface stateProps {
    data: locationResponseType | null,
    residents: charsResponseType[] | null


}


const initialState: stateProps = {
    data: null,
    residents : null,



}


//Type
export enum ActionType {
    SET_LOCATION = "LOCATION-COMPONENT/SET_LOCATION",
    GET_RESIDENTS = 'LOCATION_COMPONENT/GET_RESIDENTS',


    //sagaRequest
    REQUEST_LOCATION = "LOCATION-COMPONENT/REQUEST_LOCATION",
    REQUEST_GET_RESIDENTS = 'LOCATION_COMPONENT/REQUEST_GET_RESIDENTS',



}


//actions

interface Action<T> {
    type: ActionType,
    payload: T

}

//ActionCreator
export const setLocation = (data: locationResponseType): Action<locationResponseType> => ({
    type: ActionType.SET_LOCATION,
    payload: data
})


export const setResidents = (resident: charsResponseType ) : Action<charsResponseType> => ({
    type: ActionType.GET_RESIDENTS,
    payload: resident
})




//sagaCreator
export const setLocationIdSaga = (id: number) : {type: ActionType.REQUEST_LOCATION, payload: number} => ({
    type: ActionType.REQUEST_LOCATION,
    payload: id

})

export const getResidentsSaga = (id: number | undefined) : {type: ActionType.REQUEST_GET_RESIDENTS, payload: number | undefined} => ({
    type: ActionType.REQUEST_GET_RESIDENTS,
    payload: id
})






const LocationReducer = (state: stateProps = initialState, action: Action<locationResponseType & charsResponseType[]>): stateProps => {
    switch (action.type) {
        case ActionType.SET_LOCATION:
            return {
                ...state,
                data: action.payload
            };
        case ActionType.GET_RESIDENTS:
            return  {
                ...state, residents: action.payload
            }

    }
    return state
}

export default LocationReducer