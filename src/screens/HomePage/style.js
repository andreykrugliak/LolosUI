import {StyleSheet,Dimensions,Platform} from 'react-native'
var WindowWidth = Dimensions.get('window').width
var WindowHeight = Dimensions.get('window').height
const iphone5s = 568
const android = 640
const iphone7plus = 736
export default StyleSheet.create({
    headerText:{
        color:"#000",
        fontSize:16, 
        fontFamily:'Lato-Regular',
        fontWeight:"bold",
    },
    middlePart:{
        marginHorizontal:10,
        marginVertical:10,
        elevation:0.5
    },
    middlepartTestStyle:{
        marginHorizontal:15,
        marginVertical:15
    },
    imageStyle:{
        height:380,
        width:"auto",
    },
    badgeStyle:{
        height:20,
        width:20,
        position:"absolute",
        right:4,
        top:4,
        backgroundColor:"#50C2A8",
        opacity:1
    },
    cardImage:{
        height: 371,
        width: null, 
        //flex: 1
    },
    badgeText:{
        fontSize:10,
        position:"absolute",
        top:-6
    },
    wrapper:{
        borderWidth:1, 
        borderColor:"#F0F0F0",
        borderRadius:5,	
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:"#F6F6F6",
    },
    slide1:{
       
        
        backgroundColor : '#fff',
        width:WindowWidth-40,
        ...Platform.OS=='ios'?{height:WindowHeight-190}:{height:WindowHeight-220},
        borderRadius:5,
        //marginBottom:20,
       
        
        overflow:"hidden"
    },
    titleSlide1:{
        marginTop:WindowHeight<= iphone5s?125:WindowHeight <= android?120:149,
        fontSize:WindowHeight <= android?25:34,
        fontFamily:"PatuaOne-Regular",
        textAlign:"center",
        color: "#FF4273"
    },
    emojiGroup:{
        alignSelf:'center',
        height:180,
        position:'absolute',
        bottom:WindowHeight >=iphone7plus? 110:WindowHeight <= android?70:90,
        //marginTop:WindowHeight<= iphone5s?20:WindowHeight <= android?35:40
    },
    title:{
        marginTop:WindowHeight<= iphone5s?20:33,
        fontSize:WindowHeight <= android?24:34,
        fontFamily:"PatuaOne-Regular",
        textAlign:"center",
        color: "#FF4273"
    },
    titleSWallte:{
        marginTop:22,
        fontSize:WindowHeight <= android?24:34,
        fontFamily:"PatuaOne-Regular",
        textAlign:"center",
        color: "#FF4273"   
    },
        tagLine:{
        paddingHorizontal:20,
        marginTop:WindowHeight<= iphone5s?15:22,
        color: "#000000",	
        textAlign:'center',
        fontFamily:'Lato-Regular',	
        fontSize:WindowHeight <= android? 15:22
    },
    giftImg:{
        marginTop:WindowHeight<= iphone5s?30:WindowHeight <= android?43:63,
        alignSelf:'center',
        height:160,
        width:190,
    },
    manImg:{
        marginTop:WindowHeight<= iphone5s?25:WindowHeight <= android?38:54,
        alignSelf:'center',
        height:150,
        width:130,
    },
    
    topImage:{
        position:'absolute',
        top:-25,
        right:-28,
        transform: [{ rotate: '215deg'}],
        height:148,
        width:148,
        
    },
    freindsSmile:{   
        marginTop:WindowHeight <= android?50:90,
        alignSelf:'center',
        height:95,
        width:173,
    },
    baseLine:{
        marginTop:WindowHeight<= iphone5s? 30:WindowHeight <= android?45:50,
        color:"#9B9B9B",	
        fontFamily:'Lato-Regular',
        fontSize:WindowHeight <= android?12:14,		
        textAlign: "center"
    },
    inviteFreinds:{
        position:'absolute',
        bottom:WindowHeight >=iphone7plus? 50:WindowHeight <= android?10: 30,
        marginHorizontal:73,
        height:60,
        width:189,
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'center',
        borderWidth: 2,
        borderColor: "#FF4273",	
        borderRadius:3,	
        backgroundColor: "#FFFFFF",
    },
    button:{
        position:'absolute',
        bottom:WindowHeight >=iphone7plus? 50:WindowHeight <= android?10: 30,
        marginHorizontal:73,
        height:60,
        width:189,
        justifyContent:'center',
        alignItems:'center',
        borderWidth: 2,
        alignSelf:'center',
        borderColor: "#FF4273",	
        borderRadius:3,	
        backgroundColor: "#FFFFFF",
    },

    buttonTextInvite:{
        fontSize:WindowHeight <= android?14:18,
        color:"#FF4273",
        textAlign:'center',
        fontFamily:"Lato"
    },
    swipeTextView:{
       marginTop: WindowHeight <= android?90:134,
        flexDirection:'row',
        alignSelf:'center',
        justifyContent:'center',
        alignItems:'center',
        //flex:1
    },
    swipeText:{
        fontSize:18,
        color:'#FF4273',
        marginHorizontal:19,
        textAlign:'center',
        fontFamily:'Lato-Regular'
    },
    leftArrow:{
        height:24,
        width:24,
        marginLeft:4,
        transform: [{ rotate: '90deg'}]
    },
    rightArrow:{
        height:24,
        width:24,
        marginLeft:4,
        transform: [{ rotate: '270deg'}]
        
    },
    menuIcon:{
        height:20,
        width:20,
    },
    headerStyle:{
        backgroundColor:"#FFFFFF",
        height:80
    },
    headerLeftSide:{
       // marginRight:35
    },
    notificationIcon:{
        height:20,
        width:20,
    },
    cardWelcomeText:{
        color:'#FF4273', 
        fontSize:20,
        fontWeight:"normal"
    },
    cardMessage:{
        color:"#646464",
        fontSize:14,
    },
    footerStyle:{
        height:70,
        flexDirection:"column"
    },
    footerLine:{
        backgroundColor:"#64B7E3",
        height:5},
    
        centerLogo:{
            
            ...Platform.OS === 'ios'?{}: {paddingLeft:WindowWidth/4 }
        },

        swiper:{
            flex:1,
            height:WindowHeight,
            width:WindowWidth,
            backgroundColor:'#f6f6f6', 
           
        }
})