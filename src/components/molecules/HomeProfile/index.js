import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { colors, fonts } from '../../../utils'

const HomeProfile = ({name, Profession}) => {

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.profession}>{Profession}</Text>
            </View>
        </View>
    )
}

export default HomeProfile

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    name: {
        fontSize: 20,
        fontFamily: fonts.primary[600],
        color: colors.text.primary,
        textTransform: 'capitalize'        
    },
    profession: {
        fontSize: 16,
        fontFamily: fonts.primary[400],
        color: colors.text.secondary,
        textTransform: 'capitalize',
    }
})
