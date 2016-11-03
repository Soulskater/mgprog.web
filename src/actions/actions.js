import {actionTypes} from './actionTypes';
import fetch from 'isomorphic-fetch'

/*
 * action creators
 */

export function navigate(mainPage) {
    if(mainPage === "projects"){

    }
    return {type: actionTypes.navigate, page: mainPage};
}

export function receivedProjects(projects) {
    return {type: actionTypes.receivedProjects, projects};
}

export function failedProjects(error) {
    return {type: actionTypes.failedProjects, error};
}

export function fetchProjects() {
    return function (dispatch) {
        return fetch("https://localhost:7443/api/projects")
            .then(response => response.json())
            .then(projects => {
                dispatch(receivedProjects(projects));
            });
    }
}