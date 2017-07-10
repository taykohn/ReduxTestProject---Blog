import { FETCH_POSTS } from '../actions';
import _ from 'lodash';

// storing list of posts inside object, so default state to {}
export default function(state = {}, action) {
    switch (action.type) {
        case FETCH_POSTS:
        // action.payload.data returns an array: [ post1, post2]
        // need to transform this list to a JSON object with 'id' : postID and 'value': post - {4, post}
        // We'll use lodash to accomplish this easily.
        //   mapKeys - first argument is an array, and the second argument is a property that you want to pull off of each array object
        //   and use as key for the new object.
            
            return _.mapKeys(action.payload.data, 'id');
        default:
            return state;
    }
}
