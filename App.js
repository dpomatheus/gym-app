import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import HomeScreen from './src/screens/HomeScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{ headerShown: false }} // Remove o cabeçalho da tela de Login
        />
        <Stack.Screen 
          name="Register" 
          component={RegisterScreen} 
          options={{ headerShown: false }} // Remove o cabeçalho da tela de Register
        />
        <Stack.Screen 
          name="Main" 
          component={HomeScreen} 
          options={{ headerShown: false }} // Remove o cabeçalho da tela de Home
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
