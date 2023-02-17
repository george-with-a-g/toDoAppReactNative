import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: { 
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 8,
        paddingHorizontal: 12,
        width: '100%',
        borderBottomWidth: 1,
    },
    title: {
        width: '30%',
        fontWeight: 'bold',
        paddingHorizontal: 4
    },
    description: {
        width: '60%'
    },
    icon: {
        width: '10%',
        marginLeft: 4
    }
})
export default styles
