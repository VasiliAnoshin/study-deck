
export const SET_QUIZ = 'SET_QUIZ'
export const SET_ANSWER_TO_SHOW = 'SET_ANSWER_TO_SHOW'
export const SET_QUESTION_TO_SHOW = 'SET_QUESTION_TO_SHOW'
export const SET_AS_CORRECT = 'SET_AS_CORRECT'
export const SET_AS_INCORRECT = 'SET_AS_INCORRECT'

export function setQuiz(questions) {
    return { 
        type: SET_QUIZ,
        questions
    }
}

export function setAnswerToShow(question) {
    return { 
        type: SET_ANSWER_TO_SHOW,
        question
    }
}

export function setQuestionToShow(question) {
    return { 
        type: SET_QUESTION_TO_SHOW,
        question
    }
}

export function setAsCorrect(questionNumber) {
    return { 
        type: SET_AS_CORRECT,
        questionNumber
    }
}

export function setAsIncorrect(questionNumber) {
    return { 
        type: SET_AS_INCORRECT,
        questionNumber
    }
}