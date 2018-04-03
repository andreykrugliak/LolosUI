import {StyleSheet, Platform,Dimensions} from 'react-native'

let windowWidth= Dimensions.get('window').width
let windowHeight=Dimensions.get('window').height
export default StyleSheet.create({
    contianer:{
        flex:1,
        backgroundColor:'#F6F6F6'
    },
    innerView:{
        flex:1,
        margin:20,
        borderRadius:5,
        backgroundColor:'#FFFFFF'
    },
    titleText:{
        fontSize:34,
        marginTop:33,
        alignSelf:'center',
        color:'#FF4273',
        fontFamily:"Patua One",
        textAlign:"center"
    },
    img:{
        marginTop:58,
        alignSelf:'center',
        height:186,
        width:179
    },
    bottomLine:{
        marginTop:40,
        marginBottom:32,
        alignSelf:'center',
        textAlign:'center',
        fontSize:28,
        fontFamily:"Lato"

    }
})