import React,{useState} from 'react';
import {View, Text,TouchableOpacity,StyleSheet,Switch} from 'react-native'
import FastImage from 'react-native-fast-image';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Clipboard from '@react-native-clipboard/clipboard';




export default function CatImg() {
  const [url, setUrl] = useState('https://api.thecatapi.com/v1/images/search');
  const [switchValue, setSwitchValue] = useState(false);
  const [copiedText, setCopiedText] = useState('');

  const copyToClipboard = () => {
    Clipboard.setString(catUrl);
  };

  const toggleSwitch = (value) => {

    if (value) {
      setSwitchValue(true);
      setUrl('https://api.thecatapi.com/v1/images/search?mime_types=gif')
    } else {
      setSwitchValue(false);
      setUrl('https://api.thecatapi.com/v1/images/search?mime_types=jpg,png')
    };

  };

  const [catUrl, setcatUrl] = useState('https://cdn2.thecatapi.com/images/d9f.jpg');
  
 
  const getCat= ()=> {
    console.log('Fetch url Thanh Cong');

    fetch(url)
      .then((res) => res.json())
      .then((cats) => {
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
        <TouchableOpacity  onPress={copyToClipboard}>
          <FastImage 
          style = {{width: 400, height: 400}}
          resizeMode={FastImage.resizeMode.cover}
          source={{            
          uri: `${catUrl}`,
          headers: { Authorization: 'someAuthToken' },
          priority: FastImage.priority.normal,}} 
          />
        </TouchableOpacity>
      </View>
        <View style={styles.Button}>

      <Icon.Button
      name="image-outline"
      backgroundColor='#55BCC9'
      size={30}
      onPress={getCat}
    >
      <Text style={{ fontFamily: 'Arial', fontSize: 15,color:'white',textAlign:'justify',justifyContent:'flex-end' }}>
        Fetch Anh Moi
      </Text>
    </Icon.Button>
    <Switch
          onValueChange={toggleSwitch}
          value={switchValue}
        />
            </View>
    </View>
  )

};

const styles = StyleSheet.create ({
   container:{
    flex: 1,
    backgroundColor: '#CAFAFE',
  },
  img:{
    flex:1,
    padding:5,
    paddingTop:70,
  },
  header:{
        height: 65,
        paddingTop: 20,
        backgroundColor: '#97CAEF',
      },
  title:{
        flex: 1,
        textAlign: 'center',
        color: '#fff',
        fontSize: 20,
        fontWeight: "bold",
        justifyContent: 'center',
    },
  Button:{
        flexDirection:'row',
        justifyContent: 'space-between',
        textAlign:'space-between',
        paddingEnd:10,
  }

})