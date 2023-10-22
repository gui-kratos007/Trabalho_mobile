import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginTela from './LoginTela';
import RegistroTela from './RegistroTela';
import RecuperacaoSenhaTela from './RecuperacaoSenhaTela';
import HomeTela from './HomeTela';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginTela} options={{ headerShown: false }} />
        <Stack.Screen name="Registro" component={RegistroTela} />
        <Stack.Screen name="RecuperacaoSenha" component={RecuperacaoSenhaTela} />
        <Stack.Screen name="Home" component={HomeTela} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
