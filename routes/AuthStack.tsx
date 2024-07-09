    import React from 'react';
    import { createNativeStackNavigator } from '@react-navigation/native-stack';
    import LoginScreen from '../pages/LoginScreen';
    import SplashScreen from '../pages/SplashScreen';
    import RegisterScreen from '../pages/RegisterScreen';

    const Stack = createNativeStackNavigator();

    function AuthStack() {
        return (
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen 
                    name="Splash" 
                    component={SplashScreen} />
                <Stack.Screen 
                    name="Login" 
                    component={LoginScreen} />
                <Stack.Screen 
                    name="Register" 
                    component={RegisterScreen} />
            </Stack.Navigator>
        );
    }

    export default AuthStack;
