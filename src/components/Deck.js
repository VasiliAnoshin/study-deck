import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { dark, red, green, darkLigth, white } from '../utils/colors'

export default class Deck extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const { deck } = navigation.state.params
    return {
        title: deck.title
    }
  }

  _onPressAddCard = () => {

  }

  _onPressStartQuiz = () => {

  }

  render() {
    const { deck } = this.props.navigation.state.params
    return (
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={{fontSize: 30, color: darkLigth}}> Deck of {deck.title} </Text>
            <Text style={{fontSize: 30, color: darkLigth}}> {deck.questions.length} cards </Text>
          </View>
          <View style={styles.btns}>
            <TouchableOpacity
                style={styles.button}
                onPress={this._onPressAddCard}
            >
                <Text style={{color: white}}>Add Card</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.button, {backgroundColor: red}]}
                onPress={this._onPressStartQuiz}
            >
                <Text style={{color: white}}>Start Quiz</Text>
            </TouchableOpacity>
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
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

});
