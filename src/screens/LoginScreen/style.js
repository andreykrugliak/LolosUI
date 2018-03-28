import {StyleSheet } from 'react-native'
export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#FFFFFF'
    },
    loloLogo:{
        height:68,
        width:200,
        alignSelf:'center',
        marginTop:20,
        resizeMode:'contain'
    },
    shoppingText:{
        textAlign:'center',
        color:'#000000',
        fontFamily:'lato',
        fontSize:18,
        fontWeight:'900',
        marginTop:13
    },
    threeImages:{
        height:50,
        width:123,
        alignSelf:'center',
        marginTop:77,
        resizeMode:'contain'
    },
    welcomeText:{
        color:'#FF4273',
        fontSize:34,
        alignSelf:'center',
        fontFamily:"PatuaOne-Regular",
        marginTop:19
    },
    inputText1:{
        height:60,
        marginHorizontal:24,
        backgroundColor:'#F0F0F0',
        marginTop:46
    },
    inputText2:{
        height:60,
        marginHorizontal:24,
        backgroundColor:'#F0F0F0',
        marginTop:18
    },
    buttonStyle:{
        backgroundColor:'#FF4273',
        height:70,
        justifyContent:'center',
        alignItems:'center',
        position:"absolute",
        left:0,
        right:0,
        bottom:0,
        borderRadius:0
    },
    buttonText:{
        color:'#FFF',
        fontFamily:'lato',
        fontSize:20,
        fontWeight:'900'
    },
    forgetPassword:{
        color:'#FF4273',
        fontFamily:'lato',
        fontSize:16,
        position:'absolute',
        bottom:91,
        alignSelf:'center'
    }
})