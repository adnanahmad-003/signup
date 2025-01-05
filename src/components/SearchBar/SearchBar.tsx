import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Search" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ededed',
    borderRadius: 20,
    marginHorizontal: 16,
    marginVertical: 8,
  },
  input: {
    marginLeft: 8,
    fontSize: 16,
    flex: 1,
  },
});

export default SearchBar;
