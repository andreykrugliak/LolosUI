import {StyleSheet,Platform} from 'react-native';
import { isIphoneX, ifIphoneX } from 'react-native-iphone-x-helper'

export default StyleSheet.create({
    container: {
        height:80,
        shadowOpacity:0.3,
        shadowColor:'rgba(0,0,0,0.20)',
        shadowOffset:{width:0,height:2},
        justifyContent:'center',
        backgroundColor:'#fff',
        elevation:Platform.OS=='android'?3:0,
    },
    imageContainer:{
        left:14,
        position:'absolute',
        width:50
      //  top:10,
    },
    backImage:{
        height:24,
        width:24,
        marginLeft:10,
        marginTop:Platform.OS=='android'?0:10,
    },
    text:{
        alignSelf:'center',
        fontSize:16,
        paddingTop:Platform.OS=='android'?0:10,
        color:'black',
        fontFamily:'Lato-Regular',
        fontWeight:'bold',
        textAlign:'center'
    }
})