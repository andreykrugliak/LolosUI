import {StyleSheet,Dimensions} from 'react-native'
import { ifIphoneX } from 'react-native-iphone-x-helper';
deviceWidth=Dimensions.get("window").width

export default StyleSheet.create({
    container:{
        paddingTop:10,
        paddingLeft:10,
        paddingRight:10,   
    },
    card:{
        flexDirection:'row',
        padding:7,
        backgroundColor:'#fff',
        borderRadius:2,
        
    },
    productIcon:{
        height:100,
        width:100,
        marginRight:19,
        //borderWidth:1,
    },
    detail:{
        flexWrap: 'wrap',
        flex:1,
    },
    title:{
        marginRight:10,
        fontSize:12,
        color:'#000',
        fontFamily:'Lato-Regular',
       
    },
    label:{
        width:70,
        height:24,
        backgroundColor:'#FF4273', 
        //marginTop:7,   
        alignItems:'center',
        justifyContent:'center',
        position:'absolute',
        bottom:20,
        borderRadius:2,
    },
    labelText:{
        fontSize:13,
        color:'#fff',
        fontFamily:"PatuaOne-Regular",
    },
    extraInfo:{
        //marginTop:5,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        position:'absolute',
        right:10,
        bottom:0,
        width:deviceWidth-156,

        //borderWidth:1,
    },
    shippingText:{
        fontSize:10,
        color:'#9B9B9B',
        fontFamily:'Lato-Regular',
        fontWeight:'bold',
        backgroundColor:'transparent'
    },
    extraInfoLabel:{
        //borderWidth:1,
        borderRadius:20,
        height:24,
        width:81,
        backgroundColor:'#F0F0F0',
        alignItems:'center',
        //justifyContent:'center',
        flexDirection:'row',  
        marginBottom:5 
    },
    extraInfoIcon:{
        height:16,
        width:12,
        marginLeft:5,
       
    },
    superHotText:{
        //paddingLeft:4,
        fontSize:10,
        color:'#000',
        fontFamily:"PatuaOne-Regular",
        marginLeft:7,
       
     },
     header:{
         
         height:80,
         alignItems:'center',
         backgroundColor:'#fff',
         flexDirection:'row',
         //paddingHorizontal:17,
         justifyContent:'space-between',
     },
     leftButton:{
         height:16,
         width:16,
         marginLeft:27,
         paddingRight:10,
         ...ifIphoneX({marginTop:25},{})
     },
     headerText:{
        fontFamily:'Lato-Regular',
         fontSize:18,
         fontWeight:'bold',
         ...ifIphoneX({marginTop:25},{})
     },
     rightButton:{

         height:18,
         width:18,
         marginRight:27,
         paddingLeft:10,
         ...ifIphoneX({marginTop:25},{})
     },
     tabBar:{
       
         height:50,
     },


})