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
import CalendarCmp from './components/CalendarCmp';

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
  const [calendardata, setCalendardata] = useState([]);
  const [day, setDay] = useState([]);
  const [tomark, setTomark] = useState([]);
  const [classcolor, setClasscolor] = useState({
    ["삶과 꿈"]: {color: "#FB8C65"},
    ["IT프로그래밍"] : {color: "#B4281E"},
    ["데이터의 이해"]: {color: "#442F51"},
    ["정보화사회와 정보보안"]: {color: "#2D4441"},
    ["다문화 여행과 세계시민성"]: {color: "#58805F"},
    ["사고와 표현(발표와 토론)"]: {color: "#8CB3AF"},
    ["디자인 Thinking"]: {color: "#67B09C"},
    ["영어커뮤니케이션 청취/회화 Ⅱ"]: {color: "#46879E"},
  });

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

  const get_calendardata = async () => {
    var axios = require('axios');
    var data = '';

    var config = {
      method: 'get',
      url: 'http://220.79.31.179:8000/api/user/calendar',
      headers: {},
      data: data,
    };

    await axios(config)
    .then(function (response) {
        setCalendardata(response.data.calendar);
        setDay(response.data.day)
    })
    .catch(function (error) {
        console.log(error);
    });
  }

  const make_tomark =  () => {
    let calendar = {}
    for (let i = 0; i < day.length; i++) {
      let dotstemp = []
      for (let j = 0; j < calendardata[day[i]].length; j++) {
        let temp = classcolor[calendardata[day[i]][j]["class_name"]]
        dotstemp.push(temp);
      }
      calendar[day[i]] = {dots: dotstemp}};
    setTomark(calendar)
  }

  useEffect(() => {
    async function get_dataes() {
      await get_classdata();
      await get_noticedata();
      await get_homeworkdata();
      await get_quizdata();
      await get_filedata();
      await get_calendardata();
      await make_tomark();
    }
    get_dataes();
    setTimeout(() => {
      setIsLoaded(true);
    }, 3000);
    make_tomark();
  }, []);  

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
                tomark={tomark}
                classcolor={classcolor}
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
          <Stack.Screen name="Calendar">
            {
              (props) => 
                <CalendarCmp 
                  {...props}
                  calendardata={calendardata}
                  day={day}
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
