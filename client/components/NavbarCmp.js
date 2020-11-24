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
import FileCmp from './FileCmp';
import HomeworkCmp from './HomeworkCmp';
import QuizCmp from './QuizCmp';
import NoticeCmp from './NoticeCmp';
import ClassCmp from './ClassCmp';

const NavbarCmp = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === '홈') {
            iconName = focused ? 'navicon' : 'navicon';
          } else if (route.name === 'File') {
              iconName = focused ? 'paperclip' : 'paperclip';
          } else if (route.name === 'Homework') {
              iconName = focused ? 'archive' : 'archive';
          } else if (route.name === 'Quiz') {
              iconName = focused ? 'question' : 'question';
          } else if (route.name === 'Notice') {
              iconName = focused ? 'comment' : 'comment';
          }
          // You can return any component that you like here!
          return <Icon name={iconName} size={30} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
        showLabel: false,
      }}
    >
      <Tab.Screen name="홈" component={ClassCmp} />
      <Tab.Screen name="Notice" component={NoticeCmp} />
      <Tab.Screen name="Homework" component={HomeworkCmp} />
      <Tab.Screen name="Quiz" component={QuizCmp} />
      <Tab.Screen name="File" component={FileCmp}  />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  
});

export default NavbarCmp;
