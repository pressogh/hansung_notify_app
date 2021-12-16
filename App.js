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

import FileCmp from './src/components/FileCmp';
import HomeworkCmp from './src/components/HomeworkCmp';
import QuizCmp from './src/components/QuizCmp';
import NoticeCmp from './src/components/NoticeCmp';
import HomeCmp from './src/components/HomeCmp';
import NavbarCmp from './src/components/NavbarCmp';
import ClassCmp from './src/components/ClassCmp';
import CalendarCmp from './src/components/CalendarCmp';

import AnimatedSplash from 'react-native-animated-splash-screen';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {URL} from './env.json';
import {getData} from './src/service/Api';

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
    ['삶과 꿈']: {color: '#B4281E'},
    ['IT프로그래밍']: {color: '#FF9800'},
    ['데이터의 이해']: {color: '#FFEB3B'},
    ['정보화사회와 정보보안']: {color: '#4CAF50'},
    ['다문화 여행과 세계시민성']: {color: '#3F51B5'},
    ['사고와 표현(발표와 토론)']: {color: '#673AB7'},
    ['디자인 Thinking']: {color: '#795548'},
    ['영어커뮤니케이션 청취/회화 Ⅱ']: {color: '#E91E63'},
  });

  const make_tomark = async () => {
    let calendar = {};
    for (let i = 0; i < day.length; i++) {
      let dotstemp = [];
      for (let j = 0; j < calendardata[day[i]].length; j++) {
        let temp = classcolor[calendardata[day[i]][j].class_name];
        dotstemp.push(temp);
      }
      calendar[day[i]] = {dots: dotstemp};
    }
    await setTomark(calendar);
    setTimeout(() => {
      setIsLoaded(true);
    }, 3000);
  };

  useEffect(() => {
    const get_data = async () => {
      setClassdata(await getData('class'));
      setHomeworkdata(await getData('homework'));
      setQuizdata(await getData('quiz'));
      setFiledata(await getData('file'));
      setCalendardata(await getData('calendar'));
    };

    get_data();
    make_tomark();
  }, []);

  const Stack = createStackNavigator();

  return (
    <AnimatedSplash
      translucent={false}
      isLoaded={isLoaded}
      logoImage={require('./assets/hansung-character.jpg')}
      backgroundColor={'white'}
      logoHeight={250}
      logoWidth={350}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home">
            {(props) => (
              <HomeCmp
                {...props}
                classdata={classdata}
                tomark={tomark}
                classcolor={classcolor}
              />
            )}
          </Stack.Screen>
          <Stack.Screen
            name="Class"
            options={({route}) => ({title: route.params.class_name})}>
            {(props) => (
              <NavbarCmp
                {...props}
                classdata={classdata}
                quizdata={quizdata}
                filedata={filedata}
                classcolor={classcolor}
              />
            )}
          </Stack.Screen>
          <Stack.Screen name="Calendar">
            {(props) => (
              <CalendarCmp
                {...props}
                calendardata={calendardata}
                day={day}
                tomark={tomark}
              />
            )}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </AnimatedSplash>
  );
};

const styles = StyleSheet.create({});

export default App;
