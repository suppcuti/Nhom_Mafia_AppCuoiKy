import React  from "react";
import {Text, StyleSheet, TouchableOpacity,View} from "react-native";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

export default function TodoItems ({item,Press }) {

    return(
        <TouchableOpacity onPress={() =>Press(item.key)} >
        <View style={styles.item}>
            <MaterialIcons name='delete' />
            <Text style={styles.itembox}> {item.text} </Text>
        </View>
        
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item:{
        padding:16,
        marginTop:16,
        borderColor:'#bbb',
        borderWidth:1,
        borderStyle: 'dashed',
        borderRadius:10,
        flexDirection: 'row',
    },
    itembox:{
       marginLeft: 18,
       
    }

})