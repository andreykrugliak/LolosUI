import {StyleSheet,Platform, Dimensions} from 'react-native';
let windowWidth= Dimensions.get('window').width
let windowHeight= Dimensions.get('window').height
export default StyleSheet.create({
    container:{
        zIndex:1000,
        backgroundColor:'white',
        height:windowHeight
        //zIndex:1000,
    },
    logo:{
        height:68,
        //marginHorizontal:88,
        resizeMode:'contain',
        marginTop:68,
        width:200,
        alignSelf:'center'
    },
    shoppingText:{
        color:'#000000',
        fontFamily:'lato',
        fontWeight:'900',
        fontSize:18,
        alignSelf:'center',
        marginTop:13
    },
    homeLogo:{
        height:40,
        width:40,
        resizeMode:'contain',
        alignSelf:'center',
        marginTop:82
    },
    loloText:{
        color:'#FF4273',
        fontSize:34,
        alignSelf:'center',
        fontFamily:"PatuaOne-Regular",
        marginTop:24
    },
    featureText:{
        color:'#000000',
        fontFamily:"lato",
        textAlign:'center',
        fontSize:22,
        marginHorizontal:32,
        flexWrap:'wrap'
    },
    arrowImage:{
        alignSelf:'center',
        height:24,
        width:24,
        resizeMode:'contain',
        position:'absolute',
        bottom:176
    },
    footerImage:{
        
        position:'absolute',
        bottom:0,
        width:windowWidth,
        ...Platform.select({
            ios:{
                height:0.21066666666*windowWidth,
            },
            android:{
                resizeMode:'contain',
                height:0.3*windowWidth,
            }
        })
        
       
        
    },
   
    
    wallet:{
        position:'absolute',
        alignSelf:'center',
        
        resizeMode:'contain',
        bottom:78,
        height:165
    },
    smiley:{
        height:120,
        width:120,
        alignSelf:'center',
        position:'absolute',
        bottom:105
    },
    threeSmile:{
        height:50,
        alignSelf:'center',
        width:123,
        marginTop:77
    },
    startText:{
        color:'#FF4273',
        fontSize:34,
        alignSelf:'center',
        fontFamily:"PatuaOne-Regular",
        marginTop:24
    },
    buttonView:{
        justifyContent:'center',
        alignItems:'center',
        marginHorizontal:93,
        borderColor:'#FF4273',
        borderRadius:3,
        borderWidth:1,
        height:60,
        backgroundColor:'white',
        width:windowWidth-186,
        position:'absolute',
        bottom:133
    },
    buttonText:{
        color:'#FF4273',
        fontFamily:'lato',
        fontSize:18,
        fontWeight:"900"
    },
    footerTextView:{
        position:'absolute',
        bottom:30,
        flexDirection:'row',
        flexWrap:'wrap',
        //alignSelf:'center',
        justifyContent:'center',
        marginHorizontal:47,
        

    },
    footerText:{
        
        fontFamily:'lato',
        fontSize:14,
    }
})