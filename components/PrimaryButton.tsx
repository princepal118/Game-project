import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
interface IButtonProps {
  children: string;
}

const PrimaryButton = (props: IButtonProps) => {
  return (
    <View>
      <Text>{props.children}</Text>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  // buttonContainer:{
  //     backgroundColor:'#1f2dd3'
  // }
});
