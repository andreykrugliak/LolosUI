import {StyleSheet} from 'react-native';
import { isIphoneX, ifIphoneX } from 'react-native-iphone-x-helper'

export default StyleSheet.create({
    container: {
        height:80,
        borderBottomWidth:1,
        borderBottomColor:'rgba(0,0,0,1)' 
    },
    imageContainer:{
        // position:'absolute',
        // top:28,
        // left:24,
        // height:30,
        // width:30
        ...ifIphoneX({
            top:56,
            zIndex:1
        },{
            top:35,
        
        }),
        left:24,
        position:'absolute',
    },
    backImage:{
        height:24,
        width:24,
    },
    text:{
        alignSelf:'center',
        fontSize:16,
        color:'black',
        fontFamily:'Lato-Regular',
        marginTop:35,
        fontWeight:'bold'
    }
})