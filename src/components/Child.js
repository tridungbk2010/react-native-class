import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {connect} from 'react-redux';


class Child extends Component {
    constructor(props) {
        super(props);
        console.log("Constructor");
    }

    // componentWillMount(){
    //   console.log("componentWillMount");
    // }
    //
    // componentDidMount(){
    //   console.log("componentDidMount");
    // }
    //
    // componentWillReceiveProps(nextProps){
    //   console.log("componentWillReceiveProps");
    // }
    //
    // shouldComponentUpdate(nextProps, nextState){
    //     if(nextProps.text !== this.props.text){
    //       console.log("shouldComponentUpdate");
    //       return true;
    //     }
    //     return false;
    // }
    //
    // componentWillUpdate(nextProps, nextState){
    //   if(nextProps.text >= 2){
    //       console.log("componentWillUpdate after click 2 times");
    //   }else {
    //   console.log("componentWillUpdate");
    //   }
    //
    // }
    //
    // componentDidUpdate(prevProps, prevState){
    //   console.log("componentDidUpdate");
    // }

    render() {
        console.log("child", this.props.counter);
        return (
            <View>
                <Text style = {styles.text} >{this.props.counter}</Text>
            </View>
        )
    }
}

const mapStateToProps = state => ({
    counter: state.counter
});

export default connect(mapStateToProps, null)(Child);

const styles =StyleSheet.create({
    text: {
        fontSize: 100,
        color:'#000',
    }
});
