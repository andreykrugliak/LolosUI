import {StyleSheet,Dimensions} from 'react-native'
let windowWidth = Dimensions.get('window').width
let windowHeight = Dimensions.get('window').height
export default StyleSheet.create({
    container:{

    },
    bdayText:{
        marginTop:52,
        textAlign:'center',
        color:'black',
        fontFamily:'Lato-Regular',
        fontSize:22
    },
    bdayAlert:{
        color:'#9B9B9B',
        fontFamily:'Lato-Regular',
        fontSize:14,
        textAlign:'center'
    },
    datePicker:{
        width: windowWidth-48,
        alignSelf:'center',
        marginTop:53,
        height:60,        
    },
    buttonContainer:{
        width:windowWidth,
        height:70,
        bottom:0,
        position:'absolute',
        borderRadius:0,
        justifyContent:'center',
        alignItems:'center',
       
    },
    buttonText:{
        //color:'#CCCCCC',
        fontFamily:'Lato-Regular',
        fontSize:20,
        fontWeight:'900'
    },
    crossImage:{
        height:26,
        width:26,
        
    },
    datePickerContainer:{
        height:60,
        backgroundColor:'#f0f0f0',
        marginHorizontal:24,
        marginTop:53,
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'row',
        //borderWidth:1,
        borderRadius:3
    },
    imageContainer:{
        position:'absolute',
        right:20
    }
})