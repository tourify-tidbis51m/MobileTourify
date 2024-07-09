import { StyleSheet, Text, View, Dimensions } from 'react-native';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const Places = () => {
    const places = [
        {id: 1, name: '', shortDescription: '', description: '', image: '', video: 'https://www.youtube.com/watch?v=fPyAklAUknM'},
    ]


}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'repeat',
        backgroundColor: '#0D1B2A',
    },
})
export default Places;