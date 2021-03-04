import ReactDOM from "react-dom";
import App from "./App";
import React from "react";

import {Provider} from "react-redux";
import {HashRouter} from "react-router-dom";
import {store} from "./Redux/Store";



    ReactDOM.render(
        <React.StrictMode>
            <HashRouter>
                <Provider store={store} >
                    <App  />
                </Provider>
                </HashRouter>
        </React.StrictMode>,

        document.getElementById('root')
    );




