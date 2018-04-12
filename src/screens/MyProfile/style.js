import {StyleSheet,PixelRatio, Dimensions} from 'react-native'
let windowWidth = Dimensions.get('window').width
let windowHeight=Dimensions.get('window').height
export default StyleSheet.create({

    container:{
        flex:1,
        backgroundColor:'#fff'
    },
    body:{},
    avtarContainer:{
        marginVertical:41,
        alignSelf:'center'
    },
    avtar:{
        height:120,
        width:120
    },
    add:{
        position:'absolute',
        height:40,
        width:40,
        bottom:76,
        left:88,
        top:4,
    },
    profileInfo:{
      marginHorizontal:30
    },
    nameText:{
        fontFamily:'Lato-Regular',
        fontSize:16,
        color:'#000',
        paddingBottom:7
    },
    textInput:{
        //marginTop:35,
      //  marginHorizontal:24,
        backgroundColor:'#F0F0F0',
        height:60,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        borderRadius:3,
    },

    buttonText:{
        fontSize:20,
        //color:'#CCCCCC',
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
       // backgroundColor:'#FF4273',
        //backgroundColor:'#F0F0F0',
        borderRadius:0
        
    }
})