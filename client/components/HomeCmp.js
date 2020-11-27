import React, {useState, useEffect} from 'react';
import axios from 'axios';

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
  Button,
} from 'react-native';

import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';

const HomeCmp = ({ navigation, classdata }) => {
  const renderBottomSheet = () => (
    <View
      style={{
        paddingTop: 8,
        paddingRight: 16,
        paddingLeft: 16,
        height: 320,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        alignItems: "center",
      }}
    >
      <View style={{
        backgroundColor: '#252525',
        width: 200,
        height: 10,
        borderRadius: 20,
        marginBottom: 20,
      }} />
      
      <Calendar
        onDayPress={(day) => {console.log('selected day', day)}}
        style={{
          width: 425,
          height: 500,
          borderRadius: 30,
        }}
      />
    </View>
  );

  const sheetRef = React.useRef(null);

  const renderitem = ({item, index}) => {
    return (
      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Class', { class_name: item.class_name })}>
          <View style={styles.item}>
            <Text style={styles.title}>{item.class_name}</Text>
            <Text style={{flex: 1, flexWrap: "wrap"}}>{item.division}</Text>
          </View>
      </TouchableOpacity>
    );
  };

  return (
    <>
      <View style={styles.container}>
        <FlatList
          data={classdata}
          renderItem={renderitem}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>

      <BottomSheet
        ref={sheetRef}
        snapPoints={['50%', '3%']}
        renderContent={renderBottomSheet}
        initialSnap={1}
        enabledContentTapInteraction={false}
        enableSwipeMonths={true}
      />
    </>
  );
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

export default HomeCmp
