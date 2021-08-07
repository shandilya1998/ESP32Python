import React from 'react';
import {
    View,
    Text
} from 'react-native';
import {styles} from '../assets/styles';
import { WebView } from 'react-native-webview';

const MainView = (props) => {
    return (
        <View style = {styles.mainViewContainer}>
            <WebView 
                source={{ uri: 'https://reactnative.dev/' }} 
                style={{
                    flex : 1, 
                }}/>
        </View>
    );
};

export default MainView;
