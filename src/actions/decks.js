import { fakeData } from '../utils/api'

export const GET_ALL_DECKS = 'GET_ALL_DECKS'


export function handlerGetAllDecks() {
   return getAllDecks(fakeData)
}

export function getAllDecks() {
    return { 
        type: GET_ALL_DECKS,
        fakeData
    }
}

