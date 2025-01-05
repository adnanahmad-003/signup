import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Animated,
  Image,
} from 'react-native';
import Input from '../components/Input/Input';
import Button from '../components/Button/Button';
import {useDispatch} from 'react-redux';
import {USER_SAGA_ACTIONS} from '../redux/actions/userActions';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

// Navigation types

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

  const logoScale = useRef(new Animated.Value(0)).current;
  const cardOpacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(logoScale, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }).start();

    Animated.timing(cardOpacity, {
      toValue: 1,
      duration: 800,
      delay: 400,
      useNativeDriver: true,
    }).start();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
    <KeyboardAvoidingView style={styles.container} behavior="height">
      <View style={styles.background} />

      <Animated.View
        style={[styles.logoContainer, {transform: [{scale: logoScale}]}]}>
        <Image
          source={require('../assests/images/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </Animated.View>

      <Animated.View style={[styles.card, {opacity: cardOpacity}]}>
        <Text style={styles.headerSubtitle}>Sign in to continue</Text>

        <Input
          placeholder="Username"
          onChangeText={setUsername}
          style={styles.input}
        />
        {usernameError ? (
          <Text style={styles.errorText}>{usernameError}</Text>
        ) : null}

        <Input
          placeholder="Password"
          secureTextEntry
          onChangeText={setPassword}
          style={styles.input}
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

        <Button title="LOGIN" onPress={handleSignIn} style={styles.button} />
      </Animated.View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FEC836',
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 300,
    backgroundColor: '#FFF',
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 120,
    height: 120,
  },
  card: {
    backgroundColor: '#FFF',
    width: '85%',
    borderRadius: 20,
    padding: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  headerSubtitle: {
    fontSize: 18,
    color: '#444',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    marginBottom: 20,
  },
  registerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  registerText: {
    fontSize: 14,
    color: 'black',
  },
  registerLink: {
    fontSize: 14,
    color: 'purple',
    fontWeight: '600',
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginBottom: 10,
  },
  button: {
    marginTop: 10,
    borderRadius:10,
  },
});

export default SignInScreen;
