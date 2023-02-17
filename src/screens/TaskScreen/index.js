import { View, Image, Text, TouchableOpacity, Button, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';//this will navigate the app from screen to screen
import { Checkbox } from 'react-native-paper';
import { useState } from 'react';
import styles from './style';//styles for this screen.
import { useAuthContext } from '../../contexts'; 

const TaskScreen  = ({route}) => {
    const navigation = useNavigation();
    const { setUserLocation, allTasks, setAllTasks, userLocation } = useAuthContext();

    const [checked, setChecked] = useState(route.params.complete);
    const [creationLocation, setCreationLocation] = useState(route.params.locationInfo);
    const [completionLocation, setCompletionLocation] = useState(route.params.locationInfoClose);
    const modifyCompletionStatus = () => {
        setChecked(!checked);
        //location is tracked so it will also track location on closing the task.
        if (route.params.locationInfo){
            setAllTasks(prevState => prevState.map(item => {
                if (item.key === route.params.id) {
                    return {
                        ...item,
                        complete: true,
                        locationInfoClose: userLocation
                    };
                }
                return item;
            }));
        }else{
            setAllTasks(prevState => prevState.map(item => {
                if (item.key === route.params.id) {
                    return {
                        ...item,
                        complete: true
                    };
                }
                return item;
            }));
        }
    }
    
    //used for going to map screen to view location task opened at
    const goToMapScreen = () => {
        navigation.navigate('MapScreen', {
            locationInfo: route.params.locationInfo
        });
    }
    //used for going to map screen to view location task closed at
    const goToMapScreenClosed = () => {
        navigation.navigate('MapScreen', {
            locationInfo: route.params.locationInfoClose
        });
    }
    return(
        <View style={styles.container}>
            <Text style={styles.title}>{route.params.title}</Text>
            <View style={styles.taskContainer}>
                <Text style={styles.description}>Description</Text>
                <Text>{route.params.description}</Text>
            </View>
            <View style={styles.checkBoxContainer}>
                <Checkbox
                    status={ checked ? 'checked' : 'unchecked' }
                    onPress={ modifyCompletionStatus }
                />
                { checked ? (
                    <Text>The task is complete</Text>
                ) : ( 
                    <Text>The task is incomplete</Text>
                )}
            </View>
            <View style={{ width: '100%', paddingHorizontal: '5%' }}>
                <Text style={{ fontWeight: 'bold' }}>Note </Text>
            </View>
            { route.params.locationInfo ? (
                <View style={{ width: '100%', paddingHorizontal: '5%' }}>
                    <Text style={{ color: '#4e46e5' }} onPress={goToMapScreen}>Location when task was created.</Text>
                </View>
                ) : (
                <View style={{ width: '100%', paddingHorizontal: '5%' }}>
                    <Text>Location was not recorded when task was created.</Text>
                    <Text>Location will not be recorded when task is completed.</Text>
                </View>
                )
            }
            { route.params.locationInfo && checked ? (
                <View style={{ width: '100%', paddingHorizontal: '5%' }}>
                    <Text style={{ color: '#4e46e5' }} onPress={goToMapScreen}>Location when task was completed.</Text>
                </View>
                ) : (
                <View style={{ width: '100%', paddingHorizontal: '5%' }}>
                </View>
                )
            }
        </View>
    )
}
export default TaskScreen
