import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Button, Input } from '../../components'

const Register = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Register Yourself</Text>
            </View>
            <View style={styles.smallContainer}>
                <Input label='Full Name' />
                <Input label='Profession' />
                <Input label='Email' />
                <Input label='Password' />
            </View>
            <View style={styles.button}>
                <Button title='Sign Up' />
                <View style={{flexDirection: 'row'}}>
                    <Text>Already have an account? </Text>
                    <TouchableOpacity>
                        <Text>Sign In</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Register

const styles = StyleSheet.create({
    header: {
        alignSelf: 'center'
    },
    headerText:{
        fontSize: 18,
        marginTop: 30
    },
    container: {
        padding: 30
    },
    smallContainer: {
        marginTop: 40
    },
    button: {
        alignItems: 'center',
        marginTop: 40
    }
})
