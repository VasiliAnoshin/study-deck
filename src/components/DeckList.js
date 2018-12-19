import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Platform } from 'react-native';

import { connect } from 'react-redux'
import { handlerGetAllDecks } from '../actions/decks'

class DeckList extends React.Component {

    componentDidMount() {
      this.props.handlerGetAllDecks()
    }

    render() {
        return (
            <ScrollView style={styles.container}> 
                <View style={styles.header}> 
                    <Text style={styles.titleHeader}>
                            Your Decks
                    </Text>
                </View>
                <View style={styles.deckList}>
                    {this.props.decks.map( deck => (
                        <TouchableOpacity 
                            key={deck.title} 
                            style={styles.deck}
                            onPress={() => this.props.navigation.navigate(
                                'Deck',
                                { deck }
                            )}    
                        >
                            <Text style={[styles.textCard, styles.cardTitle]}>{deck.title}</Text>
                            <Text style={styles.textCard}>{deck.questions.length} cards</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>
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
        color: '#9fa9a3'
    },
    deckList: {
        flex: 1,
        marginTop: 20,
        marginLeft: 10,
        marginRight: 10
    },
    deck: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#e3e0cc',
        color: '#9fa9a3',
        marginBottom: 10,
        padding: 30,
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
    },
    textCard: {
        fontSize: 20,
        color: '#3b3a30'
    },
    cardTitle: {
        maxWidth: 150
    }
})

function mapStateToProps ({ decks }) {
    return {
        decks: Object.values(decks)
    }
}

export default connect(mapStateToProps, { handlerGetAllDecks })(DeckList)