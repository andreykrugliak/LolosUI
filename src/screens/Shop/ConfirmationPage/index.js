import React,{Component} from 'react';
import {Container, Header, Content, Footer, FooterTab, Button, Text, Icon, Body, Right, Left,Title, Card, Badge, CardItem} from 'native-base';
import {View,Dimensions,Image,TouchableOpacity,FlatList,ScrollView} from 'react-native';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';
import Swiper from 'react-native-deck-swiper'
var WindowWidth = Dimensions.get('window').width
var WindowHeight = Dimensions.get('window').height
import styles from './style'


export default class ConfirmationPage extends Component{

    static navigatorStyle = {
        navBarHidden:true
    };

    render(){
        return(

            <View style={{flex:1}}>
                <Image style={[styles.back,{tintColor:'#fff'}]} source={require('@images/Ecommerce/back.png')}/>
                <Image style={styles.image} source={require('@images/HomePage/image.jpg')}/>
                <Text style={styles.total}>Total lolo's</Text>
                <Text style={styles.totalNo}>127</Text>
                <View style={styles.emojys}>
                    <Image style={styles.emoj} source={require('@images/Assets/dead.png')}></Image>
                    <Image style={styles.emoj} source={require('@images/Assets/dead.png')}></Image>
                </View>
                <View style={styles.footer}>
                    <Text style={styles.send}>Send To:</Text>
                    <Text style={styles.send}>Pardes Hana, Bilu 11a, Israel</Text>
                </View>

                
                <View style={styles.button}>
                    <View style={styles.line}></View>
                    <View style={styles.btnBackground}>
                        <Text style={styles.buy}>BUY</Text>
                    </View>
                </View>
            </View>
        )
    }
}
