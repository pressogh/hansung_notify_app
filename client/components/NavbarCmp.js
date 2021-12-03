import 'react-native-gesture-handler';
import React, {useState, useEffect, useLayoutEffect} from 'react';
import axios from 'axios';
import Icon from 'react-native-vector-icons/EvilIcons';

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

import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import FileCmp from './FileCmp';
import HomeworkCmp from './HomeworkCmp';
import QuizCmp from './QuizCmp';
import NoticeCmp from './NoticeCmp';
import ClassCmp from './ClassCmp';

const NavbarCmp = ({
  route,
  noticedata,
  homeworkdata,
  quizdata,
  filedata,
  classdata,
  navigation,
  classcolor,
}) => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === '홈') {
            iconName = focused ? 'navicon' : 'navicon';
          } else if (route.name === '파일') {
            iconName = focused ? 'paperclip' : 'paperclip';
          } else if (route.name === '과제') {
            iconName = focused ? 'archive' : 'archive';
          } else if (route.name === '퀴즈') {
            iconName = focused ? 'question' : 'question';
          } else if (route.name === '공지사항') {
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
      }}>
      <Tab.Screen
        name="홈"
        children={() => (
          <ClassCmp
            route={route}
            classdata={classdata}
            classcolor={classcolor}
          />
        )}
      />
      <Tab.Screen
        name="공지사항"
        children={() => <NoticeCmp route={route} noticedata={noticedata} />}
      />
      <Tab.Screen
        name="과제"
        children={() => (
          <HomeworkCmp route={route} homeworkdata={homeworkdata} />
        )}
      />
      <Tab.Screen
        name="퀴즈"
        children={() => <QuizCmp route={route} quizdata={quizdata} />}
      />
      <Tab.Screen
        name="파일"
        children={() => <FileCmp route={route} filedata={filedata} />}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({});

export default NavbarCmp;
