import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { connect } from 'react-redux'
import { getAllDecks } from '../actions'

class DeckList extends React.Component {

    componentDidMount() {
      this.props.getAllDecks()
    }

    render() {
        console.log(this.props.decks);
    
        return (
            <View style={styles.container}> 
                <Text>
                Deck List
                </Text>
                <View>
                    {this.props.decks.map( deck => (
                        <View key={deck.title}>
                            <Text>{deck.title}</Text>
                        </View>
                    ))}
                </View>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 40
    }
})

function mapStateToProps (state) {
    return {
        decks: Object.values(state)
    }
}

export default connect(mapStateToProps, { getAllDecks })(DeckList)