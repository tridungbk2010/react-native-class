import React,{Component} from 'react';
import {View, Text} from 'react-native';

export default class Child extends Component{
  constructor(props) {
    super(props);
    console.log("Constructor");
  }

  componentWillMount(){
    console.log("componentWillMount");
  }

  componentDidMount(){
    console.log("componentDidMount");
  }

  componentWillReceiveProps(nextProps){
    console.log("componentWillReceiveProps");
  }

  shouldComponentUpdate(nextProps, nextState){
      if(nextProps.text !== this.props.text){
        console.log("shouldComponentUpdate");
        return true;
      }
      return false;
  }

  componentWillUpdate(nextProps, nextState){
    if(nextProps.text >= 2){
        console.log("componentWillUpdate after click 2 times");
    }else {
    console.log("componentWillUpdate");
    }

  }

  componentDidUpdate(prevProps, prevState){
    console.log("componentDidUpdate");
  }

  render(){
    console.log("Render");
    return(
      <View>
        <Text>{this.props.text}</Text>
      </View>
    )
  }
}
