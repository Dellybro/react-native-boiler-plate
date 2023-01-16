import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Zocial from 'react-native-vector-icons/Zocial';
import ApplyStyles from '@fyresite/apply-styles';

import {useTheme} from 'native-base';
import styles from './styles';

function Icon({type = 'MaterialIcons', ...props}) {
  const [icon, setIcon] = useState(type);
  const {colors} = useTheme();

  useEffect(() => {
    if (icon !== type) {
      setIcon(type);
    }
  }, [type, icon]);

  function getIcon() {
    switch (type) {
      case 'AntDesign':
        return AntDesign;
      case 'Entypo':
        return Entypo;
      case 'EvilIcons':
        return EvilIcons;
      case 'Feather':
        return Feather;
      case 'FontAwesome':
        return FontAwesome;
      case 'FontAwesome5':
        return FontAwesome5;
      case 'Fontisto':
        return Fontisto;
      case 'Foundation':
        return Foundation;
      case 'Ionicons':
        return Ionicons;
      case 'MaterialCommunityIcons':
        return MaterialCommunityIcons;
      case 'MaterialIcons':
        return MaterialIcons;
      case 'Octicons':
        return Octicons;
      case 'SimpleLineIcons':
        return SimpleLineIcons;
      case 'Zocial':
        return Zocial;
      default:
        return MaterialIcons;
    }
  }

  const Component = getIcon();

  return (
    <Component
      {...props}
      style={ApplyStyles({color: colors.purple[800]}, styles.root, props.style)}
    />
  );
}

Icon.propTypes = {
  type: PropTypes.oneOf([
    'AntDesign',
    'Entypo',
    'EvilIcons',
    'Feather',
    'FontAwesome',
    'FontAwesome5',
    'Foundation',
    'Ionicons',
    'MaterialCommunityIcons',
    'MaterialIcons',
    'Octicons',
    'SimpleLineIcons',
    'Zocial',
  ]),
};

export default Icon;
