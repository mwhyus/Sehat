import React from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'

const Input = ({ label }) => {
    return (
        <View style={styles.container}>
            <Text>{label}</Text>
            <View>
                <TextInput style={styles.input} />
            </View>
        </View>
    )
}

export default Input

const styles = StyleSheet.create({
    input: {
        borderBottomColor: 'black',
        borderWidth: 1,
        borderRadius: 8,
    },
    container: {
        marginTop: 15
    }
})
