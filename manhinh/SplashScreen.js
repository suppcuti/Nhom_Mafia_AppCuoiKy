import { View } from 'react-native';
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';
import * as React from 'react'


export default function SplashScreen() {
  const navigation = useNavigation();

    return(

      <View >

        <LottieView   
      style={{
        width: 460, 
        aspectRatio: 370 / 667,
        flexGrow: 1, 
        alignSelf: 'center',
      }}
        resizeMode='cover'
        source={require('../assets/lf20_Z5qhQy.json')} 
        autoPlay 
        loop ={false}
        onAnimationFinish = {() => navigation.navigate('Home')}
        speed ={2}
        />

      </View>
    );
  }

