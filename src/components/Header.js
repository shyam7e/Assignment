import React from 'react';
import {View, Text} from 'react-native';
import colors from '../styles/colors';

const Header = ({title}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = {
  container: {
    backgroundColor: colors.secondary,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  title: {
    color: colors.primary,
    fontSize: 24,
    letterSpacing: 1,
  },
};

export default Header;
