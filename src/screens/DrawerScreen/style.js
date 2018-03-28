import {StyleSheet, Dimensions} from 'react-native'
let windowWidth= Dimensions.get('window').width
let windowHeight=Dimensions.get('window').height
export default StyleSheet.create({
    container:{
        
    },
    header:{
        height:95,
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
    leftIcon:{
        height:24,
        width:24,
        top:35,
        left:24,
        position:'absolute',

    },
    rightIcon:{
        height:24,
        width:24,
        position:'absolute',
        right:27,
        top:35
    },
    imageBg:{
        marginHorizontal:20,
        height:windowHeight-160,
        width:windowWidth-40,
        opacity:0.5,
        position:'absolute',
        top:115
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
        width:windowWidth-94,
        backgroundColor:'white',
        height:windowHeight-95,
        shadowOffset:{  width: 1,  height: 1  },
shadowColor: 'black',
shadowOpacity: 1.0,
        //borderRightWidth:1,
        
    },
    footerImage:{
        height:85,
        width:windowWidth-94,
        position:'absolute',
        left:0,
        right:0,
        bottom:0

    },
    line:{
        backgroundColor:'#F0F0F0',
        height:1,
        width:windowWidth-94,
        marginTop:21
    }

})