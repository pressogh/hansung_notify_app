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

import FlipCard from 'react-native-flip-card';
import Icon from 'react-native-vector-icons/EvilIcons';

const HomeCmp = ({ navigation, classdata }) => {
    const renderitem = ({item, index}) => {
        return (
          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Class', {class_name: item.class_name})}>
              <View style={styles.item}>
                <Text style={styles.title}>{item.class_name}</Text>
                <Text style={{flex: 1, flexWrap: "wrap"}}>{item.division}</Text>
              </View>
          </TouchableOpacity>
        );
    };
    return (
        <View style={styles.container}>
          <FlatList
            data={classdata}
            renderItem={renderitem}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
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
      marginTop: 10,
    },
    
    downloadbtn: {
      marginTop: 10,
      backgroundColor: "#0081ff",
      padding: 10,
      borderRadius: 10,
      alignItems: "center",
    },

    downloadbtntext: {
      color: "white"
    },

    title: {
      fontSize: 16,
      paddingBottom: 10,
      fontWeight: "bold",
      flex: 11,
    },
  });

export default HomeCmp
