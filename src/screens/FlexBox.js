import React from 'react';
import {View, Text} from 'react-native';
import Box from './Box';


export default class FlexBox extends React.Component {

    render() {
        return (
            <View style={styles.layout}>
                <View style ={{
                    flex:1

                }}>
                    <Box bgColor = "#009869" text = "box 1"/>
                </View>
                <View style ={{
                    flex:1,
                }}>
                    <Box bgColor = "#0277BD" text = "box 2"/>
                </View>

            </View>
        )
    }

}

const styles = {
    layout: {
        // flexDirection:"row",
        backgroundColor:'orange',
        flex:1,
        justifyContent:'center',
        alignItems:'stretch'
    }
};