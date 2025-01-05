import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useSelector} from 'react-redux';
import IntroScreen1 from '../screens/IntroScreen1';
import IntroScreen2 from '../screens/IntroScreen2';
import SignInScreen from '../screens/SignInScreen';
import HomeScreen from '../screens/HomeScreen';
import IntroScreen3 from '../screens/IntoScreen3';

export type RootStackParamList = {
  Intro1: undefined;
  Intro2: undefined;
  Intro3: undefined;
  SignIn: undefined;
  Home: undefined;
};


const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator: React.FC = () => {
  const isAuthenticated = useSelector((state: any) => state.user.isAuthenticated);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={isAuthenticated ? 'Home' : 'Intro1'}
      >
        {!isAuthenticated && (
          <>
            <Stack.Screen
              name="Intro1"
              component={IntroScreen1}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Intro2"
              component={IntroScreen2}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Intro3"
              component={IntroScreen3}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="SignIn"
              component={SignInScreen}
              options={{headerShown: false}}
            />
          </>
        )}
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
