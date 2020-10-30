import React from 'react';
import { SafeAreaView, Text, StyleSheet, View, TouchableOpacity } from 'react-native';

import { useSelector } from 'react-redux';

const WelcomePage = (props) => {

    const myUserName = useSelector(newUser => newUser.userName)

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style = {styles.textContainer}>
                <Text style = {styles.text}>Hosgeldin {myUserName}!..</Text>
            </View>
        </SafeAreaView>
    )
}

export {WelcomePage};

const styles = StyleSheet.create({
    textContainer:{
        backgroundColor: '#eceff1'
    },
    text:{
        fontSize: 20,
        paddingHorizontal: 20,
        paddingVertical:10,
        textAlign: 'center'
    }
})