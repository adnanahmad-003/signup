import React from 'react';
import {TextInput, StyleSheet, View, TextInputProps} from 'react-native';

interface InputProps extends TextInputProps {
  placeholder: string;
  secureTextEntry?: boolean;
}

const Input: React.FC<InputProps> = ({
  placeholder,
  secureTextEntry,
  ...props
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  input: {
    fontSize: 16,
    paddingVertical: 10,
  },
});

export default Input;
