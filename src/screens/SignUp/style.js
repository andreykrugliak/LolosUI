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
        fontFamily:'lato',
        fontSize:22
    },
    bdayAlert:{
        color:'#9B9B9B',
        fontFamily:'lato',
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
        zIndex:1
    },
    buttonText:{
        color:'#CCCCCC',
        fontFamily:'lato',
        fontSize:20,
        fontWeight:'900'
    }
})