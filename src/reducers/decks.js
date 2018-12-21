import { GET_ALL_DECKS, ADD_NEW_DECK, ADD_NEW_CARD_DECK, REMOVE_DECK } from '../actions/decks'

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
        case ADD_NEW_CARD_DECK :
            const deckCurrently = state[action.title]
            deckCurrently.questions.push(action.card)
            return {
                ...state,
                [action.title]: deckCurrently
            }
        case REMOVE_DECK :
            delete state[action.title]
            return {
                ...state,
            }
        default :
            return state
    }
}
 export default decks