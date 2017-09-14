import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import ShowText from './components/ShowText';
import Child from './components/Child';
import ButtonComp from './components/Button';


export default class Main extends Component {
    state = {
        number: 0,
        bg:'green'
    };

    handleIncrease = () => {
        this.setState({number: this.state.number + 1})
    };

    handleDecrease = () => {
        this.setState({number: this.state.number - 1});
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
                <ButtonComp
                    title="Increase"
                    textColor = "#000"
                    bgColor = "#397af8"
                    onPress={this.handleIncrease}/>

                <ShowText text = {this.state.number}/>

                <ButtonComp
                    title="Decrease"
                    bgColor = "orange"
                    onPress={this.handleDecrease}/>

                <ButtonComp
                    textColor = "#000"
                    title="Change bg-color"
                    bgColor = "#f0f0f0"
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
