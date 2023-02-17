import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        width: '100%'
    },
    titleContainer: {
        flexDirection: 'row'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 30,
        marginBottom: 2,
        marginTop: 24
    },
    subtitleHighlight: {
        color: '#4e46e5'
    },
    formContainer: {
        width: '80%',
        marginTop: 32
    },
    formInput: {
        borderWidth: 1,
        borderRadius: 6,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        paddingHorizontal: 12,
        paddingVertical: 8,
        fontSize: 14,
        borderColor: '#d1d5db'
    },
    formBottomInput: {
        borderWidth: 1,
        borderRadius: 6,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        paddingHorizontal: 12,
        paddingVertical: 8,
        fontSize: 14,
        borderColor: '#d1d5db'
    },
    checkBoxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 16,
        width: '80%'
    },
    button: {
        //backgroundColor: '#4e46e5',
        backgroundColor: '#3d28de',
        flexDirection: 'row',
        width: '80%',
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 16
    },
    buttonText: {
        color: 'white',
    }
})

export default styles;
