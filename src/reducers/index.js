import { GET_ALL_DECKS } from '../actions'

function decks (state = {}, action) {
    switch (action.type) {
        case GET_ALL_DECKS :
        return {
            ...state,
            ...action.fakeData,
        }
        default :
        return state
    }
}
 export default decks