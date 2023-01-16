import React, {useEffect} from 'react';
import {
  Box,
  Text,
  Input,
  Button,
  Center,
  Checkbox,
  Pressable,
} from 'native-base';
import styles from './styles';
import {useDispatch} from 'react-redux';
import UserActions from '../../redux/actions/user';
import {PasswordInput} from '../../components/Inputs/PasswordInput/PasswordInput';
import {StatusBar, Keyboard} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

export default function Signup({navigation}) {
  const dispatch = useDispatch();

  useEffect(() => {
    StatusBar.setBarStyle('light-content');
  }, []);

  function handleLogin() {
    dispatch(UserActions.set({loggedIn: true}));
  }

  return (
    <Box safeAreaTop style={styles.root} bgColor="purple.900">
      <Box style={styles.header} paddingX={4} paddingY={30}>
        <Text fontWeight={'bold'} color="white" fontSize={'2xl'}>
          Welcome
        </Text>
        <Text color="white">Sign up to continue</Text>
      </Box>
      <KeyboardAwareScrollView
        bounces={false}
        contentContainerStyle={styles.contentScroll}>
        <Box style={styles.form}>
          <Input
            onEndEditing={() => Keyboard.dismiss()}
            placeholder="Email"
            marginBottom={4}
          />
          <PasswordInput marginBottom={4} />
          <PasswordInput placeholder="Confirm Password" />
          <Checkbox marginY={6}>
            <Text fontSize={'xs'}>
              I accept the Terms of Use & Privacy Policy
            </Text>
          </Checkbox>
          <Button onPress={handleLogin}>SIGN UP</Button>
        </Box>
        <Center paddingBottom={4}>
          <Text>
            Already have an account?{' '}
            <Pressable onPress={() => navigation.navigate('Login')}>
              <Text color="primary.900" fontWeight={'bold'}>
                Sign In!
              </Text>
            </Pressable>
          </Text>
        </Center>
      </KeyboardAwareScrollView>
    </Box>
  );
}
