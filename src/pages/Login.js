import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView, View, Button, TextInput, StyleSheet, Dimensions } from 'react-native';



const Login = () => {

    // const 

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <TextInput
                    style={styles.inputContainer}
                    placeholder='Enter username..'
                // onChangeText = {value =>  }
                />
                <Button
                    title='Login'
                    color='purple'
                    // onPress = {() => {
                    //     navigation.navigate('WelcomePage');

                    // }}

                />
            </View>
        </SafeAreaView>
    )
}

export {Login};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputContainer: {
        backgroundColor: '#eceff1',
        borderRadius: 5,
        marginVertical: 30,
        width: Dimensions.get('window').width / 1.5,
        paddingLeft: 10
    },

})