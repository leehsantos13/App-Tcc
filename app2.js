import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Ocorrencia from './App';
import Conclusao from './src/components/Conclusao';
const Stack = createNativeStackNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name="Ocorrencia" 
        component={Ocorrencia} 
        options={{
          title: 'Ocorrencia',
          headerStyle:{
            backgroundColor: '#121212'
          },

          headerTintColor: '#fff',
          headerShown: false,
        }}
        />

        <Stack.Screen 
        name="Conclusão" 
        component={Conclusao} 
        options={{
          title:'Conclusão'
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}