import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = ({title}) => {
  return (
    <View style={style.header}>
      <Text style={style.text}>{title}</Text>
    </View>
  )
};

const style = StyleSheet.create({
  header: {
    height: 60, 
    padding: 15, 
    backgroundColor: 'darkslateblue',
  },
  text: {
    color: "white", 
    fontSize: 23,
    textAlign: "center",
  },
});

export default Header;