import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Deck extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const { deck } = navigation.state.params
    return {
        title: deck.title
    }
  }

  render() {
    const { deck } = this.props.navigation.state.params
    return (
        <View style={styles.container}>
          <Text> Deck {deck.title} </Text>
          <Text> {deck.questions.length} cards </Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
});
