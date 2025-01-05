import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

const IntroScreen1: React.FC = ({navigation}: any) => {
  const handleNextPress = () => {
    navigation.navigate('Intro2');
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../assests/images/intro1.png')}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.title}>Your child's guardian angel on the road</Text>
      <Text style={styles.subtitle}>
        because "did they get there yet?" should be a thing of the past.
      </Text>
      <TouchableOpacity style={styles.button} onPress={handleNextPress}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FEC836',
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

export default IntroScreen1;
