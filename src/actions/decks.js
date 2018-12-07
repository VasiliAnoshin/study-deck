import { fakeData, saveDeckTitle, getDecks, addCardToDeck } from '../utils/api'

export const GET_ALL_DECKS = 'GET_ALL_DECKS'
export const ADD_NEW_DECK = 'ADD_NEW_DECK'
export const ADD_NEW_CARD_DECK = 'ADD_NEW_CARD_DECK'

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

// ADD New CARD to DECK
export function handlerAddNewCardToDeck(title, card) {
    return dispatch => {
        return addCardToDeck(title, card)
            .then(() => {
                dispatch(addNewCardToDeck(title, card))
            })
            .catch(erro => console.log(erro))
    }
}

function addNewCardToDeck(title, card) {
    return {
        type: ADD_NEW_CARD_DECK,
        title,
        card
    }
}