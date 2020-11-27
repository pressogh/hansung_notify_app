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
  const [noticedata, setNoticedata] = useState([]);
  const [homeworkdata, setHomeworkdata] = useState([]);
  const [quizdata, setQuizdata] = useState([]);
  const [filedata, setFiledata] = useState([]);

  const get_classdata = async () => {
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

  const get_noticedata = async () => {
    var axios = require('axios');
    var data = '';

    var config = {
      method: 'get',
      url: 'http://220.79.31.179:8000/api/user/notice',
      headers: {},
      data: data,
    };

    await axios(config)
    .then(function (response) {
        setNoticedata(response.data.notice);
    })
    .catch(function (error) {
        console.log(error);
    });
  }

  const get_homeworkdata = async () => {
    var axios = require('axios');
    var data = '';

    var config = {
      method: 'get',
      url: 'http://220.79.31.179:8000/api/user/homework',
      headers: {},
      data: data,
    };

    await axios(config)
    .then(function (response) {
        setHomeworkdata(response.data.homework);
    })
    .catch(function (error) {
        console.log(error);
    });
  }

  const get_quizdata = async () => {
    var axios = require('axios');
    var data = '';

    var config = {
      method: 'get',
      url: 'http://220.79.31.179:8000/api/user/quiz',
      headers: {},
      data: data,
    };

    await axios(config)
    .then(function (response) {
        setQuizdata(response.data.quiz);
    })
    .catch(function (error) {
        console.log(error);
    });
  }

  const get_filedata = async () => {
    var axios = require('axios');
    var data = '';

    var config = {
      method: 'get',
      url: 'http://220.79.31.179:8000/api/user/file',
      headers: {},
      data: data,
    };

    await axios(config)
    .then(function (response) {
        setFiledata(response.data.file);
    })
    .catch(function (error) {
        console.log(error);
    });
  }

  useEffect(() => {
    get_classdata();
    get_noticedata();
    get_homeworkdata();
    get_quizdata();
    get_filedata();
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
            {
              (props) => 
                <HomeCmp 
                  {...props}
                  classdata={classdata}
                  homeworkdata={homeworkdata}
                  quizdata={quizdata}
              />
            }
          </Stack.Screen>
          <Stack.Screen 
            name="Class"
            options={({ route }) => ({ title: route.params.class_name })}
          >
            {
              (props) => 
                <NavbarCmp
                  {...props}
                  classdata={classdata}
                  noticedata={noticedata}
                  homeworkdata={homeworkdata}
                  quizdata={quizdata}
                  filedata={filedata}
                />
            }
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </AnimatedSplash>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
