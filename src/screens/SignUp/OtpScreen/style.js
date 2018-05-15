import {StyleSheet,PixelRatio, Dimensions} from 'react-native'
let windowWidth = Dimensions.get('window').width
let windowHeight=Dimensions.get('window').height
export default StyleSheet.create({
    container:{
        marginTop:(((windowHeight-137)/2)-100),
        backgroundColor:'#FFFFFF',
        justifyContent:'center',
      //  alignItems:'center'
    },
    codeHeader:{
        color:'#000000',
        fontSize:22,
        fontFamily:'Lato-Regular',
      //  marginTop:180,
        alignSelf:'center',
        //borderWidth:1,
    },
    textInput:{
        marginTop:35,
        marginHorizontal:24,
        backgroundColor:'#F0F0F0',
        height:60,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        borderRadius:3,
    },
    crossImage:{
        height:26,
        width:26,
        marginRight:16
    },
    retry:{
        color:'#FF4273',
        marginTop:18,
        alignSelf:'center',
        fontFamily:'Lato-Regular',
        fontSize:16
    },
    buttonText:{
        fontSize:20,
        color:'white',
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
        backgroundColor:'#FF4273',
        borderRadius:0
        
    }
})