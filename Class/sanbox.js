import React  from "react";
import {Text, StyleSheet, View} from "react-native";


export default function Sanbox() {
    return (
        <View style={style.container}>
            <Text style={style.so1}> So1 </Text>
            <Text style={style.so2}> So2 </Text>
            <Text style={style.so3}> So3 </Text>
            <Text style={style.so4}> So4 </Text>
        </View>
    )
};

const style = StyleSheet.create ({
    container:{
        //flex:1,
        flexDirection:"row",
        justifyContent: "space-around",
        alignContent:"center",
        paddingTop:40,
        backgroundColor: '#3ddd',

    },
    so1:{
        flex:1,
        backgroundColor: 'violet',
        padding:10,
    },
    so2:{
        flex:1,
        backgroundColor: 'gold',
        padding:20,
    },

    so3:{
        flex:1,
        backgroundColor: 'coral',
        padding:30,
    },
    so4:{
        flex:1,
        backgroundColor: 'white',
        padding:40,
    },
})