import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

const IntroScreen3: React.FC = ({navigation}: any) => {
  const handleNextPress = () => {
    navigation.navigate('SignIn');
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../assests/images/intro3.png')}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.title}>Save time. Spark joy. Unlock potential.</Text>
      <Text style={styles.subtitle}>
        Long commutes are a thing of the past. With doorstep pickup and
        drop-off, students save 50% more time for learning, self-care, play, and
        family—every single day.
      </Text>
      <TouchableOpacity style={styles.button} onPress={handleNextPress}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#B6FFC1',
    padding: 20,
  },
  image: {
    width: '100%',
    height: '50%',
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000',
    marginTop: 10,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#000',
    marginTop: 10,
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#000',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default IntroScreen3;
