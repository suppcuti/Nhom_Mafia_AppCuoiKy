import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TodoList from './manhinh/TodoList';
import CatImg from './manhinh/CatImg';
import DetailsScreen from './manhinh/Detail';
import SplashScreen from './manhinh/SplashScreen';
import HomeScreen from './manhinh/HomeScreen';
import Game2048 from './manhinh/2048';


const Stack = createNativeStackNavigator();

function App() {
  
  return (

    
    
    <NavigationContainer>

        <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={SplashScreen} options={{
          headerShown: false,
        }} />
        <Stack.Screen name="Home" component={HomeScreen}  options={{
          headerShown: false,
        }}/>
        
        <Stack.Screen name="ToDoList" component={TodoList} 
        options={{
          headerShown: false,
        }} 
        />

        <Stack.Screen name="CatImg" component={CatImg} 
        options={{
          headerShown: false,
        }} 
        /> 
         
        <Stack.Screen name="2048" component={Game2048} 
        options={{
          headerShown: false,
        }} 
        /> 
        
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>

    </NavigationContainer>
      
  );
}

export default App;

