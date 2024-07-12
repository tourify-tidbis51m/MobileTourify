import { View, Text, StyleSheet } from 'react-native'

const Museum = () => {

    return (
        <View style={styles.container}>
            <Text>Museum</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Museum
