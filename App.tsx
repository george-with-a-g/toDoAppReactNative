import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {SafeAreaView,StatusBar,StyleSheet,Text,useColorScheme,View} from 'react-native';

import {Colors,DebugInstructions,Header,LearnMoreLinks,ReloadInstructions} from 'react-native/Libraries/NewAppScreen';


function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <NavigationContainer>
        <SafeAreaView style={backgroundStyle}>
            <View>
                <Text>To Do Application</Text>
            </View>
        </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
