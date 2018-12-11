
export const SET_QUIZ = 'SET_QUIZ'

export function setQuiz(questions) {
    return { 
        type: SET_QUIZ,
        questions
    }
}