import React, {useState} from 'react';
import {Input, useTheme, Pressable} from 'native-base';
import useStyles from './styles';
import Icon from '../../Icon';

export const PasswordInput = React.forwardRef(function NumberFormatField(
  props,
  ref,
) {
  const theme = useTheme();
  const [show, setShow] = useState(false);
  const styles = useStyles(theme);

  return (
    <Input
      placeholder="Password"
      {...props}
      ref={ref}
      type={show ? 'text' : 'password'}
      InputRightElement={
        <Pressable onPress={() => setShow(!show)}>
          <Icon
            name={show ? 'visibility' : 'visibility-off'}
            style={styles.fieldIcon}
          />
        </Pressable>
      }
    />
  );
});
