import {FC} from "react";
import {charsResponseType} from "../../Redux/Persons/PersonsReducer";

interface Props {
    person: charsResponseType | null
}

const PersonComponent: FC <Props> = ({
                                         person
                                     }) => {


    return (<div key = {person?.id}>


        name: {person?.name}
        status: {person?.status},
        species: {person?.species},
        type: {person?.type},
        image: <img src={person?.image} alt=""/>,
        gender: {person?.gender},
        origin:<a href={person?.origin.url}>{person?.origin.name}</a>

        location: <a href={person?.location.url}>{person?.origin.name}</a>

        episode: {person?.episode},
        created: {person?.created},

    </div>)
}

export default PersonComponent