import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as Font from 'expo-font';


export default function App() {
  return (
    <View style={styles.container}>
      <Text style={[styles.text1, styles.firstLine]}>B</Text>
      <Text style={[styles.text2, styles.secondLine]}>BINGE</Text>
    </View>
  );
}

const styles = StyleSheet.create(
{
  container: 
  {
    backgroundColor: '#61BCF9', // Use a color code or a color name
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text1: 
  {
    fontSize: 300,
    fontFamily: 'Arial',
  },
  text2: 
  {
    fontSize: 50,
    fontFamily: 'Times New Roman',
  },
  text3: 
  {
    fontSize: 16,
    fontFamily: 'Courier New',
  },
  firstLine: 
  {
    position: 'absolute',
    top: 200,
    right: 96,
  },
  secondLine: 
  {
    position: 'absolute',
    bottom: 230, // Adjust the top value to change the vertical position
  },
});