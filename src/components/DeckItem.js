import React, { Component } from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { withNavigation } from 'react-navigation';

class DeckItem extends Component {
    render() {
        const { deck } = this.props
        return (
            <TouchableOpacity 
                style={styles.deck}
                onPress={() => this.props.navigation.navigate(
                    'Deck',
                    { deck }
                )}    
            >
                <Text style={[styles.textCard, styles.cardTitle]}>{deck.title}</Text>
                <Text style={styles.textCard}>{deck.questions.length} cards</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
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
});

export default withNavigation(DeckItem)