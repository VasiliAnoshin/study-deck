import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { dark, red, green, darkLigth, white, gray } from '../utils/colors'

class QuizEnded extends Component {
    constructor(props) {
        super(props)
        this.state = {
            result: ''
        }
    }
    componentDidMount() {
        const { quiz } = this.props
        const questionsCorrects = quiz.questions.filter( question => question.correct === true )
        const calc = (questionsCorrects.length / quiz.numberOfQuestions) * 100
        const result = `${Math.trunc(calc)}%`
        this.setState({ result })
    }
    render() {
        const { deck } = this.props
        return (
           <View style={styles.container}>
                <View style={[{flex: 2}, {justifyContent: 'center'}]}>
                    <Text style={[{fontSize: 30}, {color: darkLigth}]}> Quiz Ended</Text>
                </View>
                <View style={{flex: 3}}>
                    <Text style={[{fontSize: 50}, {color: dark}]}>You hit {this.state.result} </Text>
                </View>
                <View style={styles.btns}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={this.props.restartQuiz}  
                    >
                        <Text style={{color: white}}>Restart Quiz</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.button, {backgroundColor: red}]}
                        onPress={() => this.props.navigation.navigate(
                        'Deck',
                        { deck }
                    )} 
                    >
                        <Text style={{color: white}}>Back to Deck</Text>
                    </TouchableOpacity>
                </View>
               
           </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    btns: {
        flex: 2,
        marginLeft: 10,
        marginRight: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      },
      button: {
        alignItems: 'center',
        backgroundColor: green,
        padding: 15,
        marginTop: 40,
        marginLeft: 20,
        marginRight: 20
      },
});

export default QuizEnded