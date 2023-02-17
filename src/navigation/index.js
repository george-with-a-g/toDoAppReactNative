import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CreateTaskScreen from '../screens/CreateTaskScreen';
import ViewTaskScreen from '../screens/ViewTasks';
import HomeScreen from '../screens/HomeScreen';
import TaskScreen from '../screens/TaskScreen';

const Stack = createNativeStackNavigator();
const RootNavigation = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown:false}}/>
            <Stack.Screen name="CreateTaskScreen" component={CreateTaskScreen} options={{headerShown:false}}/>
            <Stack.Screen name="ViewTasks" component={ViewTaskScreen} options={{headerShown:false}}/>
            <Stack.Screen name="TaskScreen" component={TaskScreen} options={{headerShown:false}}/>
        </Stack.Navigator>
    )
};
export default RootNavigation;
