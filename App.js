import React, {useState} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import Header from './components/Header';

const App = () => {
  return (
    <View style={style.container}>
      <Header title="Welcome to Aurora"/>
      {/* <Text style={style.text}>Hello World</Text>
      <Image source={{uri:'https://gitlab.com/uploads/-/system/user/avatar/4288201/avatar.png'}} style={style.img}></Image> */}
    </View>
  )
};

const style = StyleSheet.create({
  container: {
    flex: 1, 
  },
  text: {
    color: "darkslateblue", 
    fontSize: 30,
  },
  img: {
    height: 100,
    width: 100,
    borderRadius:50
  }
});

export default App;