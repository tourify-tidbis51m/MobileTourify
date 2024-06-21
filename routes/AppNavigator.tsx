import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../pages/SplashScreen';
import LoginScreen from '../pages/LoginScreen';
import RegisterScreen from '../pages/RegisterScreen';
import MainMenuScreen from '../pages/MainMenuScreen';
import 'react-native-gesture-handler';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen 
                    name="Splash" 
                    component={SplashScreen} 
                />
                <Stack.Screen 
                    name="Login" 
                    component={LoginScreen} 
                />
                <Stack.Screen 
                    name="Register" 
                    component={RegisterScreen} 
                />
                <Stack.Screen 
                    name="MainMenu" 
                    component={MainMenuScreen} 
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;

