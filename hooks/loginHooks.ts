import { useRef, useState } from 'react';
import { Animated } from 'react-native';

export const useLoginHooks = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const scaleAnim = useRef(new Animated.Value(1)).current;

    const handlePressIn = () => {
        Animated.spring(scaleAnim, {
            toValue: 0.95,
            useNativeDriver: true,
        }).start();
    };

    const handlePressOut = () => {
        Animated.spring(scaleAnim, {
            toValue: 1,
            useNativeDriver: true,
        }).start();
    };

    return {
        email,
        setEmail,
        password,
        setPassword,
        handlePressIn,
        handlePressOut,
        scaleAnim,
    };
};
