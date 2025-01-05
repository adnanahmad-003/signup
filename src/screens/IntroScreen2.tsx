import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

const IntroScreen2: React.FC = ({navigation}: any) => {
  const handleNextPress = () => {
    navigation.navigate('Intro3');
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../assests/images/intro2.png')}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.title}>
        Where safety meets convenience, every step of the way.
      </Text>
      <Text style={styles.subtitle}>
        Stop worrying about your child's safety & comfort with cramped-up
        vehicles and no live tracking. We bring real-time GPS tracking, zero
        overcrowding, and unparalleled security checks for peace of mind.
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
    backgroundColor: '#FFC1B6',
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

export default IntroScreen2;
