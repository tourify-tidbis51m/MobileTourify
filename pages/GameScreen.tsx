import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Dimensions } from 'react-native';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const Game = () => {
    const [selectedLetters, setSelectedLetters] = useState(['', '', '', '', '']);
    const letters = ['L', 'W', 'O', 'C', 'N'];

    const handleLetterClick = (letter) => {
        const index = selectedLetters.indexOf('');
        if (index !== -1) {
            const newSelectedLetters = [...selectedLetters];
            newSelectedLetters[index] = letter;
            setSelectedLetters(newSelectedLetters);
        }
    };

    return (
        <View style={styles.background}>
            <View style={styles.header}>
                <Text style={styles.title}>Letter Puzzle Game</Text>
            </View>
            <View style={styles.gameContainer}>
                <View style={styles.imageContainer}>
                    <Text style={styles.clownImage}>🤡</Text>
                </View>
                <View style={styles.letterBoxes}>
                    {selectedLetters.map((letter, index) => (
                        <View key={index} style={styles.letterBox}>
                            <Text style={styles.letterText}>{letter}</Text>
                        </View>
                    ))}
                </View>
                <View style={styles.letters}>
                    {letters.map((letter, index) => (
                        <TouchableOpacity
                            key={index}
                            style={styles.letterButton}
                            onPress={() => handleLetterClick(letter)}
                        >
                            <Text style={styles.letterText}>{letter}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#0D1B2A',
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        marginBottom: 20,
    },
    title: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
    },
    gameContainer: {
        width: width * 0.8,
        height: height * 0.6,
        position: 'relative',
        backgroundColor: '#203e4a',
        borderRadius: 10,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageContainer: {
        marginBottom: 20,
    },
    clownImage: {
        fontSize: 100,
    },
    letterBoxes: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    letterBox: {
        borderWidth: 2,
        borderColor: 'white',
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 5,
    },
    letterText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
    letters: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
    },
    letterButton: {
        backgroundColor: '#203e4a',
        padding: 10,
        margin: 5,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Game;
