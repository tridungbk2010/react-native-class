import React, {Component} from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';
import * as actions from './actions';
import ShowText from './components/ShowText';
import Child from './components/Child';
import ButtonComp from './components/Button';


class Main extends Component {
    state = {
        number: 0,
        bg:'green'
    };

    handleIncrease = () => {
        this.props.counterIncrease();
    };

    handleDecrease = () => {
        this.props.counterDecrease();
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

                <Child/>

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

export default connect(null, actions)(Main);
