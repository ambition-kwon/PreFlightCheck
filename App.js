import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import RootStack from './screens/RootStack';
import {StatusBar} from 'react-native';

function App() {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <StatusBar barStyle={'light-content'} />
        <RootStack />
      </SafeAreaProvider>
    </NavigationContainer>
  );
}

export default App;
