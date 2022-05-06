import * as React from 'react'
import {View, Text} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ThemeSwitch from '../Class/ThemeSwitch';
import { useNavigation } from '@react-navigation/native';


export default function HomeScreen() {
    const navigation = useNavigation();
    return (
      <View style={{flex:1}}>
        <View style={{justifyContent:'space-between',alignContent:'space-between',flexDirection:'row-reverse',backgroundColor:'black'}}>
        <Icon.Button
      name="format-list-checkbox"
      backgroundColor='black'
      size={30}
      onPress={() => navigation.navigate('ToDoList')}
    >
      <Text style={{ fontFamily: 'Arial', fontSize: 15,color:'white',textAlign:'justify',justifyContent:'flex-end' }}>
        TodoList
      </Text>
    </Icon.Button>
  
      <Icon.Button 
      name="cat"
      backgroundColor='black'
      size={30}
      onPress={() => navigation.navigate('CatImg')}
      >
      <Text style={{ fontFamily: 'Arial', fontSize: 15,color:'white',textAlign:'justify',justifyContent:'flex-end' }}>
        Cat Img
      </Text>
      </Icon.Button>
  
      <Icon.Button 
      name="card-account-details-star"
      backgroundColor='black'
      size={30}
      onPress={() => navigation.navigate('Details')}
      >
      <Text style={{ fontFamily: 'Arial', fontSize: 15,color:'white',textAlign:'justify',justifyContent:'flex-end' }}>
        Detail
      </Text>
      </Icon.Button>

      <Icon.Button
      name="alpha-b-box"
      backgroundColor='black'
      size={30}
      onPress={() => navigation.navigate('2048')}
    >
      <Text style={{ fontFamily: 'Arial', fontSize: 15,color:'white',textAlign:'justify',justifyContent:'flex-end' }}>
        2048
      </Text>
    </Icon.Button>
      
  
       </View > 
        <ThemeSwitch/>
      </View>
  
  
      );
  }
