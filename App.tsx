import { NavigationContainer } from '@react-navigation/native';
import AuthContextProvider from './src/contexts/';//for sharing state accross multiple screens.
import RootNavigation from './src/navigation';//Handles navigation and the main application.

function App(): JSX.Element {
  return (
    <NavigationContainer>
        <AuthContextProvider>
            <RootNavigation />
        </AuthContextProvider>
    </NavigationContainer>
  );
}

export default App;
