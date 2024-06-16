import React, { useRef } from 'react';
import { StyleSheet, View, useWindowDimensions, Text, TouchableOpacity, Animated } from 'react-native';
import NavBar from '../components/navbar';

// lo comentado pertenece al carrucel puto


// import Carousel from 'react-native-snap-carousel';

const MainMenu = ({ navigation }) => {

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
  

    // const renderItem = ({ item }) => {
    //     return (
    //         <View style={styles.carouselItem}>
    //             <Image source={item.image} style={styles.carouselImage} />
    //         </View>
    //     );
    // };

    // const data = [
    //     { image: require('../assets/image1.jpg') },
    //     { image: require('../assets/image2.jpg') },
    //     { image: require('../assets/image3.jpg') },
    // ];

    // const windowWidth = useWindowDimensions().width;

    return (
        <View style={styles.background}>
            <NavBar />
            <View style={styles.content}>

                {/* <Carousel
                    data={data}
                    renderItem={renderItem}
                    sliderWidth={windowWidth} // Ancho del carrusel basado en el ancho de la ventana
                    itemWidth={250}           // Ancho de cada item en píxeles
                /> */}

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
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'repeat',
        backgroundColor: '#151E3D',
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 120, 
    },
    carouselItem: {
        width: 250,
        height: 250,
        justifyContent: 'center',
        alignItems: 'center',
    },
    carouselImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    Phrase: {
        color: "white",
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center",
    },
    Text: {
        color: "gray",
        fontSize: 20,
        textAlign: "center",
        margin: 20,
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: "bold",
      },
    buttonContainer: {
        borderRadius: 5,
        overflow: 'hidden',
        top: 5,
      },
    buttonStart: {
        backgroundColor: '#004DFF',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        alignItems: 'center',
      },
});

export default MainMenu;
