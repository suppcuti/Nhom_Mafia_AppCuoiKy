import React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LottieView from 'lottie-react-native';
import TodoList from './manhinh/TodoList';
import CatImg from './manhinh/CatImg';
import Themeswitch from './Class/ThemeSwitch';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import DetailsScreen from './manhinh/Detail';
import Score from './Class/score';


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
      speed ={2}
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
    <Text style={{ fontFamily: 'Arial', fontSize: 15,color:'white',textAlign:'justify',justifyContent:'flex-end' }}>
      TodoList
    </Text>
  </Icon.Button>

    <Icon.Button 
    name="cat"
    backgroundColor='black'
    size={60}
    onPress={() => navigation.navigate('CatImg')}
    >
    <Text style={{ fontFamily: 'Arial', fontSize: 15,color:'white',textAlign:'justify',justifyContent:'flex-end' }}>
      Cat Img
    </Text>
    </Icon.Button>

    <Icon.Button 
    name="card-account-details-star"
    backgroundColor='black'
    size={60}
    onPress={() => navigation.navigate('Details')}
    >
    <Text style={{ fontFamily: 'Arial', fontSize: 15,color:'white',textAlign:'justify',justifyContent:'flex-end' }}>
      Detail
    </Text>
    </Icon.Button>

    </View>
      <Themeswitch style={{}}/>
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

