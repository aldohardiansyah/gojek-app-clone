import React, {useState} from 'react';
import {View, Text, Image,StyleSheet, TextInput  } from 'react-native';


const App = () => {

  return (
    <View style={{flex:1}}>
      {/* <Text>Test Gojek</Text> */}
      <View style={{backgroundColor:'white', flex:1}}>
        <View style={{marginHorizontal: 17, flexDirection:'row', paddingTop: 15}}>
          <View style={{position:'relative', flex: 1}}>
            <TextInput style={style.homeSearchBar} placeholder='What do you want for eat ?'></TextInput>
            <Image style={{position: 'absolute', top: 8, left: 12}} source={require('./assets/icon/search.png')}></Image>
          </View>
          <View style={{width:35, alignItems:'center', justifyContent:'center'}}>
          <Image style={style.navButtonIcon} source={require('./assets/icon/home-active.png')}/>
          </View>
        </View>
      </View>


      <View style={{backgroundColor:'#fff', height: 70, flexDirection:'row'}}>
          <View style={style.navButton}>
            <Image style={style.navButtonIcon} source={require('./assets/icon/home-active.png')}/>
            <Text style={style.navButtonTitleActive}>Home</Text>
          </View>

          <View style={style.navButton}>
            <Image style={style.navButtonIcon} source={require('./assets/icon/order.png')}/>
            <Text style={style.navButtonTitle}>Orders</Text>
          </View>

          <View style={style.navButton}>
            <Image style={style.navButtonIcon} source={require('./assets/icon/help.png')}/>
            <Text style={style.navButtonTitle}>Help</Text>
          </View>

          <View style={style.navButton}>
            <Image style={style.navButtonIcon} source={require('./assets/icon/inbox.png')}/>
            <Text style={style.navButtonTitle}>Inbox</Text>
          </View>

          <View style={style.navButton}>
            <Image style={style.navButtonIcon} source={require('./assets/icon/account.png')}/>
            <Text style={style.navButtonTitle}>Account</Text>
          </View>
          
      </View>
    </View>
  )
};

const style = StyleSheet.create({
  navButton: {
    flex:1, alignItems:"center", justifyContent:'center'
  },
  navButtonIcon: {
    width:26,
    height:26,
    marginBottom:5,
    backgroundColor:'#fff'
  },
  navButtonTitle : {
    color:'#545454'
  },
  navButtonTitleActive : {
    color:'#43AB4A'
  },
  homeSearchBar :{
    borderWidth:1, 
    borderColor:'#e8e8e8',
    height:45,
    borderRadius:25,
    fontSize:13,
    paddingLeft:45,
    paddingRight: 20,
    backgroundColor: 'white'
  }
});

export default App;