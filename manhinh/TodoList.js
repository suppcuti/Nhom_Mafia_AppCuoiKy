import React,{useState, useEffect}  from "react";
import {Text, View, StyleSheet, FlatList, Alert, TouchableWithoutFeedback,Keyboard } from "react-native";
import  Header  from '../Class/Header';
import TodoItems from "../Class/TodoItems";
import AddTodo from "../Class/Addtodo";
import AsyncStorage from '@react-native-async-storage/async-storage';
import ThemeSwitch from "../Class/ThemeSwitch";

export default function TodoList() {
    const  [todos,setTodos] = useState([

    ]);
let i =0;

const Press = (key) =>{
  setTodos((prevTodos) =>{
      return prevTodos.filter(todo => todo.key !=key);
  });
}

const storeData = async (text) => {
  try {
    await AsyncStorage.setItem(key, text)
  } catch (e) {
    // saving error
  }
  console.log('Store')
}

const getData = async () => {
  try {
    const text = await AsyncStorage.getItem(key)
    if(text !== null) {
      // value previously stored
    }
  } catch(e) {
    // error reading value
  }
  console.log('Load Stored Data')
}


let k = (Math.random().toString());


const submit =(text) =>{  
  if(text.length >2) {
    setTodos((prevTodos) =>{
      return[
        {text: text, key: k },
        ...prevTodos
      ]
    });
    storeData();
    console.log('Text : ',text);
    console.log('Key  : ',k)
  } else {
    Alert.alert('Haiz', 'Luoi du vay 1 viec can lam phai nhieu hon 2 chu cai chu',[
      {text: 'Hieu Roi', onPress:() =>console.log('Alert Closed')}
    ])
  }

  
}


  return (
    //<Sanbox/>
    useEffect(() => {
      getData()
    },),
    <TouchableWithoutFeedback onPress={() =>{
      Keyboard.dismiss();
    }}
    onPressIn={() => {
      console.log('Hic',i++);
    }}
    >
    <View style={styles.container}>
      <Header/>
        <View style={styles.conten}>
      <AddTodo submit={submit}  />
       <View style={styles.list}>
          <FlatList 
            data={todos}
            renderItem={ ({item}) => (
              <TodoItems item={item} Press={Press} />
            )}
          /> 
        </View>

      </View>
            
    </View>
  </TouchableWithoutFeedback>
  )
}

const styles=  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ddd3',
    },
    conten:{
      flex:1,
      padding: 40,
    },
    list:{
      flex:1,
      marginTop: 20,
    },
});