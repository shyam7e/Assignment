import React from 'react';
import {StyleSheet, TextInput, Text, View} from 'react-native';

const SearchBar = ({value, onChangeText}) => {
  return (
    <View style={styles.searchBarContainer}>
      <TextInput
        placeholder="Search"
        placeholderTextColor="#b3b3b3"
        style={styles.searchBarInput}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBarContainer: {
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginTop: 10,
    marginHorizontal: 16,
  },
  searchBarInput: {
    fontSize: 16,
    color: '#333',
    height: 40,
  },
});

export default SearchBar;
