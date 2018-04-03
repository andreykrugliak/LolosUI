import React,{Component} from 'react';
import {Container, Header, Content, Footer, FooterTab, Button, Text, Icon, Body, Right, Left,Title, Card, Badge, CardItem} from 'native-base';
import {View,Dimensions,Image,TouchableOpacity,FlatList,ScrollView,TextInput} from 'react-native';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';
var WindowWidth = Dimensions.get('window').width
var WindowHeight = Dimensions.get('window').height
import styles from './style'

export default class ShopSeach extends Component{

    static navigatorStyle={
        navBarHidden:true
    }
    constructor(props){
        super(props) 
    }


    render(){
        return(
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image style={styles.back} source={require('@images/DrawerScreen/left.png')}/>
                    <Text  style={styles.searchItem}>SEACH TTEM</Text>
                </View>

                <View style={styles.searchSection}>
                    <View style={styles.body}>
                        <TextInput
                        style={styles.textInput}
                        placeholder={'Search...'}
                        />
                        <Image style={styles.iconSearch} source={require('@images/Ecommerce/ic_search.png')} />
                    </View>
                </View>
                <View style={styles.line}></View>

                <View style={[styles.recentSearch,{marginTop:1}]}>
                    <Text style={styles.head}>Recent Searches</Text>
                    <Text style={styles.item}>item#1</Text>
                    <Text style={styles.item}>item#1</Text>
                    <Text style={styles.item}>item#1</Text>
                    <Text style={styles.item}>item#1</Text>
                </View>
                <View style={styles.line}></View>

                <View style={styles.recentViewed}>
                    <FlatList
                    horizontal={true}
                    style={styles.productImages}
                    data={['1','2,','16','26','17','29,','10','20,']}
                    renderItem={()=>{
                        return( 
                            <Image style={styles.img} source={require('@images/HomePage/image.jpg')}/>
                        )
                    }}
                    />
                </View>
            </View>
        )
    }
}