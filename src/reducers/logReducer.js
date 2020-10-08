import _ from 'lodash';

export default (state = {}, action) => {
    switch (action.type) {
        case 'FETCH_LOGS':
            // creates new obj, takes every current record in state and adds them to new obj with spread operator. Use _.mapKeys to create an obj with the array of logs that comes back from get req and the value of id key as the keys of the obj that mapKeys creates. Since mapKeys returns an Obj of objects, we use the spread operator before it to add each key/value pair to the new state obj that we are returning.
            return { ...state, ..._.mapKeys(action.payload, 'id') };
        case 'FETCH_LOG':
            return { ...state, [action.payload.id]: action.payload };
        case 'CREATE_LOG':
            return { ...state, [action.payload.id]: action.payload };
        case 'EDIT_LOG':
            return { ...state, [action.payload.id]: action.payload };
        case 'DELETE_LOG':
            // creates a new obj and omits the second arg (action.payload) which is a specific obj's id in this case
            return _.omit(state, action.payload);
        default:
            return state;
    }
};
