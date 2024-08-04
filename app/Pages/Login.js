import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import Ionicons from '@expo/vector-icons/Ionicons';
export default function Login() {
    return (
        <View>
            <Image source={require('./../../assets/images/login.png')} />
            <View style={styles.container} >
                <Text style={styles.welcomeText}> Welcome to TuTor </Text>
                <Text style={{ textAlign: 'center', marginTop: 80, fontSize: 25 }}>Login/ Signup</Text>
                <View style={styles.botton} >
                    <Ionicons name="logo-google" size={24} color="white" style={{marginRight : 10}} />
                    <Text style={{color:Colors.white}} > Sign in with Google</Text>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
        marginTop: -25,
        backgroundColor: '#fff',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,

    },
    welcomeText: {
        fontSize: 35,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    botton: {
        backgroundColor: Colors.primary,
        padding: 20,
        margin: 30,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,

    },
})