import React from 'react';
import {View, Text} from 'react-native';
import Box from './Box';

export default class FlexBox extends React.Component {

    render() {
        return (
            <View style={styles.layout}>
                <Box bgColor = "#009869" text = "box 1"/>
                <Box bgColor = "#0091EA" text = "box 2"/>
                <Box bgColor = "#3F51B5" text = "box 3"/>
            </View>
        )
    }

}

const styles = {
    layout: {
        // flexDirection:'row',
        // alignItems:'center',
        // justifyContent:'flex-start'
    }
};