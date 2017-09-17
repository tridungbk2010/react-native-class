import React, {Component} from 'react';
import {View, StyleSheet, Text, ActivityIndicator} from 'react-native';
// import ShowText from './components/ShowText';
import Child from './components/Child';
import ButtonComp from './components/Button';
import * as actions from './actions';
import {connect} from 'react-redux';
import _ from 'lodash';

class Main extends Component {

    handleIncrease = () => this.props.counterIncrease();
    handleDecrease = () => this.props.counterDecrease();
    handleStop = () => this.props.stopCounter();
    fetchUser = () => this.props.fetchUser();
    cancelRequest = () => this.props.cancelRequest();

    render() {
        return (
            <View style={{
                flex: 1,
                width: '100%',
                justifyContent: 'center'
            }}
            >
                <View style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <Child/>
                </View>
                {
                    this.props.loading ? <View style={styles.userInfo}>
                            <ActivityIndicator size='large'/>
                        </View> :
                        <View style={styles.userInfo}>
                            <View style={styles.textBlock}>
                                <Text style={styles.textUserInfo}>
                                    {`Name: ${this.props.userInfo.name}`}
                                </Text>
                                <Text style={styles.textUserInfo}>
                                    {`Position: ${this.props.userInfo.position}`}
                                </Text>
                                <Text style={styles.textUserInfo}>
                                    {`Email: ${this.props.userInfo.email}`}
                                </Text>
                            </View>
                        </View>
                }
                <View style={{flex: 1}}>
                    <View style={{
                        flexDirection: "row",
                        justifyContent: "space-between"
                    }}>
                        <View style={{width: '50%'}}>
                            <ButtonComp
                                title="Increase"
                                textColor="#fff"
                                bgColor="#397af8"
                                onPress={this.handleIncrease}/>
                        </View>
                        <View style={{width: '50%'}}>
                            <ButtonComp
                                title="Decrease"
                                bgColor="orange"
                                onPress={this.handleDecrease}/>
                        </View>
                    </View>
                    <ButtonComp
                        title="Stop"
                        bgColor="#009688"
                        onPress={this.handleStop}/>
                    <View style={{flexDirection: 'row'}}>
                        <ButtonComp
                            title="Get User Info"
                            bgColor="#00bcd4"
                            onPress={this.fetchUser}/>
                        <ButtonComp
                            title="Cancel request"
                            bgColor="#9E9E9E"
                            onPress={this.cancelRequest}/>
                    </View>

                </View>

            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    userInfo: state.userInfo,
    loading: state.loading
});

export default connect(mapStateToProps, actions)(Main);

const styles = StyleSheet.create({
    text: {
        fontSize: 24,
        fontWeight: "bold",
        color: 'red'
    },
    userInfo: {
        flex: 1,
        alignItems: 'center',
        justifyContent: "center"
    },
    textBlock: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: "center"
    },
    textUserInfo: {
        fontSize: 16,
        marginVertical: 4
    },
    btnStyle: {
        width: 100,
        height: 40,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: "red",
        backgroundColor: "#15c"
    },
});
