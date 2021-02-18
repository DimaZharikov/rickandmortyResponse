import React, {FC} from "react";
import {charsResponseType} from "../../Redux/Persons/PersonsReducer";
import styles from './PersonsStyle.module.scss'
import HeaderComponent from "../Header/HeaderComponent";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {Button} from '@material-ui/core'
import {v1} from "uuid";
import {NavLink} from "react-router-dom";

interface Props {
    person: charsResponseType | null
}

const PersonComponent: FC<Props> = ({
                                        person
                                    }) => {



    return (<div key={person?.id} >
        <HeaderComponent title={`Name: ${person?.name}`}/>
        <NavLink to = {'/person'}>
        <Button>
            <ExitToAppIcon style={{ fontSize: 50 }} />
        </Button>
        </NavLink>
        <div className={styles.block}>
            <div >
                <img src={person?.image} alt={`there was ${person?.name}`}/>,
            </div>
            <div>
                <div>
                    <h1>Gender: ({person?.gender})</h1>
                    <h2>Created: {person?.created}</h2>
                    <h2>Status: {person?.status} - {person?.species}</h2>
                </div>
                <div>
                    <h2>Origin: <a href={person?.origin.url}>{person?.origin.name}</a></h2>
                    <h2>Location:<NavLink to={`/location/${person ? person.location.url.replace(/\D+/gm, '') : null} `}>{person?.origin.name}</NavLink></h2>
                </div>
                <div>
                    <form action="Episode" >
                            <h1>Episode:</h1>
                            <select name="episode" className={styles.form}>
                                {person?.episode.map(e => {
                                    return <option value={v1()}>
                                        {e}
                                    </option>
                                })}
                            </select>

                    </form>
                </div>
            </div>


        </div>

</div>)
}

export default PersonComponent