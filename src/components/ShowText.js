import React from 'react';
import {Text} from 'react-native';

const ShowText = ({text}) => {
    console.log("Show Text");
    return (
      <Text style = {styles.text}>{text || 0}</Text>
    );
};

export default ShowText;

const styles = {
  text:{
      fontSize:60
  }
};
