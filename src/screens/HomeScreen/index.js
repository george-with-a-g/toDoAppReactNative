import Geolocation from '@react-native-community/geolocation';
import { View, Text, TouchableOpacity, PermissionAndroid, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';//this will navigate the app from screen to screen
import { useAuthContext } from '../../contexts';
import { useState, useEffect } from 'react';
import styles from './style';//styles for this screen.

const HomeScreen = () => {
    const navigation = useNavigation();
    const { setUserLocation, retrieveTaskData, setAllTasks, clearTaskData, allTasks } = useAuthContext();

    useEffect(() => {
        retrieveTaskData(setAllTasks);
    }, []);

    //get location Permission and location details.
    const [errorMsg, setErrorMsg] = useState(null);
    useEffect(() => {
        const requestLocation = async () => {
            try{
                Geolocation.getCurrentPosition(info => setUserLocation(info));
            } catch(err){
                console.warn(err);
            }
        };
        requestLocation();
    }, [])
    /*
    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }
            let location = await Location.getCurrentPositionAsync({});
            setUserLocation(location);
        })();
    }, []);
    */

    //function takes to the create task screen
    const goCreateTask = () => {navigation.navigate('CreateTaskScreen')}
    //function takes to the view task screen
    const goViewTasks = () => {navigation.navigate('ViewTasks')}
    // function to clear existing tasks
    const goClearTasks = (allTasks, setAllTasks) => {
        clearTaskData(allTasks, setAllTasks);
    }

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Task Manager</Text>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={goCreateTask}>
                    <Text style={styles.buttonText}>
                        Create Task
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={goViewTasks}>
                    <Text style={styles.buttonText}>
                        View Task
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => goClearTasks(allTasks, setAllTasks)}>
                    <Text style={styles.buttonText}>
                        Clear Task
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default HomeScreen
