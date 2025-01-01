import React from 'react';
import {TouchableOpacity, Text, StyleSheet, ViewStyle} from 'react-native';

interface ButtonProps {
  title: string;
  onPress: () => void;
  style?: ViewStyle;
}

const Button: React.FC<ButtonProps> = ({title, onPress, style}) => {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '50%',
    backgroundColor: '#000',
    padding: 15,
    borderRadius: 2,
    alignItems: 'center',
    alignSelf: 'center',
    marginTop : 40,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default Button;
