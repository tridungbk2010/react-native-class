import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Main extends React.Component {
    static navigationOptions = {
        title: 'Main',
        size: 'raised',
        tabBarPosition: 'top',
        tabBarIcon: ({ tintColor }) => (
            <Icon
                name='home'
                type='font-awesome'
                color={tintColor}
            />
        )
    };

    handleIncrement = () => {
        this.props.increaseNumber();
    };

    handleDecrement = () => {
        this.props.decreaseNumber();
    };

    render() {
        const { counter } = this.props;
        return (
            <View style={styles.main}>
                <View style={styles.number}>
                    <Text style={styles.textNumber}>{counter}</Text>
                </View>
                <View style={styles.groupButton}>
                    <View style={styles.btnWrapper}>
                        <TouchableOpacity
                            onPress={this.handleIncrement}
                            style={styles.btn}
                        >
                            <Icon
                                name='plus'
                                size={20}
                                type='font-awesome'
                                color={'#fff'}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={this.handleDecrement}
                            style={styles.btn}
                        >
                            <Icon
                                name='minus'
                                size={20}
                                type='font-awesome'
                                color={'#fff'}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = {
    main: {
        flex: 1,
        backgroundColor: '#0091EA'
    },
    textStyle: {
        fontSize: 30,
        color: '#fff'
    },
    textNumber: {
        fontSize: 80,
        color: '#fff',
        fontWeight: 'bold'
    },
    number: {
        flex: 9,
        alignItems: 'center',
        justifyContent: 'center'
    },
    btn: {
        height: 50,
        width: 100,
        borderRadius: 40,
        borderWidth: 1,
        borderColor: '#fff',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        marginHorizontal: 30
    },
    btnWrapper: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'center',
        marginBottom: 50
    },
    groupButton: {
        //     flex: 1
    }
};

const mapStateToProps = (state) => ({
    counter: state.counter
});
export default connect(mapStateToProps, actions)(Main);
