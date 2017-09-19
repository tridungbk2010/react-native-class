import React from 'react';
import {View, Text} from 'react-native';

const Box = ({bgColor, width, height, text}) => (<View style={{
        backgroundColor: bgColor,
        justifyContent: 'center',
        alignItems: 'center',
        flex:1
    }}>
        <Text style={{color: '#fff'}}>{text}</Text>
    </View>
);


export default Box;