import {StyleSheet, Dimensions} from 'react-native';
let WindowWidth= Dimensions.get('window').width
let WindowHeight= Dimensions.get('window').height
const iphone5s = 568
export default StyleSheet.create({
    container:{
        zIndex:1000,
        backgroundColor:'white',
        height:WindowHeight
        //zIndex:1000,
    },
    logo:{
        height:68,
        marginHorizontal:88,
        resizeMode:'contain',
        marginTop:WindowHeight<= iphone5s?58:68,
        width:200
    },
    shoppingText:{
        color:'#000000',
        fontFamily:'lato',
        fontWeight:'900',
        fontSize:WindowHeight<= iphone5s?14:18,
        alignSelf:'center',
        marginTop:WindowHeight<= iphone5s?10:13
    },
    homeLogo:{
        height:40,
        width:40,
        resizeMode:'contain',
        alignSelf:'center',
        marginTop:WindowHeight<= iphone5s?62:82
    },
    loloText:{
        color:'#FF4273',
        fontSize:WindowHeight<= iphone5s?24:34,
        alignSelf:'center',
        fontFamily:"PatuaOne-Regular",
        marginTop:WindowHeight<= iphone5s?20:24
    },
    featureText:{
        color:'#000000',
        fontFamily:"lato",
        textAlign:'center',
        fontSize:WindowHeight<= iphone5s?18:22,
        marginHorizontal:32,
        flexWrap:'wrap'
    },
    arrowImage:{
        alignSelf:'center',
        height:24,
        width:24,
        resizeMode:'contain',
        position:'absolute',
        bottom:WindowHeight<= iphone5s?140:176
    },
    footerImage:{
       
        position:'absolute',
        bottom:0,
      
        left:0,
        right:0,
        height:80,
        width:WindowWidth
    },
    
    wallet:{
        position:'absolute',
        alignSelf:'center',
        resizeMode:'contain',
        bottom:WindowHeight<= iphone5s?40:78,
        height:165
    },
    smiley:{
        height:120,
        width:120,
        alignSelf:'center',
        position:'absolute',
        bottom:WindowHeight<= iphone5s?80:105
    },
    threeSmile:{
        height:50,
        alignSelf:'center',
        width:123,
        marginTop:WindowHeight<= iphone5s?67:77
    },
    startText:{
        color:'#FF4273',
        fontSize:WindowHeight<= iphone5s?28:34,
        alignSelf:'center',
        fontFamily:"PatuaOne-Regular",
        marginTop:WindowHeight<= iphone5s?20:24
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
        width:WindowWidth-186,
        position:'absolute',
        bottom:WindowHeight<= iphone5s?112:133
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