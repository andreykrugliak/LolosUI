import {StyleSheet,Platform, Dimensions} from 'react-native';


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
        height:68*0.8,
        //marginHorizontal:88,
        resizeMode:'contain',
        marginTop:WindowHeight<= iphone5s?45:55,
        width:200*0.8,
        alignSelf:'center'
    },
    shoppingText:{
        color:'#000000',
        fontFamily:'Lato-Regular',
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
        fontFamily:'Lato-Regular',
        textAlign:'center',
        fontSize:WindowHeight<= iphone5s?18:22,
        marginHorizontal:35,
        flexWrap:'wrap'
    },
    animatedImageView:{
        position:'absolute',
        bottom:WindowHeight<= iphone5s?140:176,
        alignSelf:'center',
    },
    arrowImage:{
       
        height:24,
        width:24,
        resizeMode:'contain',
       
    },
    footerImage:{
        
        position:'absolute',
        bottom:0,
        width:WindowWidth,
        ...Platform.select({
            ios:{
                height:0.21066666666*WindowWidth,
            },
            android:{
                resizeMode:'contain',
                height:0.3*WindowWidth,
            }
        })    
    },
    animatedWalletView:{
        position:'absolute',
        alignSelf:'center',
        bottom:WindowHeight<= iphone5s?40:78,
    },
    
    wallet:{
       
        resizeMode:'contain',
        
        height:165*0.8,
    },
    animatedSmileyView:{
        alignSelf:'center',
        position:'absolute',
        bottom:WindowHeight<= iphone5s?80:105
      
    },
    smiley:{
        height:120*0.8,
        width:120*0.8,
       
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
       
        position:'absolute',
        bottom:WindowHeight<= iphone5s?112:133
    },
    animatedButtonView:{
        justifyContent:'center',
        alignItems:'center',
        marginHorizontal:93,
        borderColor:'#FF4273',
        borderRadius:3,
        borderWidth:1,
        height:60,
       
        backgroundColor:'white',
        width:WindowWidth-186,
    },
    buttonText:{
        color:'#FF4273',
        fontFamily:'Lato-Regular',
        fontSize:18,
        fontWeight:"900"
    },
    footerTextView:{
        position:'absolute',
        bottom:30,
       
        

    },
    footerTextSubView:{
        flexDirection:'row',
        flexWrap:'wrap',
        //alignSelf:'center',
        justifyContent:'center',
        marginHorizontal:47,
    },
    footerText:{
        
        fontFamily:'Lato-Regular',
        fontSize:14,
    }
})