import React, {Component} from 'react';
import {View, Button, StyleSheet} from 'react-native';
import ShowText from './components/ShowText';
import Child from './components/Child';

export default class Main extends Component {
    state = {
        number: 0,
        bg:'green'
    };

    handleIncrease = () => {
        this.setState({number: this.state.number + 1})
    };

    handleDecrease = () => {
        this.setState({number: this.state.number - 1})
    };

    changBgColor = () => {
      this.setState({bg:this.state.bg === "green" ? "orange" :"green"});
    };
    render() {
        return (
            <View style = {{
              flex:1,
              width:'100%',
              justifyContent:'center',
              backgroundColor:this.state.bg}}>
                <Button
                    style={styles.btnStyle}
                    title="Increase"
                    color = "#15c"
                    onPress={this.handleIncrease}/>
                <ShowText text = {this.state.number}/>
                <Button
                    style={styles.btnStyle}
                    title="Decrease"
                    onPress={this.handleDecrease}/>
                <Button
                    style={styles.btnStyle}
                    title="Change bg-color"
                    onPress={this.changBgColor}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    text:{
        fontSize:24,
        fontWeight:"bold",
        color:'red'
    },
    btnStyle:{
        width:100,
        height:40,
        borderWidth:1,
        borderStyle:'solid',
        borderColor:"red",
        backgroundColor:"#15c"
    },
});
