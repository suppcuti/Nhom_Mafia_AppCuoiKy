import React  from "react";
import {Text, View, StyleSheet} from "react-native";

export default function Header(){
    return  (
        <View style={styles.header}>
            <Text style={styles.title}> Mafia Todos List </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        justifyContent: 'center',
        height: 60,
        paddingTop: 20,
        backgroundColor: 'coral',
    },
    title:{
        flex: 1,
        textAlign: 'center',
        color: '#fff',
        fontSize: 20,
        fontWeight: "bold",
        justifyContent: 'center',
    }
});