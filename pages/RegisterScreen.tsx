import React, { useRef } from 'react';
import { Image, Dimensions, ImageBackground, Animated, TextInput, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');
const RegisterScreen = ({ navigation }) => {

  //Constantes que uso principalmente para controlar las validaciones
  const [name, setName] = useState('');
  const [nameVerify, setNameVerify] = useState(false);
  const [nameError, setNameError] = useState('');
  const [email, setEmail] = useState('');
  const [emailVerify, setEmailVerify] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVerify, setPasswordVerify] = useState(false);
  const [passwordError, setPasswordError] = useState('');

  //Animaciones
  const scaleAnim = useRef(new Animated.Value(1)).current;

  //Funciones de validaciones
  function handleName(e) {
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
  }

  function handleEmail(e) {
    const emailVar = e.nativeEvent.text;
    setEmail(emailVar);
    setEmailVerify(false);
    setEmailError('');

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // ^: esto indica el inicio del string
    // [^\s@]: Los corchetes indican lo q se permite, el ^ indica cualquier caracter que no este en el conjunto
    // \s indica cualquier caracter de espacio en blanco
    // @: indica que el string debe contener un arroba
    // [^\s@]+\.[^\s@]+: indica que el string no debe contener espacios ni caracteres de signo de puntuacion y debe contener un punto seguido de una cadena de caracteres
    // $: esto indica el final del string
    //Nmms tuve q buscar que significaba cada uno pq si no ni de pedo se q significan JAJAJJAJA
    if (!emailRegex.test(emailVar)) {
      setEmailError('El correo no es válido.');
    } else if (emailVar.length > 1) {
      setEmailVerify(true);
    }
  }

  function handlePassword(e) {
    const passwordVar = e.nativeEvent.text;
    setPassword(passwordVar);
    setPasswordVerify(false);
    setPasswordError('');

    if (passwordVar.length < 6) {
      setPasswordError('La contraseña debe tener al menos 6 caracteres.');
    } else if (passwordVar.length > 1) {
      setPasswordVerify(true);
    }
  }

  //Funcion para validar el formulario
  const isFormValid = () => {
    return nameVerify && emailVerify && passwordVerify && !nameError && !emailError && !passwordError;
  }

  //Funciones de animaciones
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

  //Renderizado
  return (
    <ImageBackground style={styles.background}>
      <Image source={require('../assets/logo.png')} style={styles.logo} />
      <View style={styles.container}>
        <Text style={styles.labelTitle}>TOURIFY</Text>
        
        <Text style={styles.label}>Ingresa tu nombre:</Text>
        <View style={styles.inputContainer}>
          <TextInput 
            style={styles.input} 
            placeholder="Nombre" 
            placeholderTextColor="#B0B0B0"
            onChange={handleName}
          />
          {name.length >= 1 && !nameError && (
            <MaterialIcons 
              name="check-circle" 
              size={40} 
              color="green" 
              style={styles.icon} 
            />
          )}
          {nameError && (
            <MaterialIcons 
              name="error" 
              size={40} 
              color="red" 
              style={styles.icon} 
            />
          )}
        </View>
        {nameError && (
          <Text
            style={{
              marginLeft: 20,
              color: 'red',
              bottom: 10,
            }}>
            {nameError}
          </Text>
        )}

        <Text style={styles.label}>Ingresa tu correo:</Text>
        <View style={styles.inputContainer}>
          <TextInput 
            style={styles.input} 
            placeholder="Correo" 
            placeholderTextColor="#B0B0B0"
            onChange={handleEmail}
          />
          {email.length >= 1 && !emailError && (
            <MaterialIcons
              name="check-circle"
              size={40}
              color="green"
              style={styles.icon}
            />
          )}
          {emailError && (
            <MaterialIcons
              name="error"
              size={40}
              color="red"
              style={styles.icon}
            />
          )}
        </View>
        {emailError && (
          <Text
            style={{
              marginLeft: 20,
              color: 'red',
              bottom: 10,
            }}>
            {emailError}
          </Text>
        )}

        <Text style={styles.label}>Ingresa tu contraseña:</Text>
        <View style={styles.inputContainer}>
          <TextInput 
            style={styles.input} 
            placeholder="Contraseña" 
            placeholderTextColor="#B0B0B0" 
            secureTextEntry 
            onChange={handlePassword}
          />
          {password.length >= 1 && !passwordError && (
            <MaterialIcons
              name="check-circle"
              size={40}
              color="green"
              style={styles.icon}
            />
          )}
          {passwordError && (
            <MaterialIcons
              name="error"
              size={40}
              color="red"
              style={styles.icon}
            />
          )}
        </View>
        {passwordError && (
          <Text
            style={{
              marginLeft: 20,
              color: 'red',
              bottom: 10,
            }}>
            {passwordError}
            </Text>
        )}
        
        <TouchableOpacity
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
          style={styles.buttonContainer}
          disabled={!isFormValid()}
        >
          <Animated.View style={[styles.button, { transform: [{ scale: scaleAnim }] }]}>
            <Text style={styles.buttonText}>REGISTRARSE</Text>
          </Animated.View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Login');
          }}
          style={styles.buttonContainer}
        >
          <Animated.View style={[styles.buttonSecondary, { transform: [{ scale: scaleAnim }] }]}>
            <Text style={styles.buttonText}>¿Ya tienes una cuenta?</Text>
          </Animated.View>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    backgroundColor: '#0D1B2A',
    justifyContent: 'center',
    alignItems: 'center',
    width: width,
    height: height,
  },
  logo: {
    width: width * 0.3,
    height: height * 0.2,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  container: {
    backgroundColor: '#E0E1DD',
    padding: 20,
    borderRadius: 10,
    width: '90%',
    alignItems: 'center',
  },
  labelTitle: {
    color: '#1B263B',
    fontWeight: 'bold',
    fontSize: 36,
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: '#1B263B',
    marginBottom: 10,
    alignSelf: 'flex-start',
  },
  input: {
    height: 40,
    borderColor: '#415A77',
    borderBottomWidth: 1,
    marginBottom: 5,
    paddingHorizontal: 10,
    width: '100%',
    color: '#1B263B',
  },
  buttonContainer: {
    width: '100%',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#1B263B',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonSecondary: {
    backgroundColor: '#203e4a',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#E0E1DD',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    width: '100%',
  },
  icon: {
    marginLeft: 10,
    marginBottom: 20,
  }
});

export default RegisterScreen;
