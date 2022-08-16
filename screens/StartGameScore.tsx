import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import PrimaryButton from '../components/PrimaryButton';

const StartGameScore = () => {
  return (
    <View style={styles.inputContainer}>
      <TextInput />
      <PrimaryButton>Reset</PrimaryButton>
      <PrimaryButton>Confirm</PrimaryButton>
    </View>
  );
};

export default StartGameScore;

const styles = StyleSheet.create({
  inputContainer: {
    // flex: 1,
    marginTop: 100,
    padding: 10,
  },
});
