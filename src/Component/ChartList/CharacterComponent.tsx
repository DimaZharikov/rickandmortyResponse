import {FC} from "react";

import {NavLink} from "react-router-dom";
import {charsResponseType, setPersonIdSaga} from "../../Redux/Persons/PersonsReducer";
import {useDispatch} from "react-redux";
import style from './charListsStyle.module.scss'


interface Props {
    chars: charsResponseType

}

const CharacterComponent: FC<Props> = ({
                                           chars
                                       }) => {

    const dispatch = useDispatch()

    const callPage = () => {
        dispatch(setPersonIdSaga(chars.id))

    }
    return (<div className={style.items}>
        <div className={style.wrapperItem}>
            <img src={chars.image} alt={`there was images ${chars.name}`}/>
            <NavLink to={`/person/${chars.id}`}>
                <h1 onClick={callPage}>{chars.name}</h1>
            </NavLink>
            <h2>{chars.status} - {chars.species} </h2>
            <h2 className={style.headlineCard}> Last known location: </h2>
            <h2>{chars.location.name}</h2>
        </div>
    </div>)
}


export default CharacterComponent

