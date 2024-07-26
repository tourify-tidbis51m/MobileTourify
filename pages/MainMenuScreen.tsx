import React from 'react';
import Carousel from 'react-native-reanimated-carousel';
import { StyleSheet, View, Text, TouchableOpacity, Animated, Dimensions, Image } from 'react-native';
import TitleButton from '../components/titlebutton'; 
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';
import { useMainMenuHooks } from '../hooks/mainHooks';

const { width, height } = Dimensions.get('window');

const MainMenu = ({ navigation }) => {
    const imagePaths = [image1, image2, image3];
    const { scaleAnim, handlePressIn, handlePressOut } = useMainMenuHooks(navigation);

    return (
        <View style={styles.background}>
            <TitleButton />
            <View style={styles.content}>
                <Carousel
                    style={styles.carousel}
                    loop
                    width={width * 0.9}
                    height={width * 0.5}
                    autoPlay
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
                    <Text style={styles.phrase}>"Descubre la magia de cada destino."</Text>
                    <Text style={styles.text}>
                        Explora lo inexplorado, experimenta lo extraordinario y deja que tus viajes se conviertan en el lienzo de tu historia única
                    </Text>            
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
        backgroundColor: '#0D1B2A',
    },
    content: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        marginTop: height * 0.15,
    },
    carousel: {
        marginVertical: height * 0.02,
    },
    carouselItem: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        overflow: 'hidden',
    },
    carouselImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    textContainer: {
        width: '80%',
        alignItems: 'center',
        marginTop: height * 0.02,
        paddingHorizontal: width * 0.05,
    },
    phrase: {
        color: "white",
        fontSize: width * 0.06,
        fontWeight: "bold",
        textAlign: "center",
        marginTop: height * 0.02,
    },
    text: {
        color: "gray",
        fontSize: width * 0.04,
        textAlign: "center",
        marginVertical: height * 0.02,
    },
    buttonText: {
        color: 'white',
        fontSize: width * 0.05,
        fontWeight: "bold",
    },
    buttonContainer: {
        borderRadius: 5,
        overflow: 'hidden',
        marginTop: height * 0.02,
    },
    buttonStart: {
        backgroundColor: '#203e4a',
        paddingVertical: height * 0.015,
        paddingHorizontal: width * 0.1,
        borderRadius: 5,
        alignItems: 'center',
    },
});

export default MainMenu;
