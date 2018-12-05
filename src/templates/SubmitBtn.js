import React, { Component } from 'react'
import { TouchableOpacity, Text, StyleSheet, Platform } from 'react-native'
import { green, white } from '../utils/colors'

export default function SubmitBtn ({ onPress }) {
    return (
      <TouchableOpacity 
        style={Platform.OS === 'ios' ? styles.iosSubmitBtn : styles.AndroidSubmitBtn}
        onPress={onPress}>
          <Text style={styles.submitBtnText}>Save</Text>
      </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    iosSubmitBtn: {
      backgroundColor: green,
      padding: 10,
      borderRadius: 7,
      height: 45,
      marginLeft: 40,
      marginRight: 40,
    },
    AndroidSubmitBtn: {
      backgroundColor: green,
      padding: 10,
      paddingLeft: 30,
      paddingRight: 30,
      height: 45,
      borderRadius: 2,
      alignSelf: 'flex-end',
      justifyContent: 'center',
      alignItems: 'center',
    },
    submitBtnText: {
      color: white,
      fontSize: 22,
      textAlign: 'center',
    },
})