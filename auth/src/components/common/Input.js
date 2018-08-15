import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

const Input = ({label, value, onChangeText, placeholder, secureTextEntry}) => {
  const {inputStyle, labelStyle, containerStyle} = styles;

  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        placeholder={placeholder}
        underlineColorAndroid='transparent'
        autoCorrect={false}
        value={value}
        onChangeText={onChangeText}
        style={inputStyle}
        secureTextEntry={secureTextEntry}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 30,
    flex: 3,
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1
  },
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }
});


export {Input}
