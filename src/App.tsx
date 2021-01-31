import React, {FC, lazy} from 'react'
import ChartListContainer from "./Component/ChartList/ChartListContainer";
import {Route, Switch, Redirect} from "react-router-dom";
import {withSuspense} from "./common/withSuspense/withSuspense";


 const PersonsContainer = lazy(():any  => import ("./Component/Persons/PersonsContainer"));


const App: FC = () => {

    return (<div>
        <Switch>

            <Route exact path={'/person'} render={() => <ChartListContainer/>}/>
            <Route exact path={'/person/:id'} render={withSuspense(PersonsContainer)}/>
            <Route path={'/404'} render={() => <h1>404: PAGE NOT FOUND</h1>}/>
            <Route path={'/'} exact render={() => <Redirect to={'/person'}/>}/>
            <Redirect from={'*'} to={'/404'}/>
        </Switch>


    </div>)
}

export default App;
