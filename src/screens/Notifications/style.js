import {StyleSheet, Dimensions} from 'react-native';
let window = Dimensions.get('window')
export default StyleSheet.create({
    container: { 
        height:80,
        borderBottomWidth:1,
        borderBottomColor:'rgba(0,0,0,1)' 
    },
    imageContainer:{
        position:'absolute',
        top:32,
        left:24,
        height:30,
        width:30
    },
    backImage:{
        height:20,
        width:20,
    },
    text:{
        alignSelf:'center',
        fontSize:16,
        color:'black',
        fontFamily:'Lato-Regular',
        marginTop:35
    },
    NotificationBox:{
        flex:1,
        height:70,
        borderBottomWidth:StyleSheet.hairlineWidth
    },
    mainText:{
        fontSize:16,
        fontFamily:'Lato-Regular',
        marginLeft:22,
        marginTop:13,
        color:'#000000'
    },
    subText:{
        fontSize:12,
        fontFamily:'Lato-Regular',
        marginLeft:22,
        
        color:'#9B9B9B'
    },
    dateText:{
        position:'absolute',
        top:18,
        right:32,
        color:'#9B9B9B',
        fontSize:12,
        fontFamily:'Lato-Regular',
    },
    forwardImageContainer:{
        position:'absolute',
        right:10,
        top:25
    },
    forwardImage:{
        height:12,
        width:12
    },
    body:{
       // justifyContent:'center',
        alignItems:'center',
        flex:1,
    },
    date:{
        marginTop:45,
        color:'#9B9B9B',
        fontFamily:'Lato',
        fontSize:14,
    },
    headText:{
        fontSize:22,
        color:'#000',

    },
    bodyImage:{
        position:'absolute',
       
        bottom:0,
        alignSelf:'center',
        width:window.width-185,
        resizeMode:'contain'
       
     
    },
    footerText:{
        color:'#4A90E2',
        fontFamily:'Lato',
        fontSize:12,
        textAlign:'center',
        //top:0,
        bottom:25,
        marginHorizontal:37,
   
        position:'absolute'
    },
})