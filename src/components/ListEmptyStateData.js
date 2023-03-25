import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import colors from '../styles/colors';

const ListEmptyComponent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>No results found</Text>
      <Text style={styles.subtitle}>
        It looks like there are no items to display.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f8f8f8',
    paddingHorizontal: 20,
    marginTop: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: colors.darkGrey,
    textAlign: 'center',
    lineHeight: 24,
  },
});

export default ListEmptyComponent;
