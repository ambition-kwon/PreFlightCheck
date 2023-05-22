import React from 'react';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {Text, TouchableOpacity} from 'react-native';
import {registerEmail} from './lib/login';

function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <TouchableOpacity
          onPress={() => registerEmail('ddd@ddd.com', 'ddddddaaaaa')}>
          <Text>Test</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default App;
