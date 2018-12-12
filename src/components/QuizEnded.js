import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
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
        return (
           <View style={styles.container}>
                <View style={[{flex: 2}, {justifyContent: 'center'}]}>
                    <Text style={[{fontSize: 30}, {color: darkLigth}]}> Quiz Ended</Text>
                </View>
                <View style={{flex: 3}}>
                    <Text style={[{fontSize: 50}, {color: dark}]}>You hit {this.state.result} </Text>
                </View>
               
           </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        
    }
});

export default QuizEnded