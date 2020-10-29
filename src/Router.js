// In App.js in a new project

import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import { initialState, reducer } from './context';

import WelcomePage from './pages/WelcomePage';
import Login from './pages/Login';


const store = createStore(reducer, initialState);

const Stack = createStackNavigator();

function Router() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name="Login Page"
                        component={Login}
                    />
                    <Stack.Screen
                        name='Welcome Page'
                        component={WelcomePage}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
}

export default Router;