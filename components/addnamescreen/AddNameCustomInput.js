import React from 'react';
import {StyleSheet, TextInput} from 'react-native';

function CustomInput({
  placeholder,
  value,
  onChangeText,
  onSubmitEditing,
  autoComplete,
  keyboardType,
  secureTextEntry,
}) {
  return (
    <TextInput
      style={styles.textBox}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      onSubmitEditing={onSubmitEditing}
      autoCapitalize={'none'}
      autoCorrect={false}
      autoComplete={autoComplete}
      keyboardType={keyboardType}
      secureTextEntry={secureTextEntry}
      passwordRules={null}
    />
  );
}

const styles = StyleSheet.create({
  textBox: {
    fontSize: 16,
    borderColor: '#9CE6FC',
    borderWidth: 3,
    paddingHorizontal: 15,
    borderRadius: 15,
    width: 300,
    height: 50,
    backgroundColor: '#BEC4CA',
    marginVertical: 5,
    textAlign: 'center',
  },
});

export default CustomInput;
