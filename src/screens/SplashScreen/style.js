import {StyleSheet,Dimensions} from 'react-native'
const windowWidth = Dimensions.get('window').width;
export default StyleSheet.create({
    imageStyle:{
        width:145,
        height:70,
        justifyContent:"center",
    },
    ShoppingText:{
        fontFamily: "Lato",
        fontWeight:'900',
        fontSize:18,
        alignSelf:'center',
        color:'white'
    },
    linerButton:{
        height:60,
        marginHorizontal:30,
        marginTop:20,
        borderRadius:3
    },
    ButtonView:{
        backgroundColor:'transparent',
        height:60,
        
        width:windowWidth-60,
        justifyContent:'center',
        alignItems:'center'
    },
    ButtonText:{
        color:'white',
        fontFamily: 'Lato',
        fontSize: 18,
        fontWeight:'900'
    },
    ButtonText2:{
        fontFamily: 'Lato',
        fontSize: 18,
        fontWeight:'900',
        color:'#9B9B9B'
    }

})