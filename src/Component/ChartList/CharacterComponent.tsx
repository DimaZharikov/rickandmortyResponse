import {FC} from "react";

import {NavLink} from "react-router-dom";
import {charsResponseType, setPersonIdSaga} from "../../Redux/Persons/PersonsReducer";
import {useDispatch} from "react-redux";

interface Props {
    chars: charsResponseType

}

const CharacterComponent: FC<Props> = ({
                                           chars
                                       }) => {

   const  dispatch = useDispatch()

    const callPage = () => {
       dispatch(setPersonIdSaga(chars.id))

    }
    return (<div>
        <div >
            <img src={chars.image} alt={`there was images ${chars.name}`}/>
        </div>
        <span>
    <NavLink to = {`/person/${chars.id}`}>
        <h1 onClick = { callPage } > Name : {chars.name}</h1>
    </NavLink>


                <h2>{chars.status}</h2>

</span>


    </div>)
}


export default CharacterComponent