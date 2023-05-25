import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import RootStack from './screens/RootStack';
import {StatusBar} from 'react-native';
import {LoginContextProvider} from './contexts/LoginContext';

function App() {
  return (
    <LoginContextProvider>
      <NavigationContainer>
        <SafeAreaProvider>
          <StatusBar barStyle={'light-content'} />
          <RootStack />
        </SafeAreaProvider>
      </NavigationContainer>
    </LoginContextProvider>
  );
}

export default App;
