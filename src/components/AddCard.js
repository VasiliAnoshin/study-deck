import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { dark, red, green, darkLigth, white } from '../utils/colors'

export default class AddCard extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const { deck } = navigation.state.params
    return {
        title: 'Adding card...'
    }
  }

  render() {
    const { deck } = this.props.navigation.state.params
    return (
        <View style={styles.container}>
            <Text>Add card to {deck.title}</Text>
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
