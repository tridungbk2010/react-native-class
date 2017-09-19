import React from 'react';
import {View, Text} from 'react-native';

const Box = ({bgColor, width, height, text}) => {
    return (
       <View style = {{
           backgroundColor:bgColor,
           width:width || 100,
           height:height || 100,
           justifyContent:'center',
           alignItems:'center'
       }}>
           <Text style ={{color:'#fff'}}>{text}</Text>
       </View>
    )
};


export default Box;