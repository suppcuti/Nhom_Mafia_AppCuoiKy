import React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TodoList from './manhinh/TodoList';
import LottieView from 'lottie-react-native';
import CatImg from './manhinh/CatImg';
import Themeswitch from './Class/ThemeSwitch';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import DetailsScreen from './manhinh/Detail';

function SplashScreen({navigation}) {
  return(
    <View >
    
      <LottieView   style={{
      width: 460, 
      aspectRatio: 370 / 667,
      flexGrow: 1, 
      alignSelf: 'center',
    }}
      resizeMode='cover'
      source={require('./assets/lf20_Z5qhQy.json')} 
      autoPlay 
      loop ={false}
      onAnimationFinish = {() => navigation.navigate('Home')}
      speed ={3}
      />

    </View>
  )
}

function HomeScreen({ navigation }) {
  return (
    <View style={{flex:1}}>
      <View style={{justifyContent:'space-between',alignContent:'space-between',flexDirection:'row-reverse',backgroundColor:'black'}}>
  <Icon.Button
    name="format-list-checkbox"
    backgroundColor='black'
    size={60}
    onPress={() => navigation.navigate('ToDoList')}
  >
  </Icon.Button>

    <Icon.Button 
    name="cat"
    backgroundColor='black'
    size={60}
    onPress={() => navigation.navigate('CatImg')}
    ></Icon.Button>

    <Icon.Button 
    name="card-account-details-star"
    backgroundColor='black'
    size={60}
    onPress={() => navigation.navigate('Details')}
    ></Icon.Button>

    </View>

      <Themeswitch/>
    </View>


    );
}

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
        
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>

    </NavigationContainer>
      
  );
}

export default App;

