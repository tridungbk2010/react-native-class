import React, {Component} from 'react';
import {Button} from 'react-native-elements';

export default class ButtonComp extends Component {

  render(){
    const {title, onPress, bgColor, textColor} = this.props;
    return (
        <Button
            borderRadius = {8}
            style = {{
                marginBottom:10
            }}
          backgroundColor = {bgColor}
          title = {title}
          color = {textColor}
          onPress = {onPress}/>
    )
  }

}
