import { fakeData, saveDeckTitle, getDecks } from '../utils/api'

export const GET_ALL_DECKS = 'GET_ALL_DECKS'
export const ADD_NEW_DECK = 'ADD_NEW_DECK'

// GET ALL DECKS
export function handlerGetAllDecks() {
    return dispatch => {
        return getDecks()
            .then((decks) => {
                dispatch(getAllDecks(decks))
            })
            .catch(erro => console.log(erro))
    }
}

function getAllDecks(decks) {
    return { 
        type: GET_ALL_DECKS,
        decks
    }
}

// ADD NEW DECK
export function handlerAddNewDeck(title) {
    return dispatch => {
        return saveDeckTitle(title)
            .then(() => {
                dispatch(addNewDeck(title))
            })
            .catch(erro => console.log(erro))
    }
}

function addNewDeck(title) {
    return {
        type: ADD_NEW_DECK,
        title
    }
}
