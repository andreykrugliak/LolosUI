import {StyleSheet,Dimensions,Platform} from 'react-native'
var WindowWidth = Dimensions.get('window').width
var WindowHeight = Dimensions.get('window').height
const iphone5s = 568
const android = 640
const iphone7plus = 736
export default StyleSheet.create({
   container:{ 
       flex:1,
       backgroundColor:'#fff',
       zIndex:0,
    //    borderWidth:6,
   },
   headText:{
      marginTop:Platform.OS=='android'?66:86,
      alignSelf:'center',
      color:'#FF4273',
      fontSize:34,
      fontFamily:'Patua One'
   },
   tagline:{
       alignSelf:'center',
       color:'#9B9B9B',
       fontFamily:'Lato-Regular',
       fontSize:14,
       paddingTop:4,
   },
   bodyText:{
       textAlign:'center',
       marginTop:Platform.OS=='android'?99: 111,
       fontFamily:'Lato-Regular',
       color:'#000',
       fontSize:22,
   },
   emoj:{
       height:108,
       width:96,
       alignSelf:'center',
       position:'absolute',
       bottom:100,
       zIndex:1, 
   },
   btnGoodContainer:{  
      // flex:1,
       position:'absolute',
       bottom:65,
       // borderWidth:1,
        alignSelf:'center',
        zIndex:1,
   },
   btnGood:{
       height:60,
       width:WindowWidth-186,
      // marginHorizontal:93,
       borderColor:'#FF4273',
       borderWidth:3,
       borderRadius:3,
       backgroundColor:'#fff',
       justifyContent:'center',
       alignItems:'center',
     //position:'absolute',
       bottom:0,
       alignSelf:'center',
       zIndex:2,
   },
   btnGoodText:{
       color:'#FF4273',
       fontSize:18,
       fontWeight:'bold',
       zIndex:1,
   },
   inputContainer:{
        flexDirection:'row',
        alignSelf:'center',
        marginTop:72,
    },
    input:{
        flex:1,
        height:60,
        marginHorizontal:24,
        backgroundColor:'#F6F6F6',
        flexDirection:'row',
        alignItems:'center',
        borderRadius:3,
    },
    crossImage:{
        height:26,
        width:26,
    },
    imageContainer:{
        position:'absolute',
        right:10,
    },
   buttonText:{
        fontSize:20,
        color:'#fff',
        fontFamily:'Lato-Regular',
        fontWeight:'900'
    },
    buttonContainer:{
        justifyContent:'center',
        alignItems:'center',
        height: 70,
        position:'absolute',
        left:0,
        right:0,
        bottom:0,
    //backgroundColor:'#FF4273',
      //  backgroundColor:'#F0F0F0',
        borderRadius:0
    },
    editIcon:{
        height:60,
        width:60,
        borderRadius:40,
        backgroundColor:'#FF4273',
        justifyContent:'center',
        alignItems:'center',
        position:'absolute',
        right:30,
        bottom:30
    },
    modalContainer:{
        backgroundColor:'red'
    },
    pickerHead:{
        elevation:0.3,
        backgroundColor:'#fff',
        marginTop:15,
        color:'#D8D8D8',
        fontSize:18, 
        paddingLeft:20,
        padding:15,
        shadowOpacity:0.3,
        shadowOffset:{width:0,height:1}
    },
    
})