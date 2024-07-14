import React, { useRef } from 'react';
import Carousel from 'react-native-reanimated-carousel';
import { StyleSheet, View, Text, TouchableOpacity, Animated, Dimensions, Image } from 'react-native';
import TitleButton from '../components/titlebutton'; 
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const MainMenu = ({ navigation }) => {

    // Array de importaciones de imágenes locales
    const imagePaths = [
        image1,
        image2,
        image3,
    ];

    // La animación del botón
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
        navigation.navigate('Map')
    };

    return (
        <View style={styles.background}>
            <TitleButton/>
            <View style={styles.content}>
                <Carousel
                    loop
                    width={width * 0.9} // Responsive width
                    height={width / 2} // Adjust height relative to width
                    autoPlay={true}
                    autoPlayInterval={2000}
                    data={imagePaths}
                    scrollAnimationDuration={1000}
                    panGestureHandlerProps={{
                        activeOffsetX: [-10, 10],
                    }}
                    renderItem={({ item }) => (
                        <View style={styles.carouselItem}>
                            <Image source={item} style={styles.carouselImage} />
                        </View>
                    )}
                />
                <View style={styles.textContainer}>
                    <Text style={styles.Phrase}>"Descubre la magia de cada destino."</Text>
                    <Text style={styles.Text}>Explora lo inexplorado, experimenta lo extraordinario y deja que tus viajes se conviertan en el lienzo de tu historia única</Text>            
                    <TouchableOpacity
                        onPressIn={handlePressIn}
                        onPressOut={handlePressOut}
                        style={styles.buttonContainer}
                    >
                        <Animated.View style={[styles.buttonStart, { transform: [{ scale: scaleAnim }] }]}>
                            <Text style={styles.buttonText}>Explorar ahora →</Text>
                        </Animated.View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'repeat',
        backgroundColor: '#0D1B2A',
    },
    content: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: height * 0.1, // Responsive top margin
    },
    carouselItem: {
        flex: 1,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        overflow: 'hidden',
        marginHorizontal: width * 0.0025, // Responsive horizontal margin
    },
    carouselImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    textContainer: {
        height: height * 0.4,
        width: width * 0.8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    Phrase: {
        color: "white",
        fontSize: width * 0.08, // Responsive font size
        fontWeight: "bold",
        textAlign: "center",
        marginTop: height * 0.02, // Responsive top margin
    },
    Text: {
        color: "gray",
        fontSize: width * 0.05, // Responsive font size
        textAlign: "center",
        margin: height * 0.02, // Responsive margin
    },
    buttonText: {
        color: 'white',
        fontSize: width * 0.05, // Responsive font size
        fontWeight: "bold",
    },
    buttonContainer: {
        borderRadius: 5,
        overflow: 'hidden',
        marginTop: height * 0.02, // Responsive top margin
    },
    buttonStart: {
        backgroundColor: '#203e4a',
        paddingVertical: height * 0.015, // Responsive vertical padding
        paddingHorizontal: width * 0.1, // Responsive horizontal padding
        borderRadius: 5,
        alignItems: 'center',
    },
});

export default MainMenu;
