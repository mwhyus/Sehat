import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ILSehat } from '../../assets'

const Splash = () => {
    return (
        <View style={styles.container}>
            <View style={{marginLeft: 90}}>
                <ILSehat />
            </View>
        </View>
    )
}

export default Splash

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})

