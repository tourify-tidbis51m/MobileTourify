import { useState, useRef } from 'react';
import { Animated } from 'react-native';

export const useRegisterScreenHooks = () => {
    const [name, setName] = useState('');
    const [nameVerify, setNameVerify] = useState(false);
    const [nameError, setNameError] = useState('');
    const [email, setEmail] = useState('');
    const [emailVerify, setEmailVerify] = useState(false);
    const [emailError, setEmailError] = useState('');
    const [password, setPassword] = useState('');
    const [passwordVerify, setPasswordVerify] = useState(false);
    const [passwordError, setPasswordError] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [passwordConfirmVerify, setPasswordConfirmVerify] = useState(false);
    const [passwordConfirmError, setPasswordConfirmError] = useState('');
    
    const scaleAnim = useRef(new Animated.Value(1)).current;

    const handleName = (e) => {
        const nameVar = e.nativeEvent.text;
        setName(nameVar);
        setNameVerify(false);
        setNameError('');

        const regex = /\d/;
        if (regex.test(nameVar)) {
        setNameError('El nombre contiene números.');
        } else if (nameVar.length > 1) {
        setNameVerify(true);
        }
    };

    const handleEmail = (e) => {
        const emailVar = e.nativeEvent.text;
        setEmail(emailVar);
        setEmailVerify(false);
        setEmailError('');

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailVar)) {
        setEmailError('El correo no es válido.');
        } else if (emailVar.length > 1) {
        setEmailVerify(true);
        }
    };

    const handlePassword = (e) => {
        const passwordVar = e.nativeEvent.text;
        setPassword(passwordVar);
        setPasswordVerify(false);
        setPasswordError('');

        if (passwordVar.length < 6) {
        setPasswordError('La contraseña debe tener al menos 6 caracteres.');
        } else if (passwordVar.length > 1) {
        setPasswordVerify(true);
        }
    };

    const handlePasswordConfirm = (e) => {
        const passwordConfirmVar = e.nativeEvent.text;
        setPasswordConfirm(passwordConfirmVar);
        setPasswordConfirmVerify(false);
        setPasswordConfirmError('');

        if (passwordConfirmVar !== password) {
        setPasswordConfirmError('Las contraseñas no coinciden.');
        } else if (passwordConfirmVar.length > 1) {
        setPasswordConfirmVerify(true);
        }
    };

    const isFormValid = () => {
        return (
        nameVerify &&
        emailVerify &&
        passwordVerify &&
        passwordConfirmVerify &&
        !nameError &&
        !emailError &&
        !passwordError &&
        !passwordConfirmError
        );
    };

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
        name,
        email,
        password,
        passwordConfirm,
        nameError,
        emailError,
        passwordError,
        passwordConfirmError,
        scaleAnim,
        handleName,
        handleEmail,
        handlePassword,
        handlePasswordConfirm,
        isFormValid,
        handlePressIn,
        handlePressOut,
    };
};
