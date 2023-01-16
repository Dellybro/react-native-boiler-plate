import React, {useEffect} from 'react';
import {Box, Text, Input, Button, Center, Pressable} from 'native-base';
import styles from './styles';
import {useDispatch} from 'react-redux';
import UserActions from '../../redux/actions/user';
import {PasswordInput} from '../../components/Inputs/PasswordInput/PasswordInput';
import {StatusBar, Keyboard} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

export default function Login({navigation}) {
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
        <Text color="white">Sign in to continue</Text>
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
          <Button onPress={handleLogin}>LOGIN</Button>
        </Box>
        <Center paddingBottom={4}>
          <Text>
            Already have an account?{' '}
            <Pressable onPress={() => navigation.navigate('Signup')}>
              <Text color="primary.900" fontWeight={'bold'}>
                Sign Up!
              </Text>
            </Pressable>
          </Text>
        </Center>
      </KeyboardAwareScrollView>
    </Box>
  );
}
