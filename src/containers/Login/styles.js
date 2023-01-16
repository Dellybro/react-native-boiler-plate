import {StyleSheet} from 'react-native';
import {theme} from '../../styles';

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  contentScroll: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingVertical: 24,
    paddingHorizontal: 24,
    flex: 1,

    display: 'flex',
    justifyContent: 'space-between',
  },
  fieldIcon: {
    marginRight: 8,
    color: theme.colors.gray[400],
  },
  divider: {
    backgroundColor: theme.colors.gray[200],
    height: 1,
    width: '30%',
  },
});

export default styles;
