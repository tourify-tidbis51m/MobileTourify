import { useRef } from 'react';
import { Animated } from 'react-native';

export const useMainMenuHooks = (navigation) => {
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
        navigation.navigate('Map');
    };

    return {
        scaleAnim,
        handlePressIn,
        handlePressOut,
    };
};
