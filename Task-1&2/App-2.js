import React from 'react';
import { Image, Platform, SafeAreaView,ScrollView,Text, View } from 'react-native';
import Butt from './button';


export default function App() {
  return (

    // Platform.OS === 'Android' ? 'style={{marginTop:40,paddingHorizontal:15, }}'
      <SafeAreaView>
      <View style={{marginTop:80,paddingHorizontal:20, }}>

      <Text style={{ fontWeight:'bold',alignItems:'center',paddingBottom:10,}}>
           
           Here are some boxes of different colors </Text>
        
           <Butt  title='One' bgColor='#2aa198' />
           <Butt  title='Two' bgColor='#268bd2' />
           <Butt  title='Three' bgColor='#d33682' />
           <Butt  title='Four' bgColor='#cb4b16' />

          <Image
          // source = {require ('./assets/p.jfif')}
          // resizeMode ='center'
          source={{uri:'https://picsum.photos/id/0/5000/3333', }} 
           style={{width:320,height:300,marginTop:50,}}
         /> 
     
     </View>
     </SafeAreaView>   
  );
}


