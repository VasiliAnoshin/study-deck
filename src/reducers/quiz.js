import { SET_QUIZ, SET_ANSWER_TO_SHOW, SET_QUESTION_TO_SHOW } from '../actions/quiz'

function quiz (state = {}, action) {
    switch (action.type) {
        case SET_QUIZ :
        const questions = action.questions
        let questionsToQuiz = []
        for (let index = 0; index < questions.length; index++) {
            const question = questions[index];
            question.answered = false
            question.correct = false
            question.number = index + 1
            questionsToQuiz.push(question)
        }
        return {
            ...state,
            questions: questionsToQuiz,
            numberOfQuestions: questions.length,
            show: 'question'
        }
        case SET_ANSWER_TO_SHOW :
        return {
            ...state,
            show: action.question
        }
        case SET_QUESTION_TO_SHOW :
        return {
            ...state,
            show: `question`
        }

        default :
        return state
    }
}
 export default quiz