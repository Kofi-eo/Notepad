import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Pressable,
  ScrollView,
} from 'react-native';
import { useState, useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { MaterialIcons, AntDesign, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import{Menu,AlertDialog,Button} from 'native-base';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style='auto' />
      <ScrollView style={styles.main}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Notepad</Text>
        </View>
        <View style={styles.subHeader}>
          <Menu placement='bottom left' w='190' trigger={{triggerProps} =>{
            return{
              <Pressable accessibilityLabel='More options menu'{...triggerProps}>
              <MaterialCommunityIcons name='dots-vertical' size={24}, color='black'/></Pressable>
            }
          }} > </Menu >
     
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
  },
  main: {
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: 30,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40,
  },
  headerText: {
    fontSize: 25,
    fontWeight: '600',
  },
});
