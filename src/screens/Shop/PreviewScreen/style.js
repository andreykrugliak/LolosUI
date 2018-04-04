import {StyleSheet,Dimensions} from 'react-native'
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
        fontFamily:'Lato',
    },
    label:{
        width:70,
        height:24,
        backgroundColor:'#FF4273', 
        marginTop:7,   
        alignItems:'center',
        justifyContent:'center',
        borderRadius:2,
    },
    labelText:{
        fontSize:13,
        color:'#fff',
        fontFamily:'Patua One',
    },
    extraInfo:{
        marginTop:5,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        //borderWidth:1,
    },
    shippingText:{
        fontSize:10,
        color:'#9B9B9B',
        fontFamily:'Lato',
        fontWeight:'bold'
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
    },
    extraInfoIcon:{
        height:16,
        width:12,
        marginLeft:5
    },
    superHotText:{
        //paddingLeft:4,
        fontSize:10,
        color:'#000',
        fontFamily:'Patua One',
        marginLeft:7
     },
     header:{
         
         height:80,
         alignItems:'center',
         backgroundColor:'#fff',
         flexDirection:'row',
         paddingHorizontal:27,
         justifyContent:'space-between',
   
     },
     leftButton:{
         height:16,
         width:16,
     },
     headerText:{
         fontFamily:'Lato',
         fontSize:18,
         fontWeight:'bold',
     },
     rightButton:{

         height:18,
         width:18
     },
     tabBar:{
       
         height:50,
     },


})