import React from 'react';
import {
    SafeAreaView,
    Text
} from 'react-native';
import {styles} from '../assets/styles';
import { WebView } from 'react-native-webview';

const MainView = (props) => {
    return (
        <SafeAreaView style = {styles.mainViewContainer}>
            <WebView 
                source={{ uri: 'https://reactnative.dev/' }} 
                style={{
                    flex : 1, 
                }}/>
        </SafeAreaView>
    );
};

export default MainView;
