import React,{useState} from 'react';
import {View, Text,Button,StyleSheet} from 'react-native'
import FastImage from 'react-native-fast-image';

const url ='https://api.thecatapi.com/v1/images/search';

export default function CatImg() {
  const [catUrl, setcatUrl] = useState('https://cdn2.thecatapi.com/images/d9f.jpg');
  

  const getCat= ()=> {
    console.log('Fetch url Thanh Cong');

    fetch(url)
      .then((res) => res.json())
      .then((cats) => {
        console.log('Cats :', cats);
        const catUrl =cats[0].url;
        setcatUrl(catUrl)
      })
      .catch((error)=>{
        console.log('Erro :', error);
      });
  }
    console.log('Cat Url: ', catUrl);


  return(
    <View style={styles.container} >

      <View style={styles.header}>
      <Text style={styles.title}> App Fetch Anh Meo =]]] </Text>
      </View>

      <View style={styles.img} >
    
      <FastImage 
          style = {{width: 400, height: 400, maxHeight:300, maxWidth:480 }}
          resizeMode={FastImage.resizeMode.contain}
          source={{            
          uri: `${catUrl}`,
          headers: { Authorization: 'someAuthToken' },
          priority: FastImage.priority.normal,}} 
      />
      </View>

      <Button title='Fetch anh moi' onPress={getCat} color='green' />
    </View>
  )

};

const styles = StyleSheet.create ({
   container:{
    flex: 1,
    backgroundColor: '#fffff3',
  },
  img:{
    flex:1,
    padding:5,
  },
  header:{
        justifyContent: 'center',
        height: 65,
        paddingTop: 20,
        backgroundColor: 'skyblue',
      },
  title:{
        flex: 1,
        textAlign: 'center',
        color: '#fff',
        fontSize: 20,
        fontWeight: "bold",
        justifyContent: 'center',
    }

})