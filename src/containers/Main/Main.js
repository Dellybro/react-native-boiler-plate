import React from 'react';
import {Box, Button, Text} from 'native-base';
import styles from './styles';
import {useDispatch} from 'react-redux';
import UserActions from '../../redux/actions/user';

export default function Main({navigation}) {
  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(UserActions.set(null));
  }

  return (
    <Box>
      <Text style={styles.text}>Hello</Text>
      <Button onPress={handleLogout}>Logout</Button>
    </Box>
  );
}
