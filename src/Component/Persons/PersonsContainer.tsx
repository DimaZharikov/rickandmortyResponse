import React, {FC, memo, useEffect} from "react";
import PersonComponent from "./PersonComponent";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../Redux/Store";
import {charsResponseType, setPersonIdSaga} from "../../Redux/Persons/PersonsReducer";
import {useParams} from 'react-router-dom'
import styles from './PersonsStyle.module.scss'


interface Props {

}

const PersonsContainer: FC <Props> = memo(({

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
})


export default PersonsContainer