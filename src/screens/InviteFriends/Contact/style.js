import {StyleSheet, Platform,Dimensions} from 'react-native'

let windowWidth= Dimensions.get('window').width
let windowHeight=Dimensions.get('window').height
export default StyleSheet.create({
    contianer:{
        flex:1
    },
    searchBarView:{
        backgroundColor:'#FFFFFF',
        padding:30
    }
})