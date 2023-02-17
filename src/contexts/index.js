import { createContext, useState, useContext } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthContext = createContext({})

const AuthContextProvider = ({children}) => {
    const [ allTasks, setAllTasks ] = useState([]);
    const [ userLocation, setUserLocation ] = useState(null);
    
    //saving task information
    const saveTaskData = async (data, setAllTasks) => {
        try {
            await AsyncStorage.setItem( '@TaskData', JSON.stringify(data) );
            setAllTasks(data);
        } catch (error) {
            console.log(error);
        }
    };
    //retrieving task information
    const retrieveTaskData = async (setAllTasks) => {
        try {
            const value = await AsyncStorage.getItem('@TaskData');
            setAllTasks(JSON.parse(value));
        } catch (error) {
            console.log(error);
        }
    };
    //clear task information
    const clearTaskData = async (allTasks, setAllTasks) => {
        try {
            await AsyncStorage.removeItem('@TaskData');
            setAllTasks([]);
        } catch (error) {
            console.log(error);
        }
    };
    return(
        <AuthContext.Provider value={{ allTasks, setAllTasks, userLocation, setUserLocation, saveTaskData, retrieveTaskData, clearTaskData }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;

export const useAuthContext = () => useContext(AuthContext)
