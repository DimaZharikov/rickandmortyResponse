import React, {FC, useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../Redux/Store";
import {getResidentsSaga, setLocationIdSaga} from "../../Redux/location/LocationReducer";
import HeaderComponent from "../Header/HeaderComponent";
import {charsResponseType} from "../../Redux/Persons/PersonsReducer";
import CharacterComponent from "../ChartList/CharacterComponent";
import styles from "../Persons/PersonsStyle.module.scss";
import {v1} from "uuid";

const LocationComponent : FC = () => {


    const loc = useSelector((state:AppRootStateType) => state.location.data)

    const charsId = useSelector <AppRootStateType, number | undefined> (state => state.person.data?.id)


    //id location
    const {id} = useParams<{id:string}>()
    const dispatch  = useDispatch()
    const idResident = loc?.residents.map(resident => resident.replace(/\D+/gm, ''))

    console.log('loc id Resident:',idResident)



    useEffect(() => {
        dispatch(setLocationIdSaga(+id))
    }, [id])


    return (
        <div>
            <HeaderComponent title = {loc?.name}/>
            <div>
               <span>
                   <h1>Location: {loc?.name}</h1>
                   <h1>Type: {loc?.type}</h1>
               </span>
            </div>
            <div>
                <h2>Created: {loc?.created}</h2>
                <h2>Dimension: {loc?.dimension}</h2>
            </div>
            <div>
                <form action="residents">
                    <h1>Residents:</h1>
                    <select name='resident'>
                        {
                            loc?.residents.map((e, index)=> {
                                return <option key={index}>{e}</option>
                            })
                        }
                    </select>
                </form>




            </div>

        </div>
    );
};



export default LocationComponent;