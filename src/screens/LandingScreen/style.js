import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
        zIndex:1000,
    },
    linearGradient: {
        flex: 1,
    },
    allItems:{
        marginHorizontal:20,
        marginVertical:20
    },
    imageView:{
        height:141,
        width:289,
        backgroundColor:"#EC909B",
        alignSelf:"center",
    },
    imgLogo:{
        position:"absolute",
        alignSelf:"center",
        height:141,
        width:289,
        backgroundColor:"#EC909B"
    },
    titleText:{
        fontFamily:"PatuaOne-Regular",
        fontSize:50,
        color:"#FFFFFF",
        lineHeight:54,
        fontWeight:"bold",
        textAlign:"center",
        
    },
    descriptionText:{
        fontFamily:"Lato-Black",
        fontSize:20,
        color:"#FFFFFF",
        alignSelf:"center"
    },
    buttonStyle:{
        height:50,
        width:189,
        borderWidth:1 ,
        borderColor:"#FFFFFF",
        borderRadius:40,
        backgroundColor:"rgba(255,255,255,0.2)",
        alignItems:"center",
        justifyContent:"center",
        alignSelf:"center"
    },
    btnText:{
        color:"#FFFFFF",
        fontFamily:"Lato-Black",
        fontSize:18,
        fontWeight:"600"
    },
    personaText:{
        color:"#FFFFFF",
        fontSize:16,
        fontWeight:"400",
        opacity:0.9,
        alignSelf:"center",
        fontFamily:"Lato-Black",
    },
    transparentText:{
        backgroundColor:"transparent"
    }
})