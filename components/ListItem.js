import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const ListItem = ({item, deleteItem}) => {
  return (
    <TouchableOpacity style={style.listItem}>
      <View style={style.listItemView}>
        <Text style={style.listItemText}>{item.text}</Text>
        <Icon name="remove" size={20} color="firebrick" onPress={()=> deleteItem(item.id)} />
      </View>
    </TouchableOpacity>
  )
};

const style = StyleSheet.create({
   listItem: {
      padding: 15,
      backgroundColor: '#f8f8f8',
      borderBottomWidth: 1,
      borderColor: '#eee'
   },
   listItemView: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
   },
   listItemText: {
      fontSize: 15
   }
});

export default ListItem;