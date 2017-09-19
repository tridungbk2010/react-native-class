import React from 'react';
import 'rxjs';
// import Main from './src/Main';
import {Provider} from 'react-redux';
import store from './src/store';
import FlexBox from "./src/screens/FlexBox";

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <FlexBox/>
            </Provider>
        );
    }
}
