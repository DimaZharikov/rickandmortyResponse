import  {FC} from 'react'
import ChartListContainer from "./Component/ChartList/ChartListContainer";
import {BrowserRouter, Route} from "react-router-dom";
import PersonsContainer from "./Component/Persons/PersonsContainer";


interface Props  {

}

const  App :FC < Props >= ({

                          }) => {

    return (<div>
        <BrowserRouter>
            <ChartListContainer/>
            <Route path='person/:id?' render = {() => <PersonsContainer/>}/>
        </BrowserRouter>

    </div>)
}

export default App;
