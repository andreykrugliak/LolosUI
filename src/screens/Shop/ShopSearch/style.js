import {StyleSheet,Dimensions} from 'react-native'
const WindowWidth = Dimensions.get('window').width
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
    },
    back:{
        height:24,
        width:24,
        marginLeft:24,
        //borderWidth:1
    },
    searchItem:{
        fontFamily:'Lato',
        fontSize:16,
        fontWeight:'bold',
        color:'#000',
        marginLeft:((deviceWidth-137)/2)-24,
       // borderWidth:1,
    },
    searchSection:{
        marginVertical:30,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#fff'
    },
    body:{
        height:60,
        width:WindowWidth-48,
        backgroundColor:'#F0F0F0',
        borderRadius:100,
        flexDirection:'row',
        alignItems:'center',
    },
    textInput:{
        flex:1,
        fontSize:18,
        color:'#9B9B9B',
        fontFamily:'lato',
        // marginTop:18,
        // marginBottom:20,
        marginLeft:16
    },
    iconSearch:{
        marginLeft:10,
        height:16,
        width:16,
        marginRight:24,
    },
    line:{
        height:1,
        backgroundColor:'#F0F0F0',
       // marginHorizontal:24,
    },
    recentSearch:{
        paddingLeft:30,
        backgroundColor:'#fff',
        paddingVertical:25,
    },
    head:{
        color:'#000',
        fontFamily:'lato',
        fontWeight:'bold',
        fontSize:18,
        marginBottom:16,
    },
    item:{
        color:'#000',
        fontFamily:'lato',
        fontSize:16,
    },
    recentViewed:{
        paddingTop:25,
    },
    productImages:{
        backgroundColor:'#F0F0F0',
    },
    img:{
        height:100,
        width:100
    }
})