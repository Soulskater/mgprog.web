import React from 'react';
import ReactDom from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';

import thunk from 'redux-thunk';
import reducer from './reducers';
import {fetchProjects} from './actions/actions';
import routes from './routes'

// init shell
renderShell();

var initialState = {
    page: "welcome",
    projects: {
        items: [],
        fetching: false
    }
};

function renderShell() {
    document.addEventListener("DOMContentLoaded", function (event) {
        var container = document.getElementById('app');
        let store = createStore(reducer, applyMiddleware(thunk));

        ReactDom.render(
            <Provider store={store}>
                <Router history={browserHistory} routes={routes}/>
            </Provider>
            , container);
        store.dispatch(fetchProjects()).then(() =>
            console.log(store.getState())
        );
    });
}