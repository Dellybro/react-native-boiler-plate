const {StyleSheet} = require('react-native');

const useStyles = theme =>
  StyleSheet.create({
    root: {
      flex: 1,
    },
    content: {
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      paddingVertical: 24,
      paddingHorizontal: 24,
      flex: 1,
    },
    fieldIcon: {
      marginRight: 8,
      color: theme.colors.gray[400],
    },
  });

export default useStyles;
