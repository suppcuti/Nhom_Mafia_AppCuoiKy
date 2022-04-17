import React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TodoList from './TodoList';
import LottieView from 'lottie-react-native';
import CatImg from './CatImg';




function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Nhom Mafia </Text>
    </View>
  );
}

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
    
    <View style={{ flex: 1, alignItems: 'center', justifyContent: "space-between" }}>
      <Text style={{ fontSize: 28}} >Man Hinh Chinh</Text>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: "center" }}>
      <Button 
        title="Go to ToDoList"
        onPress={() => navigation.navigate('ToDoList')}
      />

            <Button 
        title="Go to Cat Img"
        onPress={() => navigation.navigate('CatImg')}
      />
      
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
      </View>
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
        <Stack.Screen name="Home" component={HomeScreen} />
        
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

