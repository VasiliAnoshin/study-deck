import React from 'react';
import { Platform } from 'react-native';
import { 
    createBottomTabNavigator, 
    createMaterialTopTabNavigator, 
    createAppContainer,
    createStackNavigator
  } from 'react-navigation'
import { FontAwesome, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import DeckList from './DeckList'
import AddDeck from './AddDeck'
import Deck from './Deck'
import AddCard from './AddCard'
import Quiz from './Quiz'
import { darkLigth, white } from '../utils/colors'

const RouteConfigs = {
    DeckList: {
        screen: DeckList,
        navigationOptions: {
        tabBarLabel: 'Decks',
        tabBarIcon: ({ tintColor }) => <MaterialCommunityIcons name='cards' size={30} color={tintColor} />
        },
    },
    AddDeck: {
        screen: AddDeck,
        navigationOptions: {
            tabBarLabel: 'Add Deck',
            tabBarIcon: ({ tintColor }) => <FontAwesome name='plus-square' size={30} color={tintColor} />
        }
    },
};
    
const TabNavigatorConfig = {
    navigationOptions: {
        header: null
    },
    tabBarOptions: {
        activeTintColor: Platform.OS === 'ios' ? darkLigth : white,
        style: {
            height: Platform.OS === 'ios' ? 56 : 80,
            paddingTop: Platform.OS === 'ios' ? 0 : 25,
            backgroundColor: Platform.OS === 'ios' ? white : darkLigth,
            shadowColor: 'rgba(0, 0, 0, 0.24)',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowRadius: 6,
        shadowOpacity: 1,
        },
    },
};
    
const Tabs = Platform.OS === "ios"
    ? createBottomTabNavigator(RouteConfigs, TabNavigatorConfig)
    : createMaterialTopTabNavigator(RouteConfigs, TabNavigatorConfig);
    
    
const MainNavigator = createStackNavigator({
    home: {
        screen: Tabs,
        navigationOptions: {
            header: null,
        },
    },
    Deck: {
        screen: Deck,
        navigationOptions: ({ navigation }) => ({
            headerTintColor: white,
            headerStyle: {
            backgroundColor: darkLigth,
            },
        }),
    },
    AddCard: {
        screen: AddCard,
        navigationOptions: ({ navigation }) => ({
            headerTintColor: white,
            headerStyle: {
            backgroundColor: darkLigth,
            },
        }),
    },
    Quiz: {
        screen: Quiz,
        navigationOptions: ({ navigation }) => ({
            headerTintColor: white,
            headerStyle: {
            backgroundColor: darkLigth,
            },
        }),
    },
});
  
export default createAppContainer(MainNavigator)