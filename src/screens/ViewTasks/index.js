import { View, Image, Text, TouchableOpacity, Button, FlatList } from 'react-native';
import TaskComponent from '../../components/SingleTaskComponent';//importing the component for the tasks component
import { useNavigation } from '@react-navigation/native';//this will navigate the app from screen to screen
import { useAuthContext } from '../../contexts'; 
import { useState, useEffect } from 'react';
import styles from './style';//styles for this screen.

const ViewTaskScreen = () => {
    const navigation = useNavigation();
    const { setUserLocation, allTasks, setAllTasks, retrieveTaskData, saveTaskData } = useAuthContext();

    const [ tasks, setTasks ] = useState(allTasks);
    const [ showCompleteToggle, setShowCompleteToggle ] = useState('About');//state to show if user wants to see all tasks or filter to complete/incomplete.

    const goCreateTasks = () => {navigation.navigate('CreateTaskScreen')}
    //the function below will filter the list to show all tasks.
    const showAbout = () => {
        setTasks(allTasks);
        setShowCompleteToggle('About');
    }
    //the function below will filter the list to show all tasks.
    const showAllTasks = () => {
        setTasks(allTasks);
        setShowCompleteToggle('All');
    }
    //the function below will filter the list to show only tasks that are complete.
    const filterCompleteTasks = () => {
        if (allTasks){
            const filteredList = allTasks.filter((item) => item.complete );
            setTasks(filteredList);
            setShowCompleteToggle('Complete');
        }else{
            setShowCompleteToggle('Complete');
        }
    }
    //the function below will filter the list to show only tasks that are incomplete.
    const filterInCompleteTasks = () => {
        if (allTasks){
            const filteredListTwo = allTasks.filter((item) => item.complete === false );
            setTasks(filteredListTwo);
            setShowCompleteToggle('Incomplete');
        }else{
            setShowCompleteToggle('Incomplete');
        }
    }
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Your tasks</Text>
            <View style={styles.titleContainer}>
                <Text style={styles.subtitle}>Or</Text>
                <Text onPress={goCreateTasks} style={styles.subtitleHighlight}> create a new task.</Text>
            </View>
            <View style={styles.buttonWrapper}>
                { showCompleteToggle === 'About' ? (
                    <Text style={[styles.button, styles.button1]} onPress={showAbout}> About </Text>
                ) : ( 
                    <Text style={[styles.buttonFaded, styles.button1]} onPress={showAbout}> About </Text>
                )}

                { showCompleteToggle === 'All' ? (
                    <Text style={[styles.button, styles.button1]} onPress={showAllTasks}> All </Text>
                ) : ( 
                    <Text style={[styles.buttonFaded, styles.button1]} onPress={showAllTasks}> All </Text>
                )}

                { showCompleteToggle === 'Complete' ? (
                    <Text style={[styles.button, styles.button1]} onPress={filterCompleteTasks}> Complete </Text>
                ) : ( 
                    <Text style={[styles.buttonFaded, styles.button1]} onPress={filterCompleteTasks}> Complete </Text>
                )}

                { showCompleteToggle === 'Incomplete' ? (
                    <Text style={[styles.button, styles.button1]} onPress={filterInCompleteTasks}> Incomplete </Text>
                ) : ( 
                    <Text style={[styles.buttonFaded, styles.button1]} onPress={filterInCompleteTasks}> Incomplete </Text>
                )}
            </View>

            { showCompleteToggle !== 'About' ? (
            <FlatList 
                data={tasks}
                style={{ width: '95%' }}
                renderItem={ ({ item }) => <TaskComponent id={item.key} title={item.title} description={item.description} complete={item.complete} locationInfo={item.locationInfo} locationInfoClose={item.locationInfoClose} /> }
                />) : (
                <Text>You can view your tasks from here and use the buttons above to toggle.</Text>
            )}
        </View>
    )
}
export default ViewTaskScreen
