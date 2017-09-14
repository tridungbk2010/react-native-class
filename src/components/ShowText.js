import React from 'react';
import {Text} from 'react-native';

const ShowText = ({text}) => {
    console.log("Show Text");
    return (
      <Text>{text || 0}</Text>
    );
}

export default ShowText;
