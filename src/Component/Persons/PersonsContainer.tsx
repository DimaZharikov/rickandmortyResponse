import {FC, useEffect} from "react";
import PersonComponent from "./PersonComponent";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../Redux/Store";
import {charsResponseType, setPersonIdSaga, stateProps} from "../../Redux/Persons/PersonsReducer";
import {useParams} from 'react-router-dom'



interface Props {

}

const PersonsContainer: FC <Props> = ({

}) => {
    const person = useSelector<AppRootStateType, charsResponseType | null>((state) => state.person.data)
    const dispatch = useDispatch()
    const {id} = useParams<{id: string}>()
    useEffect(()=> {
        dispatch(setPersonIdSaga( +id ))
    },[])

    return (<div>
        <PersonComponent person={person}/>
    </div>)
}


export default PersonsContainer