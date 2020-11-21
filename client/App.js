/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Icon from 'react-native-vector-icons/EvilIcons'

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList,
  TouchableOpacityBase,
  TouchableOpacity,
  Linking,
} from 'react-native';

import { Calendar, CalendarList, Agenda } from 'react-native-calendars';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import FileCmp from './components/FileCmp';
import HomeworkCmp from './components/HomeworkCmp';
import QuizCmp from './components/QuizCmp';
import NoticeCmp from './components/NoticeCmp';
import HomeCmp from './components/HomeCmp';
import NavbarCmp from './components/NavbarCmp';
import AnimatedSplash from "react-native-animated-splash-screen";

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  setTimeout(() => {
    setIsLoaded(true)
  }, 3000);

  return (
    <AnimatedSplash
      translucent={false}
      isLoaded={isLoaded}
      logoImage={require("./assets/hansung-character.jpg")}
      backgroundColor={"white"}
      logoHeight={250}
      logoWidth={350}
    >
      <NavbarCmp />
    </AnimatedSplash>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
