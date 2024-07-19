import React, { useContext } from 'react';
import { Image, Dimensions, Animated, TextInput, StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { AuthContext } from '../providers/AuthProvider';
import { useRegisterScreenHooks } from '../hooks/registerHooks';

const { width } = Dimensions.get('window');

const RegisterScreen = ({ navigation }) => {
  const {
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
  } = useRegisterScreenHooks();

  const { register } = useContext(AuthContext);

  const handleRegister = async () => {
    await register(name, email, password);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.logoContainer}>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
      </View>
      <View style={styles.container}>
        <Text style={styles.labelTitle}>TOURIFY</Text>

        <Text style={styles.label}>Ingresa tu nombre:</Text>
        <View style={styles.inputWrapper}>
          <TextInput 
            style={styles.input} 
            placeholder="Nombre" 
            placeholderTextColor="#B0B0B0"
            onChange={handleName}
            value={name}
          />
          <View style={styles.iconContainer}>
            {name.length >= 1 && !nameError && (
              <MaterialIcons 
                name="check-circle" 
                size={24} 
                color="green" 
              />
            )}
            {nameError && (
              <MaterialIcons 
                name="error" 
                size={24} 
                color="red" 
              />
            )}
          </View>
        </View>
        {nameError && (
          <Text style={styles.errorText}>{nameError}</Text>
        )}

        <Text style={styles.label}>Ingresa tu correo:</Text>
        <View style={styles.inputWrapper}>
          <TextInput 
            style={styles.input} 
            placeholder="Correo" 
            placeholderTextColor="#B0B0B0"
            onChange={handleEmail}
            value={email}
          />
          <View style={styles.iconContainer}>
            {email.length >= 1 && !emailError && (
              <MaterialIcons
                name="check-circle"
                size={24}
                color="green"
              />
            )}
            {emailError && (
              <MaterialIcons
                name="error"
                size={24}
                color="red"
              />
            )}
          </View>
        </View>
        {emailError && (
          <Text style={styles.errorText}>{emailError}</Text>
        )}

        <Text style={styles.label}>Ingresa tu contraseña:</Text>
        <View style={styles.inputWrapper}>
          <TextInput 
            style={styles.input} 
            placeholder="Contraseña" 
            placeholderTextColor="#B0B0B0" 
            secureTextEntry 
            onChange={handlePassword}
            value={password}
          />
          <View style={styles.iconContainer}>
            {password.length >= 1 && !passwordError && (
              <MaterialIcons
                name="check-circle"
                size={24}
                color="green"
              />
            )}
            {passwordError && (
              <MaterialIcons
                name="error"
                size={24}
                color="red"
              />
            )}
          </View>
        </View>
        {passwordError && (
          <Text style={styles.errorText}>{passwordError}</Text>
        )}

        <Text style={styles.label}>Repite tu contraseña:</Text>
        <View style={styles.inputWrapper}>
          <TextInput 
            style={styles.input} 
            placeholder="Contraseña repetida" 
            placeholderTextColor="#B0B0B0" 
            secureTextEntry 
            onChange={handlePasswordConfirm}
            value={passwordConfirm}
          />
          <View style={styles.iconContainer}>
            {passwordConfirm.length >= 1 && !passwordConfirmError && (
              <MaterialIcons
                name="check-circle"
                size={24}
                color="green"
              />
            )}
            {passwordConfirmError && (
              <MaterialIcons
                name="error"
                size={24}
                color="red"
              />
            )}
          </View>
        </View>
        {passwordConfirmError && (
          <Text style={styles.errorText}>{passwordConfirmError}</Text>
        )}

        <TouchableOpacity
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
          style={styles.buttonContainer}
          disabled={!isFormValid()}
          onPress={handleRegister}
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
            <Text style={styles.buttonTextSecondary}>¿Ya tienes una cuenta?</Text>
          </Animated.View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0D1B2A',
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  logo: {
    width: width * 0.4,
    height: width * 0.4,
    resizeMode: 'contain',
  },
  container: {
    width: '90%',
    maxWidth: 400,
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 20,
  },
  labelTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#0D1B2A',
    marginBottom: 20,
  },
  label: {
    color: '#1B263B',
    fontSize: 20,
    marginBottom: 10,
    alignSelf: 'flex-start',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 5,
  },
  input: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#7F7F7F',
    paddingHorizontal: 10,
    color: '#1B263B',
    marginBottom: 12,
    height: 30,
    fontSize: 18,
  },
  iconContainer: {
    justifyContent: 'center',
    marginLeft: 10,
    height: 50,
  },
  buttonContainer: {
    marginTop: 20,
    width: '100%',
  },
  button: {
    backgroundColor: '#1B263B',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonSecondary: {
    marginTop: 5,
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
    backgroundColor: 'transparent'
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 18,
  },
  buttonTextSecondary: {
    color: '#1B263B',
    fontWeight: 'bold',
    fontSize: 18,
  },
  errorText: {
    color: 'red',
    fontSize: 16,
    alignSelf: 'center',
    marginTop: -15,
  },
});

export default RegisterScreen;
