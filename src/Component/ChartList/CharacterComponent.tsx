import {FC} from "react";
import {charsResponseType} from "../../Redux/CharList/CharListReducer";
import {NavLink} from "react-router-dom";

interface Props {
    chars: charsResponseType

}

const CharacterComponent: FC<Props> = ({
                                           chars
                                       }) => {
    return (<div>
        <div>
            <img src={chars.image} alt={`there was images ${chars.name}`}/>
        </div>
        <span>
            <NavLink to={'person' + chars.id}>
            <h1> Name : {chars.name}</h1>
            </NavLink>
                <h2>{chars.status}</h2>

</span>


    </div>)
}


export default CharacterComponent