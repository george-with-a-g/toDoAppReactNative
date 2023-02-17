import { NavigationContainer } from '@react-navigation/native';
import AuthContextProvider from './src/contexts/';//for sharing state accross multiple screens.
import RootNavigation from './src/navigation';//Handles navigation and the main application.
import { Provider as PaperProvider } from 'react-native-paper';

function App(): JSX.Element {
  return (
    <NavigationContainer>
        <AuthContextProvider>
            <PaperProvider>
                <RootNavigation />
            </PaperProvider>
        </AuthContextProvider>
    </NavigationContainer>
  );
}

export default App;
