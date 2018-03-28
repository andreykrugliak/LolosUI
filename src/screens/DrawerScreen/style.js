import {StyleSheet, Dimensions} from 'react-native'
let windowWidth= Dimensions.get('window').width
let windowHeight=Dimensions.get('window').height
export default StyleSheet.create({
    flex:{
        zIndex:1000,
        backgroundColor:'white'
    },
    header:{
        height:80,
        alignItems:'center',
        justifyContent:'center',
        borderBottomColor:'black',
        borderBottomWidth:1
    },
    headerText:{
        fontSize:16,
        fontFamily:'lato-bold',
        color:'#000000'

    },
    leftIconContainer:{
        top:30,
        left:24,
        position:'absolute',
    },
    leftIcon:{
        height:24,
        width:24,
       

    },
    rightIcon:{
        height:24,
        width:24,
        
    },
    rightIconContainer:{
        position:'absolute',
        right:27,
        top:30
    },
    imageBg:{
        //marginHorizontal:20,
        height:windowHeight-80,
        width:windowWidth,
        opacity:0.5,
        position:'absolute',
        top:80
       // marginTop:20,
        
       
    },
    drawerInnerText:{
        marginLeft:21,
        color:'#000000',
        fontFamily:'lato',
        fontSize:16,
        marginTop:23
    },
    drawerContainer:{
        width:windowWidth,
        backgroundColor:'white',
        height:windowHeight-80,
        shadowOffset:{  width: 1,  height: 1  },
shadowColor: 'black',
shadowOpacity: 1.0,
        //borderRightWidth:1,
        
    },
    footerImage:{
        height:120,
        width:windowWidth,
        position:'absolute',
        left:0,
        right:0,
        bottom:0,
        //resizeMode:'stretch'

    },
    line:{
        backgroundColor:'#F0F0F0',
        height:1,
        width:windowWidth,
        marginTop:21
    },
    footerBg:{
        height:70,
        
        position:'absolute',
        bottom:0,
        left:0,
        right:0,
        opacity:0.5,
        zIndex:1
    }

})