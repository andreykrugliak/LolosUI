import {StyleSheet} from 'react-native'
export default StyleSheet.create({
    container:{

    },
    header:{
        marginTop:10,
        borderBottomWidth:1,
        borderBottomColor:'gray',
        height:80,
        flexDirection:'row',
        alignItems:'center'
    },
    backIcon:{
        marginLeft:24,
        height:24,
        width:24,
    },
    headerText:{
        flex:1,
        textAlign:'center',
        fontSize:16,
        color:'#000',
        fontFamily:'Lato-Bold'
    },
    content:{
        marginHorizontal:30,
        marginTop:40,
    },
    profileIcon:{
        alignSelf:'center',
        height:118,
        width:118,
        marginBottom:40,
    },
    addIcon:{
        position:'absolute',
        left:185,
        top:0,
        bottom:215,
        height:40,
        width:40,
        
    },
    textContainer:{
        paddingVertical:5,
    },
    text:{
        fontFamily:'Lato-Regular',
        fontSize:16,
    },
    textInput:{
        height:60,
        paddingVertical:18,
        paddingLeft:15,
        backgroundColor:'#F0F0F0'
    },
    btnApply:{},
})