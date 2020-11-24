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
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import NavbarCmp from './NavbarCmp';

const ClassCmp = ({ navigation }) => {
    const [classdata, setClassdata] = useState();

    useEffect(() => {
        var axios = require('axios');
        var data = '';

        var config = {
        method: 'get',
        url: 'http://112.160.8.4:8000/api/user/class',
        headers: {},
        data: data,
        };

        axios(config)
        .then(function (response) {
            setClassdata(response.data.class);
        })
        .catch(function (error) {
            console.log(error);
        });
    }, []);

    const renderitem = ({item, index}) => {
        return (
          <TouchableOpacity style={styles.card}>
            <Text style={styles.title}>{item.class_name}</Text>
          </TouchableOpacity>
        );
    };
    const Stack = createStackNavigator();
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={NavbarCmp} />
        </Stack.Navigator>
      </NavigationContainer>
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

export default ClassCmp
