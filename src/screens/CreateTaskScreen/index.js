import { View, TextInput, Image, Text, TouchableOpacity, Button, PermissionAndroid, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';//this will navigate the app from screen to screen
import { useState, useEffect } from 'react';//manage state for TextInputs
import { Checkbox } from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from './style';//styles for this screen.
import { useAuthContext } from '../../contexts'; 
import Geolocation from '@react-native-community/geolocation';

const CreateTaskScreen = () => {
    const navigation = useNavigation();
    const [ value, setValue ] = useState('');//this will be used for getting the state of the task title
    const [ description, setDescription ] = useState('');//this will be used for getting the state of the task title
    const [checked, setChecked] = useState(true);//checkbox to track location.

    const { userLocation, setUserLocation, allTasks, setAllTasks, saveTaskData } = useAuthContext();

    //go to task screen
    const goViewTasks = () => {navigation.navigate('ViewTasks')}

    //get the latest key from all the tasks created by the user. Should be used to get the next possible key
    const mostRecentTaskKey = (allTasks) => {
        if (allTasks){
            try{
                let lastValue = allTasks[allTasks.length - 1];
                return lastValue.key;
            }
            catch (error){
                return '0';//no task created so the key would be one
            }
        }
        return '0';//no task created so the key would be one
    }

    const submitTask = (allTasks, setAllTasks) => {
        let newKey = mostRecentTaskKey(allTasks);
        newKey = parseInt(newKey) + 1;
        newKey = newKey.toString();
        if (checked){//user wants location tracked.
            const requestLocation = async () => {
                try{
                    Geolocation.getCurrentPosition(info => setUserLocation(info));
                    let newTaskData = {key: newKey, title: value, description: description, complete: false, locationInfo: userLocation, locationInfoClose: null };
                    if (allTasks === null){
                        setAllTasks([newTaskData]);
                    }
                    else{
                        allTasks.push(newTaskData);
                        setAllTasks(allTasks);
                    }
                } catch(err){
                    console.warn(err);
                }
            };
            requestLocation();
        }else{//user does not want location tracked.
            let newTaskData = {key: newKey, title: value, description: description, complete: false, locationInfo: null, locationInfoClose: null };
            if (allTasks === null){
                setAllTasks([newTaskData]);
            }
            else{
                allTasks.push(newTaskData);
                setAllTasks(allTasks);
            }
        }
        navigation.navigate('HomeScreen');
    }
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Create a task</Text>
            <View style={styles.titleContainer}>
                <Text style={styles.subtitle}>Or</Text>
                <Text onPress={goViewTasks} style={styles.subtitleHighlight}> view your existing tasks.</Text>
            </View>
            
            <View style={styles.formContainer}>
                <TextInput style={styles.formInput} placeholder="Task title" value={value} onChangeText={text => setValue(text)} />
                <TextInput style={styles.formBottomInput} placeholder="Task description" value={description} onChangeText={text => setDescription(text)} />
            </View>

            <View style={styles.checkBoxContainer}>
                <Checkbox
                    status={checked ? 'checked' : 'unchecked'}
                    onPress={() => setChecked(!checked)}
                />
                <Text style={styles.subtitle}>Track location</Text>
            </View>

            <TouchableOpacity style={styles.button} onPress={() => submitTask(allTasks, setAllTasks)}>
                <MaterialIcons name="note-add" size={16} color="white" />
                <Text style={styles.buttonText} >Submit</Text>
            </TouchableOpacity></View>
    )
}
export default CreateTaskScreen
