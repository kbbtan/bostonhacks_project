import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Carousel from './pages/Carousel';
import SignUp from './pages/SignUp';
import LogIn from './pages/LogIn';
import Home from './pages/Home';
import CreateDiary from './pages/CreateDiary';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Welcome" component={Carousel} options={{title: "Welcome"}}/>
        <Stack.Screen name="signUp" component={SignUp} options={{title: "Sign Up"}}/>
        <Stack.Screen name="logIn" component={LogIn} options={{title: "Log In"}}/>
        <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
        <Stack.Screen name="createDiary" component={CreateDiary} options={{title: "Create Diary Entry"}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
