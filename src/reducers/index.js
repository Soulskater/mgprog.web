import {combineReducers} from 'redux'
import navigate from './navigate';
import projects from './projects';
import {routerReducer} from 'react-router-redux'

const siteReducers = combineReducers({
    projects,
    navigate,
    routing: routerReducer
});

export default siteReducers;
