import {Platform, StyleSheet, Dimensions, PixelRatio} from "react-native";
const PRIMARY_COLOR = "#7444C0";
const SECONDARY_COLOR = "#5636B8";
const WHITE = "#FFFFFF";
const GRAY = "#757E90";
const DARK_GRAY = "#363636";
const BLACK = "#000000";
const PEACH = "#ffe5b4";
const NAVY_BLUE = "#000080";
const SILVER = "#C0C0C0";

const ONLINE_STATUS = "#46A575";
const OFFLINE_STATUS = "#D04949";

const STAR_ACTIONS = "#FFA200";
const LIKE_ACTIONS = "#B644B2";
const DISLIKE_ACTIONS = "#363636";
const FLASH_ACTIONS = "#5028D7";

const ICON_FONT = "tinderclone";
const DIMENSION_WIDTH = Dimensions.get("window").width;
const DIMENSION_HEIGHT = Dimensions.get("window").height;

export const colors = {
        black: '#1a1917',
        gray: '#888888',
    background1: '#B721FF',
    background2: '#21D4FD'
};

function wp (percentage) {
  const value = (percentage * DIMENSION_WIDTH) / 100; 
  return Math.round(value);
}

const listItemmargin = ((DIMENSION_WIDTH -100)/6 - 30)/2

const itemHorizontalMargin = wp(2);
export const sliderWidth = wp(60);
export const itemWidth = sliderWidth + itemHorizontalMargin * 2; 

export const styles = StyleSheet.create({
    mainViewContainer : {
        flex : 1,
        position : 'relative',
        margin : 2,
        alignSelf : 'stretch',
        justifyContent : 'center',
        backgroundColor : 'white',
    },
});
