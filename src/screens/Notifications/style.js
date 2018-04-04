import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
        
        height:80,
        borderBottomWidth:1,
        borderBottomColor:'rgba(0,0,0,1)'
        
    },
    imageContainer:{
        position:'absolute',
        top:32,
        left:24,
        height:30,
        width:30
    },
    backImage:{
        
        height:20,
        width:20,
       
        
    },
    text:{
        alignSelf:'center',
        fontSize:16,
        color:'black',
        fontFamily:'Lato-Regular',
        marginTop:35
    },
    NotificationBox:{
        height:70,
        borderBottomWidth:StyleSheet.hairlineWidth
    },
    mainText:{
        fontSize:16,
        fontFamily:'Lato-Regular',
        marginLeft:22,
        marginTop:13,
        color:'#000000'
    },
    subText:{
        fontSize:12,
        fontFamily:'Lato-Regular',
        marginLeft:22,
        
        color:'#9B9B9B'
    },
    dateText:{
        position:'absolute',
        top:18,
        right:32,
        color:'#9B9B9B',
        fontSize:12,
        fontFamily:'Lato-Regular',
    },
    forwardImageContainer:{
        position:'absolute',
        right:10,
        top:25
    },
    forwardImage:{
        height:12,
        width:12
    }
})