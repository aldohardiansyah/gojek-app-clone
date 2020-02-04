import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, FlatList, Alert} from 'react-native';
import Header from './components/Header';
import { uuid } from 'uuidv4';

import ListItem from './components/ListItem';
import AddItem from './components/AddItem';


const App = () => {

  const [items,setItems] = useState([
    {id: uuid(), text: 'Milk'},
    {id: uuid(), text: 'Egg'},
    {id: uuid(), text: 'Bread'},
    {id: uuid(), text: 'Apple'},
    {id: uuid(), text: 'Juice'}
  ]);

  const deleteItem = id => {
    setItems(prevsItem => {
      return prevsItem.filter(item => item.id != id);
    });
  };
  const addItem = text => {
    if(!text){
      Alert.alert('Error', 'Please enter an Item',  [{text: 'Ok' }]);
    }else{
      setItems(prevsItem => {
        return [{id:uuid(), text},...prevsItem];
      });
    }
  };



  return (
    <View style={style.container}>
      <Header title="Welcome to Aurora"/>
      <AddItem addItem={addItem}/>
      {/* <Text style={style.text}>Hello World</Text>
      <Image source={{uri:'https://gitlab.com/uploads/-/system/user/avatar/4288201/avatar.png'}} style={style.img}></Image> */}
      <FlatList 
        data={items} 
        renderItem={({item}) => <ListItem item={item} deleteItem={deleteItem}/> }
      />
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