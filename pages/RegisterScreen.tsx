import React from 'react';
import { Image, StyleSheet, Dimensions, ImageBackground } from 'react-native';
import RegisterForm from '../components/RegisterForm';

const { width, height } = Dimensions.get('window');
const RegisterScreen = ({ navigation }) => {
  return (
    <ImageBackground style={styles.background}>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
        <RegisterForm />
    </ImageBackground>
);
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'repeat',
    backgroundColor: '#151E3D',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    width: width,
    height: height,

},
logo: {
    width: width * .4,
    height: height * .4,
    resizeMode: 'center',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    top: "-4%", 
},
});


export default RegisterScreen;
