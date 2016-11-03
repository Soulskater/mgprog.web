import {fetchProjects} from '../actions/actions';
import {actionTypes} from '../actions/actionTypes';

export default function (state, action) {
    switch (action.type) {
        case actionTypes.receivedProjects:
            return Object.assign({}, state, {
                items: action.projects,
                fetching: false
            });
        case actionTypes.failedProjects:
            return Object.assign({}, state, {
                items: [],
                fetching: false,
                error: action.error
            });
        default:
            return Object.assign({}, state, {
                items: state ? state.items : [],
                fetching: false
            });
    }
}
