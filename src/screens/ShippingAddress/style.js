import {StyleSheet,Dimensions,Platform} from 'react-native'
var WindowWidth = Dimensions.get('window').width
var WindowHeight = Dimensions.get('window').height
const iphone5s = 568
const android = 640
const iphone7plus = 736
export default StyleSheet.create({
   container:{ 
       flex:1,
       backgroundColor:'#fff'
   },
   headText:{
      marginTop:86,
      alignSelf:'center',
      color:'#FF4273',
      fontSize:34,
      fontFamily:'Patua One'
   },
   tagline:{
       alignSelf:'center',
       color:'#9B9B9B',
       fontFamily:'lato',
       fontSize:14,
       paddingTop:4,
   },
   bodyText:{
       alignSelf:'center',
       marginTop:111,
       fontFamily:'lato',
       color:'#000',
       fontSize:22,
   },
   emoj:{
       height:108,
       width:96,
       alignSelf:'center',
   },
   button:{
       height:60,
       width:WindowWidth-186,
      // marginHorizontal:93,
       borderColor:'#FF4273',
       borderWidth:3,
       borderRadius:3,
       backgroundColor:'#fff',
       justifyContent:'center',
       alignItems:'center',
       position:'absolute',
       bottom:65,
      //top:557,
       right:92,
       zIndex:0, 
   },
   buttonText:{
       color:'#FF4273',
       fontSize:18,
       fontWeight:'bold',
       zIndex:1,
   },
})