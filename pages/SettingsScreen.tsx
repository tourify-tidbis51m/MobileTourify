import { View, Text, StyleSheet } from 'react-native'

const Settings = () => {
    return (
        <View style={styles.background}>
            <Text style={styles.text}>Settings</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'repeat',
        backgroundColor: '#0D1B2A',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
    },
});

export default Settings