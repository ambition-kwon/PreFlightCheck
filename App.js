import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import RootStack from './screens/RootStack';
import {StatusBar} from 'react-native';
import {LoginContextProvider} from './contexts/LoginContext';
import {DataContextProvider} from './contexts/DataContext';

function App() {
  return (
    <DataContextProvider>
      <LoginContextProvider>
        <NavigationContainer>
          <SafeAreaProvider>
            <StatusBar barStyle={'light-content'} />
            <RootStack />
          </SafeAreaProvider>
        </NavigationContainer>
      </LoginContextProvider>
    </DataContextProvider>
  );
}

export default App;
