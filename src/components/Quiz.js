import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TouchableOpacity, 
} from 'react-native';
import { red, green, darkLigth, white, gray } from '../utils/colors'
import { connect } from 'react-redux'
import { setQuiz, setAnswerToShow, setQuestionToShow, setAsCorrect, setAsIncorrect } from '../actions/quiz'
import TextButton from '../templates/TextButton'
import { Ionicons, AntDesign } from '@expo/vector-icons'
import QuizEnded from './QuizEnded'
import { clearLocalNotification, setLocalNotification } from '../utils/helpers'

class Quiz extends React.Component {
    constructor(props) {
        super(props);
        this.mountQuestion = this.mountQuestion.bind(this)
    }
    static navigationOptions = ({ navigation }) => {
        const { deck } = navigation.state.params
        return {
            title: 'Quiz'
        }
    }

    componentDidMount() {
        clearLocalNotification().then(setLocalNotification)
        this.restartQuiz()
    }

    mountQuestion = (quiz) => {
        const { numberOfQuestions, questions } = quiz
        let questionToShow = null
        for (let index = 0; index < questions.length; index++) {
            const question = questions[index];
            if(question.answered === false) {
                questionToShow = question
                break
            }
        }

        if(questionToShow === null) {
            const { deck } = this.props.navigation.state.params
            return <QuizEnded 
                        quiz={quiz} 
                        deck={deck} 
                        navigation={this.props.navigation} 
                        restartQuiz={this.restartQuiz}
                        />
        } 

        return (
            <View style={styles.container}>
                <View style={styles.counter}>
                    <Text style={{fontSize: 20}}>{`${questionToShow.number}/${numberOfQuestions}`}</Text>
                </View>
                <View style={styles.header}>
                    <Text style={{fontSize: 30}}>{questionToShow.question} ?</Text>
                    <View style={styles.textButton}>
                        <TextButton style={{fontSize: 15}} onPress={() => this.props.setAnswerToShow(questionToShow) }>
                            Answer
                        </TextButton>
                        <Ionicons name='ios-return-right' size={30} color={darkLigth} />
                    </View>
                </View>
            </View>
        )

    }

    showAnwser(quiz) {
        const { show, numberOfQuestions, questions } = quiz
        return (
            <View style={styles.container}>
                <View style={styles.counter}>
                    <Text style={{fontSize: 20}}>{`${show.number}/${numberOfQuestions}`}</Text>
                </View>
                <View style={styles.header}>
                    <Text style={{fontSize: 30}}>{show.answer} </Text>
                    <View style={styles.textButton}>
                        <TextButton style={{fontSize: 15}} onPress={() => this.props.setQuestionToShow() }> 
                            Question
                        </TextButton>                    
                        <Ionicons name='ios-return-left' size={30} color={darkLigth} />
                    </View>
                </View>
                <View style={styles.btns}>
                    <TouchableOpacity
                        style={[styles.button, {backgroundColor: green}]}
                        onPress={() => this.props.setAsCorrect(show.number)} 
                    >
                        <Text style={{color: white}}>
                            <AntDesign name='like1' size={30} color={white} />
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.button, {backgroundColor: red}]}
                        onPress={() => this.props.setAsIncorrect(show.number)} 
                    >
                        <Text style={{color: white}}>
                            <AntDesign name='dislike1' size={30} color={white} />
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    restartQuiz = () => {
        const { deck } = this.props.navigation.state.params
        this.props.setQuiz(deck.questions)
    }

  render() {
    if(!this.props.quiz.questions) {
        return <View style={styles.container}><Text>Loading...</Text></View>
    }

    return (
        <View style={styles.container}>
            {this.props.quiz.show === 'question' 
                ? this.mountQuestion(this.props.quiz)
                : this.showAnwser(this.props.quiz)}
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
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: green,
    padding: 20,
    marginTop: 40,
    marginLeft: 20,
    marginRight: 20
  },
  textInput: {
    borderBottomWidth: 1,
    borderBottomColor: gray,
    padding: 20,
    backgroundColor: darkLigth,
    fontSize: 20,
    marginBottom: 20,
  },
  textButton: {
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

function mapStateToProps({ quiz }) {
    return {
        quiz
    }
}

export default connect(mapStateToProps, { 
        setQuiz, 
        setAnswerToShow, 
        setQuestionToShow, 
        setAsCorrect,
        setAsIncorrect
     })(Quiz)