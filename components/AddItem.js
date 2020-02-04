import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';


const AddItem = ({addItem}) => {

   const [text, setText] = useState('');   
   const onChange = textValue => setText(textValue);
   return (
   <View>
      <TextInput placeholder="Add Item.." style={style.input} onChangeText={onChange}/>
      <TouchableOpacity style={style.btn} onPress={() => addItem(text)}>
         <Text style={style.btnText}><Icon name="plus" size={15} style={style.btnIcon}/> Add Item</Text>
      </TouchableOpacity>
   </View>
  );

};

const style = StyleSheet.create({
   input: {
      height: 60,
      padding: 8,
      fontSize: 16,
   },
   btn: {
      backgroundColor: '#c2bad8',
      padding: 5,
      margin: 3,
   },
   btnText: {
      color: 'darkslateblue', 
      fontSize: 15,
      textAlign: 'center',
   }
});

export default AddItem;