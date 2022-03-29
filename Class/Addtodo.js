import React, {useState}  from "react";
import {Text,View, StyleSheet, TextInput, Button} from "react-native";

export default function AddTodo({submit}){
    const [text, setText] =useState('');

    const  changeH = (val) =>{
        setText(val);
    }


    return(
        <View> 
            <TextInput
            style={styles.input}
            placeholder="New Todo..."
            onChangeText={changeH}
            />
            <Button onPress={() => submit(text) } title='add todo' color='coral' />
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