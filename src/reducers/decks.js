import { GET_ALL_DECKS, ADD_NEW_DECK } from '../actions/decks'

function decks (state = {}, action) {
    switch (action.type) {
        case GET_ALL_DECKS :
        return {
            ...state,
            ...action.decks,
        }
        case ADD_NEW_DECK :
        return {
            ...state,
            [action.title]: {
                title: action.title,
                questions: []
            },
        }
        default :
        return state
    }
}
 export default decks