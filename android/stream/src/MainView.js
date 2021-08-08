import React from 'react';
import {
    SafeAreaView,
    Text
} from 'react-native';
import {styles} from '../assets/styles';
import { WebView } from 'react-native-webview';

const MainView = (props) => {
    const mjpegUrl = 'http://192.168.1.12:81'
    return (
        <SafeAreaView style = {styles.mainViewContainer}>
            <WebView 
                automaticallyAdjustContentInsets={true}
                scalesPageToFit={true}
                startInLoadingState={false}
                contentInset={{top: 0, right: 0, left: 0, bottom: 0}}
                scrollEnabled={false}
                source={{html: formatHtml(mjpegUrl), baseUrl: '/'}}
                style={{
                    flex : 1, 
                }}/>
        </SafeAreaView>
    );
};

const formatHtml = (mjpegUrl) => {
    return (
        '<html><body><img src="' + mjpegUrl + '" width="100%" style="background-color: white; min-height: 100%; min-width: 100%; position: fixed; top: 0; left: 0;"></body></html>');
}

export default MainView;
