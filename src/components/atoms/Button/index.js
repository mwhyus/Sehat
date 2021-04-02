import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const Button = ({title}) => {
    return (
        <TouchableOpacity style={styles.container}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
        borderRadius: 10,
        width: 250,
        backgroundColor: '#5BABE1',
        height: 40
    },
    text: {
        fontSize: 16,
        fontWeight: '900',
        textAlign: 'center',
        color: '#ffffff'
    }
})
