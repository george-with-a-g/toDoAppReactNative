import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        width: '100%'
    },
    title: {
        marginTop: 24,
        fontWeight: 'bold',
        fontSize: 30,
        marginBottom: 2,
    },
    titleContainer: {
        flexDirection: 'row'
    },
    subtitleHighlight: {
        color: '#4e46e5'
    },
    buttonWrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingVertical: 8
    },
    button: {
        backgroundColor: '#3d28de',
        paddingVertical: 4,
        paddingHorizontal: 8,
        borderRadius: 6,
        color: 'white'
    },
    buttonFaded:{
        paddingVertical: 4,
        paddingHorizontal: 8,
        borderRadius: 6,
        borderWidth: 1,
        color: 'black'
    },
    button1: {
        marginRight: 6
    },
    button2: {
        //marginLeft: 6
    }
})

export default styles;
