import { View } from 'react-native';
import react from 'react';
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';


function SplashScreen() {

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
  };

export default SplashScreen;