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

const HomeCmp = () => {
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
          <FlipCard
            style={styles.card}
            friction={4}
            perspective={1000}
            flipHorizontal={false}
            flipVertical={true}
            flip={false}
            clickable={true}
          >
              <View style={styles.item}>
                <Text style={styles.title}>{item.class_name}</Text>
                <Text style={{flex: 1, flexWrap: "wrap"}}>{item.division}</Text>
              </View>

              <View>
                <Text style={styles.title}>{item.title}</Text>
                <Text>{item.description}</Text>
                <TouchableOpacity onPress={() => Linking.openURL(item.class_link)} style={styles.downloadbtn}>
                  <Text style={styles.downloadbtntext}>
                    <Icon name="link" size={25} style={{alignItems: "center"}}/>
                    {item.title}
                  </Text>
                </TouchableOpacity>
              </View>
          </FlipCard>
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
