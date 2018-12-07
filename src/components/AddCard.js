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
import { handlerAddNewCardToDeck } from '../actions/decks'

class AddCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { question: '', answer: '' };
  }
  static navigationOptions = ({ navigation }) => {
    const { deck } = navigation.state.params
    return {
        title: 'Adding card...'
    }
  }

  _onPress = (title) => {
    const { question, answer } = this.state
    if(question === '' || answer === '') {
      Alert.alert('Ops!', 'Both fields need be filled :)')
      return false
    }

    const card = { question, answer }
    this.props.handlerAddNewCardToDeck(title, card)
      .then(() => {
        Alert.alert('Success!', 'New card added.')
        this.props.navigation.navigate('DeckList')
      })
    
  }

  render() {
    const { deck } = this.props.navigation.state.params
    return (
        <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
          <View style={styles.header}>
            <Text style={{fontSize: 30, color: darkLigth}}> ... to {deck.title} deck </Text>
          </View>
          <View style={styles.form}>
            <TextInput
                style={styles.textInput}
                onChangeText={(question) => this.setState({question})}
                value={this.state.question}
                placeholder='What is the question'
                placeholderTextColor='#ccc'
            />
            <TextInput
                style={styles.textInput}
                onChangeText={(answer) => this.setState({answer})}
                value={this.state.answer}
                placeholder='What is the answer'
                placeholderTextColor='#ccc'
            />

            <TouchableOpacity
                style={[styles.button]}
                onPress={() => this._onPress(deck.title)}
            >
                <Text style={{color: white}}>Save</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
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
  textInput: {
    borderBottomWidth: 1,
    borderBottomColor: gray,
    padding: 20,
    backgroundColor: darkLigth,
    fontSize: 20,
    marginBottom: 20,
  },  
});

export default connect(null, { handlerAddNewCardToDeck })(AddCard)