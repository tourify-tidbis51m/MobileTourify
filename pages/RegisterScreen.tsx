import React, { useRef } from 'react';
import { Image, Dimensions, ImageBackground, Animated, TextInput, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const { width, height } = Dimensions.get('window');
const RegisterScreen = ({ navigation }) => {

  const scaleAnim = useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  return (
    <ImageBackground style={styles.background}>
      <Image source={require('../assets/logo.png')} style={styles.logo} />
      <View style={styles.container}>
        <Text style={styles.labelTitle}>TOURIFY</Text>
        <Text style={styles.label}>Ingresa tu nombre:</Text>
        <TextInput style={styles.input} />
        <Text style={styles.label}>Ingresa tu correo:</Text>
        <TextInput style={styles.input} />
        <Text style={styles.label}>Ingresa tu contraseña:</Text>
        <TextInput style={styles.input} secureTextEntry />
        <TouchableOpacity
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
          style={styles.buttonContainer}
        >
          <Animated.View style={[styles.button, { transform: [{ scale: scaleAnim }] }]}>
            <Text style={styles.buttonText}>REGISTRARSE</Text>
          </Animated.View>
        </TouchableOpacity>
        <TouchableOpacity
          onPressIn={handlePressIn}
          onPress={() => {
          navigation.navigate('Login');
        }}
                style={styles.buttonContainer}
            >
                <Animated.View style={[styles.buttonRegister, { transform: [{ scale: scaleAnim }] }]}>
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
container: {
  backgroundColor: '#F6F4F7',
  padding: 20,
  borderRadius: 10,
  color: 'black',
  gap: 16,
  height: '66%',
  width: '100%',
  position: 'absolute',
  bottom: 0,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center'
},
label: {
  fontSize: 23,
  marginBottom: -20,
  alignItems: 'center',
  justifyContent: 'center',
  display: 'flex',
  flexDirection: 'column',
  fontFamily: 'system-ui',
  fontWeight: 'bold',
  top: -30
},
input: {
  height: 40,
  borderColor: 'gray',
  marginBottom: 40,
  paddingHorizontal: 10,
  borderBottomWidth: 3,
},
button: {
  backgroundColor: 'blue',
  paddingVertical: 10,
  paddingHorizontal: 20,
  borderRadius: 5,
  alignItems: 'center',
},
buttonRegister: {
  backgroundColor: '#3B05FF',
  paddingVertical: 10,
  paddingHorizontal: 20,
  borderRadius: 5,
  alignItems: 'center',
},
buttonText: {
  color: 'white',
  fontWeight: 'bold',
  fontFamily: 'Sans-Serif, Lucida Sans',
  fontSize: 20,
},
buttonContainer: {
  borderRadius: 5,
  overflow: 'hidden',
  top: -22
},
labelTitle: {
  color: 'blue',
  fontWeight: 'bold',
  fontFamily: 'Sans-Serif, Lucida Sans',
  fontSize: 50,
  justifyContent: 'center',
  display: 'flex',
  top: -40,
  bottom: 10
}
});


export default RegisterScreen;
