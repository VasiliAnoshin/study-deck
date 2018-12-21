import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import { dark, red, green, darkLigth, white } from '../utils/colors'
import { FontAwesome } from '@expo/vector-icons'
import { handlerRemoveDeck } from '../actions/decks'

import { connect } from 'react-redux'

class Deck extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const { deck } = navigation.state.params
    return {
        title: deck.title,
        headerBackTitle: null,
        headerRight: (
          <TouchableOpacity
            style={{marginRight: 10}}
            onPress={navigation.getParam('handlerRemoveDeck')}
          >
            <FontAwesome name='trash-o' size={25} color={white} />
          </TouchableOpacity>
        ),
    }
  }

  componentDidMount() {
    this.props.navigation.setParams({ handlerRemoveDeck: this._handlerRemoveDeck });
  }

  shouldComponentUpdate(nextProps) {
    if(nextProps.deckCardsLength !== this.props.deckCardsLength) {
      return true
    }
    return false
  }

  _handlerRemoveDeck = () => {
    const { deck } = this.props.navigation.state.params
    this.props.handlerRemoveDeck(deck.title)
      .then(() => {
        Alert.alert('Done!', 'The deck was deleted.')
        this.props.navigation.navigate('DeckList')
      })
  }

  render() {
    const { deck, deckCardsLength } = this.props
  
    return (
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={{fontSize: 30, color: darkLigth}}> Deck of {deck.title} </Text>
            <Text style={{fontSize: 30, color: darkLigth}}> {deckCardsLength} cards </Text>
          </View>
          <View style={styles.btns}>
            <TouchableOpacity
                style={styles.button}
                onPress={() => this.props.navigation.navigate(
                  'AddCard',
                  { deck }
              )}  
            >
                <Text style={{color: white}}>Add Card</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.button, {backgroundColor: red}]}
                onPress={() => this.props.navigation.navigate(
                  'Quiz',
                  { deck }
              )} 
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

function mapStateToProps ({ decks }, { navigation }) {
  let deck = decks[navigation.state.params.deck.title]
  if(!deck) {
    deck = {
      title: '',
      questions: []
    }
  }

  return {
      deck,
      deckCardsLength: deck.questions.length
  }
}

export default connect(mapStateToProps, { handlerRemoveDeck })(Deck)