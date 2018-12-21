import { AsyncStorage } from 'react-native'

const DECK_STORAGE_KEY = 'StudyDeck:key'

export const fakeData = {
        React: {
          title: 'React',
          questions: [
            {
              question: 'What is React?',
              answer: 'A library for managing user interfaces'
            },
            {
              question: 'Where do you make Ajax requests in React?',
              answer: 'The componentDidMount lifecycle event'
            }
          ]
        },
        JavaScript: {
          title: 'JavaScript',
          questions: [
            {
              question: 'What is a closure?',
              answer: 'The combination of a function and the lexical environment within which that function was declared.'
            }
          ]
        }
      }

export function saveDeckTitle(title) {
    const newDeck = {
        title,
        questions: []
    }
    return AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify({
        [title]: newDeck
    }))
}

export function getDecks() {
    return AsyncStorage.getItem(DECK_STORAGE_KEY)
        .then( results => JSON.parse(results))
}

export function getDeck(title) {
    return AsyncStorage.getItem(DECK_STORAGE_KEY)
    .then((results) => {
        const data = JSON.parse(results)
        return data[title]
    })
}

export function addCardToDeck(title, card) {
    // card = { question: 'sadf', answer: 'sadf' }
    return AsyncStorage.getItem(DECK_STORAGE_KEY)
    .then((results) => {
        const data = JSON.parse(results)
        const deck = data[title]
        deck.questions.push(card)
        return AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify({
            [title]: deck
        }))
    })
}

export function removeDeck(title) {
    return AsyncStorage.getItem(DECK_STORAGE_KEY)
        .then((results) => {
            const data = JSON.parse(results)
            data[title] = undefined
            delete data[title]
            AsyncStorage.setItem(CALENDAR_STORAGE_KEY, JSON.stringify(data))
        })
} 