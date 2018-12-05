import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';

import { connect } from 'react-redux'
import { handlerAddNewDeck } from '../actions/decks'

import { dark, darkLigth, green, gray, white } from '../utils/colors'

class AddDeck extends React.Component {
    constructor(props) {
        super(props);
        this.state = { title: '' };
    }

    _onPressSubmit = () => {
        const { title } = this.state
        if(title === '') {
            Alert.alert('Ops!', 'Deck`s title cant be empty.')
        }
        //dispatch action to update redux and save Storage
        this.props.handlerAddNewDeck(title)
    }

    render() {
        return (
            <View style={styles.container}> 
                <View style={styles.header}> 
                    <Text style={styles.titleHeader}>
                            Adding new Deck
                    </Text>
                </View>
                <View style={styles.deckForm}>
                    <TextInput
                        style={styles.textInput}
                        onChangeText={(title) => this.setState({title})}
                        value={this.state.title}
                        placeholder='Title of the new deck'
                        placeholderTextColor='#ccc'
                    />
                    <TouchableOpacity
                        style={styles.button}
                        onPress={this._onPressSubmit}
                    >
                        <Text style={{color: white}}>Save</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
    },
    header:{
        marginTop: 10,
        alignItems: 'center',
        
    },
    titleHeader: {
        fontSize: 30,
        color: darkLigth
    },
    deckForm: {
        marginTop: 40,
        marginLeft: 10,
        marginRight: 10
    },
    textInput: {
        borderBottomWidth: 1,
        borderBottomColor: gray,
        padding: 20,
        backgroundColor: darkLigth,
        fontSize: 20
    },
    button: {
        alignItems: 'center',
        backgroundColor: green,
        padding: 15,
        marginTop: 40,
      },
    textBtn: {

    }

})



export default connect(null, { handlerAddNewDeck })(AddDeck)