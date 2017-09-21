import { registerRootComponent } from 'expo';
import React from 'react';
import { StyleSheet, View, Dimensions, Text } from 'react-native';
import 'rxjs';
import Main from './screens/Main';
import Welcome from './screens/Welcome';
import Photos from './screens/Photos';
import Users from './screens/Users';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import store from './store';

const { width } = Dimensions.get('window');

export default class App extends React.Component {
    render() {
        const MainNavigator = TabNavigator({
            welcome: { screen: Welcome },
            main: { screen: Main }
        });

        return (
            <Provider store={store}>
                <MainNavigator>
                    <View style={styles.container}>
                        <Main />
                    </View>
                </MainNavigator>
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        width,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

registerRootComponent(App);
