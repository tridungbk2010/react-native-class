import React from 'react';
import {View, Animated, Easing, Dimensions, TextInput, Text} from 'react-native';
import {Icon} from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width;

class Welcome extends React.Component {
    static navigationOptions = {
        title: 'Welcome',
        tabBarIcon: ({tintColor}) => (
            <Icon
                name='plus'
                type='font-awesome'
                color={tintColor}
            />
        )
    };

    state = {
        x: null,
        y: null,
        marginLeft: new Animated.Value(0),
        opacity: new Animated.Value(0)
    };

    onPress = (evt) => {
        console.log('onPress');
        const {locationX, locationY} = evt.nativeEvent;
        this.setState({
            x: locationX,
            y: locationY
        });
    };

    onMove = (evt) => {
        const {locationX, locationY} = evt.nativeEvent;
        const {x, y} = this.state;
        const dist = (locationX - x);
        this.setState({
            marginLeft: new Animated.Value(dist),
            opacity: new Animated.Value(dist / SCREEN_WIDTH)
        });
    };

    onRelease = (evt) => {
        console.log('onRelease', evt.nativeEvent);
        const {x, y} = this.state;
        const {locationX, locationY} = evt.nativeEvent;
        this.forceSwipe();
    };

    onSwipeComplete = () => {
        console.log('swipe is done!');
    };

    forceSwipe = () => {
        const marginLeft = Animated.timing(this.state.marginLeft, {
            toValue: 100,
            duration: 500,
            easing: Easing.bounce
        });

        const opacity = Animated.timing(this.state.opacity, {
            toValue: 0,
            duration: 300,
            easing: Easing.bounce
        });

        Animated.parallel([marginLeft, opacity]).start(() => this.onSwipeComplete());
    };


    render() {
        const marginLeft = this.state.marginLeft.interpolate({
            inputRange: [-SCREEN_WIDTH, 0, SCREEN_WIDTH],
            outputRange: [-SCREEN_WIDTH, 0, SCREEN_WIDTH]
        });
        const opacity = this.state.opacity.interpolate({
            inputRange: [-1, 0, 1],
            outputRange: [0, 1, 0]
        });
        return (
            <View
                onStartShouldSetResponder={() => true}
                onMoveShouldSetResponder={() => true}
                onResponderMove={this.onMove}
                onResponderGrant={this.onPress}
                onResponderRelease={this.onRelease}
                style={styles.box}
            >
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <View
                        style={{
                            flex: 5,
                            flexDirection: 'row',
                            alignItems: 'center',
                            backgroundColor: '#fff'
                        }}
                    >
                        <View
                            style={{
                                flex: 1
                            }}
                        >
                            <Icon
                                name='bars'
                                type='font-awesome'
                                color="#000"
                            />
                        </View>
                        <View
                            style={{
                                flex: 5
                            }}
                        >
                            <TextInput
                                style={{
                                    height: 40,
                                    borderColor: '#fff',
                                    borderWidth: 1
                                }}
                                onChangeText={() => {
                                }}
                                value={this.state.text}
                            />
                        </View>

                    </View>
                    <View
                        style={{
                            flex: 1
                        }}
                    >
                        <Icon
                            name='shopping-cart'
                            type='font-awesome'
                            color="#fff"
                        />
                    </View>
                </View>
                <Animated.Image
                    source={require('../assets/photos/react.png')}
                    style={{marginLeft, opacity, width: 300, resizeMode: 'center'}}
                />
            </View>
        );
    }
}

export default Welcome;

const styles = {
    box: {
        flex: 1,
        backgroundColor: '#009688',
        paddingTop: 40,
        // justifyContent: 'center',
        // alignItems: 'center'
    },
    textStyle: {
        color: '#fff'
    }
};
