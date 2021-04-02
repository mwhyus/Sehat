import React from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { ILSehat } from '../../assets'
import { Button, Input } from '../../components'

const Login = () => {
    return (
        <ScrollView>
            <View style={styles.page}>
                <View style={styles.logo}>
                    <ILSehat />
                </View>
                <View style={styles.Container}>
                    <Input label="Email" />
                    <Input label='Password' />
                </View>
                <View style={styles.button}>
                    <Button title='Sign In' />
                    <View style={styles.smallContainer}>
                        <Text>Don't have an account? </Text>
                        <TouchableOpacity>
                            <Text>SignUp</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default Login

const styles = StyleSheet.create({
    page: {
        flex: 1,
        padding: 40
    },
    smallContainer: {
        flexDirection: 'row'
    },
    logo: {
        marginLeft: 35,
        justifyContent: 'center'
    },
    Container: {
        marginBottom: 10,
    },
    button: {
        alignItems: 'center'
    }
})
