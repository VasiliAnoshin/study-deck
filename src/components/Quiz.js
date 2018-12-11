import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TouchableOpacity, 
  TextInput, 
  KeyboardAvoidingView,
  Alert
} from 'react-native';
import { dark, red, green, darkLigth, white, gray } from '../utils/colors'
import { connect } from 'react-redux'
import { setQuiz, setAnswerToShow } from '../actions/quiz'

class Quiz extends React.Component {
    constructor(props) {
        super(props);
        this.state = { question: '', answer: '' };
    }
    static navigationOptions = ({ navigation }) => {
        const { deck } = navigation.state.params
        return {
            title: 'Quiz'
        }
    }

    componentDidMount() {
        //enviar questions para o Redux via action
        const { deck } = this.props.navigation.state.params
        this.props.setQuiz(deck.questions)
    }

    checkQuizRemaining() {
        const quizToAnswer = this.props.quiz.questions.filter( question => question.answered === false )
        return quizToAnswer.length
    }

    mountQuestion(questions) {
        let questionToShow = null
        let numberQuestionAnwsered = 0
        for (let index = 0; index < questions.length; index++) {
            const question = questions[index];
            if(question.answered === false) {
                numberQuestionAnwsered = index
                questionToShow = question
                break
            }
        }

        return (
            <View style={styles.container}>
                <View style={styles.counter}>
                    <Text style={{fontSize: 20}}>{`${numberQuestionAnwsered + 1}/${questions.length}`}</Text>
                </View>
                <View style={styles.header}>
                    <Text style={{fontSize: 30}}>{questionToShow.question} ?</Text>
                </View>
                <TouchableOpacity
                    style={[styles.button, {backgroundColor: green}]}
                    onPress={() => this.props.setAnswerToShow(questionToShow)} 
                >
                    <Text style={{color: white}}>Answer</Text>
                </TouchableOpacity>
            </View>
        )

    }

    showAnwser(question) {
        console.log(question.answer);
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={{fontSize: 30}}>{question.answer} </Text>
                </View>
                <TouchableOpacity
                    style={[styles.button, {backgroundColor: green}]}
                    onPress={() => this.props.setAnswerToShow(questionToShow)} 
                >
                    <Text style={{color: white}}>Correct</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.button, {backgroundColor: red}]}
                    onPress={() => this.props.setAnswerToShow(questionToShow)} 
                >
                    <Text style={{color: white}}>Incorrect</Text>
                </TouchableOpacity>
            </View>
        )
    }

  render() {
    if(!this.props.quiz.questions) {
        return <View style={styles.container}><Text>Loading...</Text></View>
    }

    const { deck } = this.props.navigation.state.params
    return (
        <View style={styles.container}>
            {this.props.quiz.show === 'question' 
                ? this.mountQuestion(this.props.quiz.questions)
                : this.showAnwser(this.props.quiz.show)}
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  counter: {
    padding: 20
  },
  header: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  btns: {
    flex: 3,
    marginLeft: 10,
    marginRight: 10
  },
  button: {
    alignItems: 'center',
    backgroundColor: green,
    padding: 15,
    marginTop: 40,
  },
  textInput: {
    borderBottomWidth: 1,
    borderBottomColor: gray,
    padding: 20,
    backgroundColor: darkLigth,
    fontSize: 20,
    marginBottom: 20,
  },  
});

function mapStateToProps({ quiz }) {
    console.log(quiz);
    
    return {
        quiz
    }
}

export default connect(mapStateToProps, { setQuiz, setAnswerToShow })(Quiz)