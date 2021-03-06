import React, {FC, lazy} from 'react'
import ChartListContainer from "./Component/ChartList/ChartListContainer";
import {Route, Switch, Redirect} from "react-router-dom";
import {withSuspense} from "./common/withSuspense/withSuspense";
import {RoutingType} from "./enum/Routing";
import style from './appStyles.module.scss'
import LocationComponent from "./Component/Location/LocationComponent";


 const PersonsContainer = lazy(():any  => import ("./Component/Persons/PersonsContainer"));


const App: FC = () => {

    return (<div className={style.body}>
        <div>

        </div>

        <div className={style.root}>
            <Switch>
                <Route className = {style.body} exact path={RoutingType.person} render={() => <ChartListContainer/>}/>
                <Route exact path={RoutingType.personId} render={withSuspense(PersonsContainer)}/>
                <Route exact path={RoutingType.locationId} render={withSuspense(LocationComponent)}/>

                <Route path={'/'} exact render={() => <Redirect to="/person"/>}/>
                <Route path={RoutingType.error} render={() => <h1>404: PAGE NOT FOUND</h1>}/>
                <Redirect from={'*'} to={RoutingType.error}/>
            </Switch>
        </div>



    </div>)
}

export default App;
