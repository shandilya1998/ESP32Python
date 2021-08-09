import React from 'react';
import {
    View,
    SafeAreaView,
    Text
} from 'react-native';
import {styles} from '../assets/styles';
import { WebView } from 'react-native-webview';
import AxisPad from 'react-native-axis-pad';

const MainView = (props) => {
    const mjpegUrl = 'http://192.168.1.12:81'
    return (
        <View style = {styles.mainViewContainer}>
            <View style = {styles.mjpegStreamViewContainer}>
                <WebView 
                    automaticallyAdjustContentInsets={true}
                    scalesPageToFit={true}
                    startInLoadingState={false}
                    contentInset={{top: 0, right: 0, left: 0, bottom: 0}}
                    scrollEnabled={false}
                    source={{html: formatHtml(mjpegUrl), baseUrl: '/'}}/>
            </View>
            <View style = {styles.controllerContainer}>
                <View style={styles.buttonsContainer}>
                    <Text>This is a test</Text>
                </View>
                <View style={styles.axisPadContainer}>
                    <AxisPad
                        size={100}
                        handlerSize={50}
                        resetOnRelease={true}
                        autoCenter={true}
                        onValue={({ x, y }) => {
                            // values are between -1 and 1
                            console.log('Right', x, y);
                        }} />
                </View>
            </View>
        </View>
    );
};

const formatHtml = (mjpegUrl) => {
    return (
        '<html><body><img src="' + mjpegUrl + '" width="100%" style="background-color: white; min-height: 100%; min-width: 100%; position: fixed; top: 0; left: 0;"></body></html>');
}

export default MainView;
