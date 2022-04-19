import React from 'react';
import { View, Text, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const customTextButton = (
  <Icon.Button name="facebook" backgroundColor="#3b5998">
    <Text style={{ fontFamily: 'Arial', fontSize: 15 }}>
      Login with Facebook
    </Text>
  </Icon.Button>
);

export default function NiceButton ({navigation}) {

    return(
        <View>
        <Icon.Button
          name="TodoList"
          backgroundColor="#3b5998"
          onPress={() => navigation.navigate('ToDoList')}
          >
          Go To TOdoList
        </Icon.Button>
        </View>
    );
}