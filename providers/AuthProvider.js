import React, { createContext, useEffect, useState } from "react";
import authService from '../services/authService';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthContext = createContext({});

function AuthProvider({ children }) {
    const [user, setUser] = useState(undefined);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadStorageData();
    }, []);

    async function loadStorageData() {
        try {
        setLoading(true);

        const authDataSerialize = await AsyncStorage.getItem('@authData');

        if (authDataSerialize) {
            const _authData = JSON.parse(authDataSerialize);
            setUser(_authData);
        }

        } catch (error) {
        console.log("Fail storage data", error);

        } finally {
        setLoading(false);
        }
    }

    async function login(email, password) {
        setLoading(true);
        const _user = await authService.login(email, password);

        setUser(_user);
        if (_user) {
        await AsyncStorage.setItem("@authData", JSON.stringify(_user));
        console.log({ _user });
        }

        setLoading(false);
    }

    async function register(name, email, password) {
        setLoading(true);
        const _user = await authService.register(name, email, password);

        setUser(_user);
        if (_user) {
            await AsyncStorage.setItem("@authData", JSON.stringify(_user));
            console.log({ _user });
        }

        setLoading(false);
    }

    async function logout(email, password) {
        setLoading(true);

        await AsyncStorage.removeItem("@authData");

        setUser(undefined);

        setLoading(false);
    }

    return (
        <AuthContext.Provider value={{ user, loading, register, login, logout }}>
        {children}
        </AuthContext.Provider>
    );
}

export { AuthContext, AuthProvider };
