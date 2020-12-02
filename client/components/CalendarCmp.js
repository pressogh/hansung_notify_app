import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {Agenda} from 'react-native-calendars';

const CalendarCmp = ({ route }) => {
  const [tomark, setTomark] = useState([]);
  const [calendardata, setCalendardata] = useState([]);
  const [day, setDay] = useState([]);

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
        setDay(response.data.day);
        let calendar = {}
        for (let i = 0; i < day.length; i++) {
          let dotstemp = [];
          for (let j = 0; j < calendardata[day[i]].length; j++) {
            let temp = route.params.classcolor[calendardata[day[i]][j]["class_name"]];
            dotstemp.push(temp)
          }
          calendar[day[i]] = {dots: dotstemp}};
        setTomark(calendar)
        console.log(tomark)
    })
    .catch(function (error) {
        console.log(error);
    });
  }

  useEffect(() => {
    get_calendardata();
  }, []);

  return (
    <Agenda
      items={{
        ["2020-09-08"]: [
          {name: "디자인 Thinking", title: "디자인씽킹_1주차활동_한줄 자기소개", due_date: "2020-09-08 00:00"},
        ],
        ["2020-09-15"]: [
          {name: "정보화사회와 정보보안", title: "자기 소개", due_date: "2020-09-15 00:00"},
          {name: "디자인 Thinking", title: "디자인씽킹_2주차 활동_디자인씽킹 프로세스 이해하기", due_date: "2020-09-15 00:00"},
        ],
      }}
      renderItem={(item, firstItemInDay) => {
        return (
          <View style={styles.card}>
            <Text style={styles.title}>{item.name}</Text>
            <Text>{item.title}</Text>
            <Text>{item.due_date}</Text>
          </View>
        );
      }}
      selected={route.params.selected}
      markedDates={{...tomark}}
      markingType={'multi-dot'}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingTop: 15,
    paddingRight: 15,
    paddingLeft: 15,
  },

  item: {
    padding: 5,
    flexDirection: 'row',
  },

  card: {
    backgroundColor: 'white',
    padding: 10,
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 10,
    borderRadius: 10,
  },

  title: {
    fontSize: 16,
    paddingBottom: 10,
    fontWeight: 'bold',
    flex: 11,
  },
});

export default CalendarCmp;
