import React from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { ICMap, ILLDocDen, ILLDocGen, ILLDocPed, ILLDocPsy, ILLDocVet, ILLMedicine } from '../../assets'
import { DoctorCategory, Gap, HomeProfile } from '../../components'
import { colors } from '../../utils'


const Home = ({navigation}) => {

    return (
        <ScrollView style={styles.page} showsVerticalScrollIndicator={false}>
            <View style={styles.content}>
                <View style={styles.smallcontainer}>
                    <View style={styles.header}>
                        <HomeProfile /> 
                        <TouchableOpacity onPress={() => navigation.navigate('Maps')}>
                            <ICMap />
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.welcome}>How can we help you?</Text>
                    <View style={styles.category}>
                        <DoctorCategory
                            type1='General'
                            type2='Practitioner' 
                            pic={ILLDocGen} 
                            onPress={() => navigation.navigate('ChooseDoctor')} 
                            />
                        <Gap width={8} />
                        <DoctorCategory 
                             type1='' 
                             type2='Pediatrician' 
                             pic={ILLDocPed}
                             onPress={() => navigation.navigate('ChooseDoctor')}
                             />
                        <Gap width={8} />
                        <DoctorCategory type1='' type2='Dentist' pic={ILLDocDen} />
                    </View>
                    <Gap height={8} />
                    <View style={styles.category}>
                        <DoctorCategory type2='Psychiatrist' pic={ILLDocPsy}/>
                        <Gap width={8} />
                        <DoctorCategory type2='Veterinary' pic={ILLDocVet}/>
                        <Gap width={8} />
                        <DoctorCategory type2='Medicine' pic={ILLMedicine}/>
                    </View>
                </View>
                <View style={styles.article}>
                    <Text style={styles.sectionlabel}>Health Articles</Text>
                    <TouchableOpacity>
                        <Text style={styles.seeall}>See all</Text>
                    </TouchableOpacity>
                </View>
            </View>
            
        </ScrollView>
    )
}

export default Home

const styles = StyleSheet.create({
    page: {
        backgroundColor: colors.primary,
        flex: 1
    },
    smallcontainer: {
        paddingHorizontal: 16
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    content: {
        backgroundColor: colors.backgroundColor,
        flex: 1,
        paddingVertical: 20,
    },
    welcome: {
        fontSize: 21,
        fontFamily: fonts.primary[600],
        color: colors.text.primary,
        marginTop: 30,
        marginBottom: 16
    },
    category: {
        flexDirection: 'row'
    },
    sectionlabel: {
        fontSize: 20,
        fontFamily: fonts.primary[600],
        color: colors.text.primary,
    },
    article: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 20,
        marginBottom: 10,
        paddingHorizontal: 16
    },
    seeall: {
        color: colors.text.secondary,
        borderBottomWidth: 0.2
    }
})
