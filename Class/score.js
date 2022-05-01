import AsyncStorage from "@react-native-async-storage/async-storage";
import {useEffect} from "react";
import { Button } from "react-native";


export default function Score(){
    let i = 0;
    const storeScore = async (i) => {
        try {
          await AsyncStorage.setItem('@score_Key', i)
        } catch (e) {
        }
      }


    const getScore = async () => {
        try {
          const i = await AsyncStorage.getItem('@score_Key')
          if(i !== null) {
          }
        } catch(e) {
        }
      }


useEffect(
    storeScore(),
    getScore()
);
    return(

       <Button onPress={  
        console.log("Score = ", i)}
        color='black'
     />

    );

};