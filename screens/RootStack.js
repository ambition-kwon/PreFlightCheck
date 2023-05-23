import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from './LoginScreen';
import AddNameScreen from './AddNameScreen';
import SelectScreen from './SelectScreen';
import HomeScreen from './HomeScreen';
import AddScreen from './AddScreen';
import AddCompleteScreen from './AddCompleteScreen';
import MyPageScreen from './MyPageScreen';
import ParkingScreen from './ParkingScreen';
import CalendarScreen from './CalendarScreen';

const stack = createNativeStackNavigator();

function RootStack() {
  return (
    <stack.Navigator>
      <stack.Screen
        name={'Login'}
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <stack.Screen
        name={'AddName'}
        component={AddNameScreen}
        options={{headerShown: false}}
      />
      <stack.Screen name={'Select'} component={SelectScreen} options={null} />
      <stack.Screen
        name={'Home'}
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <stack.Screen
        name={'Calendar'}
        component={CalendarScreen}
        options={null}
      />
      <stack.Screen name={'Add'} component={AddScreen} options={null} />
      <stack.Screen
        name={'AddComplete'}
        component={AddCompleteScreen}
        options={{headerShown: false}}
      />
      <stack.Screen name={'MyPage'} component={MyPageScreen} options={null} />
      <stack.Screen name={'Parking'} component={ParkingScreen} options={null} />
    </stack.Navigator>
  );
}

export default RootStack;
