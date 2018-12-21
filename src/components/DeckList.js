import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import { connect } from 'react-redux'
import { handlerGetAllDecks } from '../actions/decks'
import DeckItem from './DeckItem'

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
                        <DeckItem key={deck.title} deck={deck} />
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
})

function mapStateToProps ({ decks }) {
    return {
        decks: Object.values(decks)
    }
}

export default connect(mapStateToProps, { handlerGetAllDecks })(DeckList)