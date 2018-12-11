import { 
    SET_QUIZ, 
    SET_ANSWER_TO_SHOW, 
    SET_QUESTION_TO_SHOW,
    SET_AS_CORRECT,
    SET_AS_INCORRECT
} from '../actions/quiz'

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
        case SET_AS_CORRECT :
        let questionsArr = state.questions
        for (let index = 0; index < questionsArr.length; index++) {
            if(questionsArr[index].number === action.questionNumber) {
                questionsArr[index].answered = true
                questionsArr[index].correct = true
            }
        }

        return {
            ...state,
            questions: questionsArr,
            show: 'question'
            
        }
        case SET_AS_INCORRECT :
        let questionsArrInc = state.questions
        for (let index = 0; index < questionsArrInc.length; index++) {
            if(questionsArrInc[index].number === action.questionNumber) {
                questionsArrInc[index].answered = true
            }
        }

        return {
            ...state,
            questions: questionsArrInc,
            show: 'question'
            
        }

        default :
        return state
    }
}
 export default quiz