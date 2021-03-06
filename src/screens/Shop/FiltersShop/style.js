import {StyleSheet,Dimensions} from 'react-native'
import { ifIphoneX } from 'react-native-iphone-x-helper';
const deviceWidth=Dimensions.get("window").width

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff'
    },
    header:{
        height:80,
        backgroundColor:'#fff',
        flexDirection:'row',
        alignItems:'center',   
        shadowOpacity:0.4,
         shadowOffset:{width:2,height:0}
        //borderWidth:1,
       // justifyContent:'center'
    },
    back:{
        height:24,
        width:24,
        marginLeft:14,
        ...ifIphoneX({
            marginTop:25
        })
        //borderWidth:1
    },
    filter:{
        fontFamily:'Lato-Regular',
        fontSize:16,
        fontWeight:'bold',
        color:'#000',
        marginLeft:(deviceWidth-24)/2-68,
        ...ifIphoneX({
            marginTop:25
        })
       // borderWidth:1,
    },
    sortPrice:{
        marginTop:24,
        marginHorizontal:10,
        paddingBottom:29,    
    },
    sortPriceText:{
        color:'#000',
        fontFamily:'Lato-Regular',
        fontWeight:'bold',
        fontSize:18,
        marginLeft:14,
    },
    selection:{
        flexDirection:'row',
        paddingHorizontal:12,
        marginTop:22,
    },
    lowToHigh:{
       // borderWidth:1,
        flexDirection:'row',
        alignItems:'center',
    },
    radioButton:{
        borderWidth:2,
        height:20,
        width:20,
        borderRadius:20,
      //  borderWidth:1,
        borderColor:'#FF4273',
        marginLeft:2,
    },
    radioButtonFilled:{
        borderWidth:2,
        height:20,
        width:20,
        borderRadius:20,
        borderColor:'#FF4273',
        marginLeft:2,
        alignItems:'center',
        justifyContent:'center'
    },
    radioFill:{
        height:10,
        width:10,
        borderRadius:5,
        backgroundColor:'#FF4273',
    },
    selectionText:{
        fontFamily:'Lato-Regular',
        fontSize:16,
        marginLeft:8, 
    },
    checkBox:{
        height:18,
        width:18,
        borderWidth:2,
        borderColor:'#FF4273',
        marginLeft:3,
        borderRadius:2,
    },
    line:{
        height:1,
        backgroundColor:'#F0F0F0',
        marginHorizontal:24,
    },
    button:{
        flex:1,
        position:'absolute',
        bottom:0,
        right:0,
        left:0,
    },
    btnBackground:{
        backgroundColor:'#FF4273',
        height:70,
        alignItems:'center',
        justifyContent:'center',
    },
    apply:{
        fontFamily:'Lato-Regular',
        color:'#fff',
        fontWeight:'bold'
    },
    radioButtonText:{
        fontFamily:'Lato-Regular',
        fontSize:16,
        color:'black'
    }
})