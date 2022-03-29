import React,{useState}  from "react";
import {Text, View, StyleSheet, FlatList, Alert, TouchableWithoutFeedback,Keyboard } from "react-native";
import  Header  from './Class/Header';
import TodoItems from "./Class/TodoItems";
import AddTodo from "./Class/Addtodo";
import Sanbox from "./Class/sanbox";


export default function App() {
    const  [todos,setTodos] = useState([
      {text: "Test 1 ", key: '1'},
      {text: "Test 2 ", key: '2'},
      {text: "Test 3 ", key: '3'},
    ]);

const Press = (key) =>{
  setTodos((prevTodos) =>{
      return prevTodos.filter(todo => todo.key !=key);
  });
}

const submit =(text) =>{  
  if(text.length >2) {
    setTodos((prevTodos) =>{
      return[
        {text: text, key: Math.random().toString()},
        ...prevTodos
      ]
    });
  } else {
    Alert.alert('Haiz', 'Luoi du vay 1 viec can lam phai nhieu hon 2 chu cai chu',[
      {text: 'Hieu Roi', onPress:() =>console.log('Alert Closed')}
    ])
  }

  
}


  return (
    //<Sanbox/>
    <TouchableWithoutFeedback onPress={() =>{
      Keyboard.dismiss();
      console.log('Tat Ban Phim')
    }}>
    <View style={styles.container}>
      <Header/>
        <View style={styles.conten}>
      <AddTodo submit={submit} />
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
      backgroundColor: '#ddd',
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