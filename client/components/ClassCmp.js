import React from 'react'

import {View, Text} from 'react-native';

const ClassCmp = ({ route }) => {
  return (
    <Text>
      This is {route.params.class_name}
    </Text>
  )
}

export default ClassCmp