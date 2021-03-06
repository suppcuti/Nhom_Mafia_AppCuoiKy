import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Switch } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ThemeSwitch() {
 
 const [isEnabled, setIsEnabled] = useState(false);
 
 const getTheme = async () => {
   try {
     const theme = await AsyncStorage.getItem('theme');
     return theme;
   } catch(error) {
     console.log('error', error);
   };
 };
 
 const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: `${isEnabled ? '#000' : '#fff0'}`,
   },
   switch: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
   },
 });
 
 const setTheme = async (theme) => {
   try {
     await AsyncStorage.setItem('theme', theme);
   } catch(error) {
     console.log('error', error);
   };
 };
 
 useEffect(() => {
   getTheme()
   .then(res => {
     setIsEnabled(res === 'light');
   })
   .catch(err => {
     console.log('error', err);
   });
 }, []);
 
 const onChangeHandler = (value) => {
   if (value) {
     setIsEnabled(true);
     setTheme('light');
   } else {
     setIsEnabled(false);
     setTheme('Dark');
   };
 };
 
 return (
   <View style={styles.container}>
     <View style={styles.switch}>
     <Switch
       onValueChange={onChangeHandler}
       value={isEnabled}
     />
     </View>
   </View>
 );
};