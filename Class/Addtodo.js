import React, {useState}  from "react";
import {Text,View, StyleSheet, TextInput, Button} from "react-native";

export default function AddTodo({submit}){
    const [text, setText] =useState('');
    
    const cleartext = (val) =>{
        setText('');
    }

    const  changeH = (val) =>{
        setText(val);
    }


    return(
        <View> 
            <TextInput
            style={styles.input}
            value={text}
            placeholder="New Todo..."
            onChangeText={changeH}
            />
            <Button 
            onPress={() => {submit(text), cleartext(text)} }
             title='add todo' 
             color='coral'
              />
        </View>
    )
}


const styles = StyleSheet.create({
    input:{
        marginTop:10,
        paddingHorizontal:8,
        paddingVertical:6,
        borderBottomWidth:1,
        borderBottomColor:'#ddd',
    },
})