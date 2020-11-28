import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

import { Agenda } from 'react-native-calendars';

const CalendarCmp = ({ route }) => {
    return (
        <Agenda 
            items={{
                '2020-11-05': [{name: "a"}, {name: 'b'}],
                '2020-11-06': [{name: "c"}],
            }}
            renderItem={(item, firstItemInDay) => {return (<View style={styles.card}><Text>{item.name}</Text></View>);}}
            selected={route.params.selected}
        />
    )
}

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
      backgroundColor: "white",
      borderRadius: 15,
      padding: 10,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.8,
      shadowRadius: 2,
      elevation: 4,
      marginLeft: 5,
      marginRight: 5,
      marginBottom: 10,
    },

    title: {
      fontSize: 16,
      paddingBottom: 10,
      fontWeight: "bold",
      flex: 11,
    },
  });

export default CalendarCmp
