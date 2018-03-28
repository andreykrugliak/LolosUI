import {StyleSheet,Dimensions} from 'react-native'
var WindowWidth = Dimensions.get('window').width
var WindowHeight = Dimensions.get('window').height
const iphone5s = 568
const android = 640
export default StyleSheet.create({
    headerText:{
        color:"#000",
        fontSize:22,
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
        flex: 1
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
        margin : 20,
        flex:1,
        backgroundColor : '#FFF',
        overflow:"hidden"
    },
    titleSlide1:{
        marginTop:149,
        fontSize:34,
        fontFamily:"Patua One",
        textAlign:"center",
        color: "#FF4273"
    },
    title:{
        marginTop:33,
        fontSize:34,
        fontFamily:"Patua One",
        textAlign:"center",
        color: "#FF4273"
    },
    titleSWallte:{
        marginTop:22,
        fontSize:34,
        fontFamily:"Patua One",
        textAlign:"center",
        color: "#FF4273"   
    },
        tagLine:{
        paddingHorizontal:20,
        marginTop:22,
        color: "#000000",	
        textAlign:'center',
        fontFamily:"Lato",	
        fontSize:22
    },
    giftImg:{
        marginTop:63,
        alignSelf:'center',
        height:160,
        width:190,
    },
    manImg:{
        marginTop:54,
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
        marginTop:50,
        alignSelf:'center',
        height:90,
        width:166,
    },
    baseLine:{
        marginTop:50,
        color:"#9B9B9B",	
        fontFamily:"Lato",
        fontSize:14,		
        textAlign: "center"
    },
    inviteFreinds:{
        marginTop:15,
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
    lookButton:{
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
    checkButton:{
        marginTop:32.07,
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
    setUpButton:{
        marginTop:52,
        marginHorizontal:73,
        height:60,
        width:189,
        alignSelf:'center',
        justifyContent:'center',
        alignItems:'center',
        borderWidth: 2,
        borderColor: "#FF4273",	
        borderRadius:3,	
        backgroundColor: "#FFFFFF",
    },
    buttonTextInvite:{
        fontSize:18,
        color:"#FF4273",
        textAlign:'center',
        fontFamily:"Lato"
    },
    swipeTextView:{
       marginTop:134,
        flexDirection:'row',
        alignSelf:'center',
        justifyContent:'center',
        alignItems:'center',
        flex:1
    },
    swipeText:{
        fontSize:18,
        color:'#FF4273',
        marginHorizontal:19,
        textAlign:'center'
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
        marginRight:35
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
})