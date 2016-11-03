import {browserHistory} from 'react-router';
import {actionTypes} from '../actions/actionTypes';

export const pages = {
    WELCOME: 'welcome',
    PROJECTS: 'projects',
    BLOG: 'blog',
    ABOUT: 'about'
};

export default function navigate(state, action) {
    switch (action.type) {
        case actionTypes.navigate:
            navigateToPage(action.page);
            return Object.assign({}, state, {
                page: action.page
            });
        default:
            return Object.assign({}, state, {
                page: state ? state.page : pages.WELCOME
            });
    }
}

function navigateToPage(page) {
    var url = "";
    switch (page) {
        case pages.PROJECTS:
            url = "projects";
            break;
        case pages.BLOG:
            url = "blog";
            break;
        case pages.ABOUT:
            url = "about";
            break;
    }
    browserHistory.push(url);
}