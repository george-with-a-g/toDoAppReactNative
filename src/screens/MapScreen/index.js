import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';//this will navigate the app from screen to screen
import { useState, useEffect } from 'react';
import styles from './style';//styles for this screen.

const MapScreen = () => {
    const navigation = useNavigation();
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Map Screen</Text>
        </View>
    )
}
export default MapScreen
