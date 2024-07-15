import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Dimensions, Alert } from 'react-native';

const { width, height } = Dimensions.get('screen');

const Game = () => {
    const [selectedLetters, setSelectedLetters] = useState(['', '', '', '', '']);
    const [availableLetters, setAvailableLetters] = useState(['L', 'W', 'O', 'C', 'N']);
    const correctWord = 'CLOWN';

    const handleLetterClick = (letter) => {
        const index = selectedLetters.indexOf('');
        if (index !== -1) {
            const newSelectedLetters = [...selectedLetters];
            newSelectedLetters[index] = letter;
            setSelectedLetters(newSelectedLetters);

            const newAvailableLetters = availableLetters.filter((l) => l !== letter);
            setAvailableLetters(newAvailableLetters);
        }
    };

    useEffect(() => {
        if (selectedLetters.every(letter => letter !== '')) {
            checkWord();
        }
    }, [selectedLetters]);

    const checkWord = () => {
        if (selectedLetters.join('') === correctWord) {
            console.log('Correct!', 'You have spelled the word correctly!');
        } else {
            console.log('Try Again', 'The word is not correct. Try again!');
            resetGame();
        }
    };

    const resetGame = () => {
        setSelectedLetters(['', '', '', '', '']);
        setAvailableLetters(['L', 'W', 'O', 'C', 'N']);
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
                    {availableLetters.map((letter, index) => (
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
    },
    header: {
        paddingTop: 40,
        paddingBottom: 20,
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
    },
    gameContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageContainer: {
        marginBottom: 20,
    },
    clownImage: {
        fontSize: 64,
    },
    letterBoxes: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    letterBox: {
        width: 60,
        height: 60,
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#203e4a',
        borderRadius: 10,
    },
    letterText: {
        fontSize: 24,
        color: 'white',
    },
    letters: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    letterButton: {
        width: 60,
        height: 60,
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#3b6978',
        borderRadius: 10,
    }
});

export default Game;
