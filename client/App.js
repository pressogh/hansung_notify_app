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

import FileCmp from './components/FileCmp';
import HomeworkCmp from './components/HomeworkCmp';
import QuizCmp from './components/QuizCmp';
import NoticeCmp from './components/NoticeCmp';
import HomeCmp from './components/HomeCmp';
import NavbarCmp from './components/NavbarCmp';
import ClassCmp from './components/ClassCmp';

import AnimatedSplash from "react-native-animated-splash-screen";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [classdata, setClassdata] = useState([]);

  useEffect(() => {
    const get_data = async () => {
      var axios = require('axios');
      var data = '';

      var config = {
        method: 'get',
        url: 'http://220.79.31.179:8000/api/user/class',
        headers: {},
        data: data,
      };

      await axios(config)
      .then(function (response) {
          setClassdata(response.data.class);
      })
      .catch(function (error) {
          console.log(error);
      });
    }
    get_data();
  }, []);

  setTimeout(() => {
    setIsLoaded(true)
  }, 3000);

  const Stack = createStackNavigator();

  return (
    <AnimatedSplash
      translucent={false}
      isLoaded={isLoaded}
      logoImage={require("./assets/hansung-character.jpg")}
      backgroundColor={"white"}
      logoHeight={250}
      logoWidth={350}
    >
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home">
            {props => <HomeCmp {...props} classdata={classdata} />}
          </Stack.Screen>
          <Stack.Screen 
            name="Class"
            component={NavbarCmp}
            options={({ route }) => ({ title: route.params.class_name })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </AnimatedSplash>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
