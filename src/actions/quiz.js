
export const SET_QUIZ = 'SET_QUIZ'
export const SET_ANSWER_TO_SHOW = 'SET_ANSWER_TO_SHOW'
export const SET_QUESTION_TO_SHOW = 'SET_QUESTION_TO_SHOW'

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
