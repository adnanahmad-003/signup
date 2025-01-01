import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Input from '../components/Input/Input';
import Button from '../components/Button/Button';
import {useDispatch} from 'react-redux';
import {USER_SAGA_ACTIONS} from '../redux/actions/userActions';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type RootStackParamList = {
  SignIn: undefined;
  Home: undefined;
};

type SignInScreenProps = NativeStackScreenProps<RootStackParamList, 'SignIn'>;

const SignInScreen: React.FC<SignInScreenProps> = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const dispatch = useDispatch();

  const validateInputs = () => {
    let isValid = true;

    if (!username.trim()) {
      setUsernameError('Username is required');
      isValid = false;
    } else {
      setUsernameError('');
    }

    if (!password.trim()) {
      setPasswordError('Password is required');
      isValid = false;
    } else if (password.length < 6) {
      setPasswordError('Password should be at least 6 characters long');
      isValid = false;
    } else {
      setPasswordError('');
    }

    return isValid;
  };

  const handleSignIn = () => {
    if (validateInputs()) {
      dispatch({
        type: USER_SAGA_ACTIONS.USER_SIGN_IN,
        payload: {username, password},
      });
      navigation.navigate('Home');
    }
  };

  const handleRegisterPress = () => {
    console.log('Register Here Pressed');
  };

  return (
    <View style={styles.container}>
      <View style={styles.innercontainer}>
        <Text style={styles.title}>SIGN IN</Text>
        <Input
          placeholder="Username"
          onChangeText={setUsername}
        />
        {usernameError ? (
          <Text style={styles.errorText}>{usernameError}</Text>
        ) : null}
        <Input
          placeholder="Password"
          secureTextEntry
          onChangeText={setPassword}
        />
        {passwordError ? (
          <Text style={styles.errorText}>{passwordError}</Text>
        ) : null}
        <View style={styles.registerContainer}>
          <Text style={styles.registerText}>Don't have an account? </Text>
          <TouchableOpacity onPress={handleRegisterPress}>
            <Text style={styles.registerLink}>Register Here</Text>
          </TouchableOpacity>
        </View>
        <Button title="LOGIN" onPress={handleSignIn} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  innercontainer: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 40,
    textAlign: 'center',
  },
  registerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 5,
  },
  registerText: {
    fontSize: 14,
    color: 'black',
  },
  registerLink: {
    fontSize: 14,
    color: 'purple',
    fontWeight : '600',
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginBottom: 10,
  },
});

export default SignInScreen;
