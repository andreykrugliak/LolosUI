import {StyleSheet,PixelRatio, Dimensions} from 'react-native'
let windowWidth = Dimensions.get('window').width
export default StyleSheet.create({
    
    phoneNum:{
        marginTop:52,
        textAlign:'center',
        color:'black',
        fontFamily:'Lato-Regular',
        fontSize:22
    },
    alert:{
        marginTop:3,
        color:'#9B9B9B',
        fontFamily:'Lato-Regular',
        fontSize:14,
        textAlign:'center'
    },
    countryContainer: {
        flex: 1,
        
        flexDirection:'row'
      },
      welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
      },
      instructions: {
        fontSize: 12,
        textAlign: 'center',
        color: '#888',
        marginBottom: 5
      },
      data: {
        padding: 15,
        marginTop: 10,
        backgroundColor: '#ddd',
        borderColor: '#888',
        borderWidth: 1 / PixelRatio.get(),
        color: '#777'
      },
      triangle:{
        height:12,
        width:24,
        resizeMode:'contain'
    },
    inputContainer:{
        flexDirection:'row',
        marginHorizontal:24,
        marginTop:53
    },
    input:{
        marginLeft:10,
        height:60,
        width:windowWidth-163,
        backgroundColor:'#F6F6F6',
        flexDirection:'row',
        alignItems:'center',
        borderRadius:3,
    },
    buttonText:{
        fontSize:20,
        fontWeight:'900',
        fontFamily:'Lato-Regular'
    },
    buttonContainer:{
        justifyContent:'center',
        alignItems:'center',
        height: 70,
        position:'absolute',
        left:0,
        right:0,
        bottom:0,
        borderRadius:0
        
    },
    crossImage:{
        height:26,
        width:26,
       
    },
    imageContainer:{
        position:'absolute',
        right:10,
        //top:20
    
    }
})