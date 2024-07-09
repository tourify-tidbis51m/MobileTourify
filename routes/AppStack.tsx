import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { View, StyleSheet } from 'react-native';
import NavBar from '../components/navbar';
//Importación de paginas pa que se puedan navegar entre ellas
import MainMenuScreen from '../pages/MainMenuScreen';
import MapScreen from '../pages/MapScreen';
import ProfileScreen from '../pages/ProfileScreen';
import Events from '../pages/EventsScreen';
import Game from '../pages/GameScreen';

const Stack = createNativeStackNavigator();

function AppStack() {
    return (
        <View style={styles.container}>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen 
                    name="Home" 
                    component={MainMenuScreen} 
                />
                <Stack.Screen
                    name="Map"
                    component={MapScreen} 
                />
                <Stack.Screen
                    name="Profile"
                    component={ProfileScreen}
                />
                <Stack.Screen
                    name="Events"
                    component={Events}
                />
                <Stack.Screen
                    name="Game"
                    component={Game}
                />
                <Stack.Screen
                    name="Places"
                    component={Places}
                />

            </Stack.Navigator>
            <NavBar />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default AppStack;