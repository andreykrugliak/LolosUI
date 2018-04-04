import React,{Component} from 'react';
import {Container, Header, Content, Footer, FooterTab, Button, Text, Icon, Body, Right, Left,Title, Card, Badge, CardItem} from 'native-base';
import {View,Dimensions,Image,TouchableOpacity,FlatList,ScrollView} from 'react-native';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';
var WindowWidth = Dimensions.get('window').width
var WindowHeight = Dimensions.get('window').height
import styles from './style'

export default class FilterShop extends Component{

    static navigatorStyle = {
        navBarHidden:true
    };

    render(){
        return(
            <View style={{flex:1}}>
                <View style={styles.header}>
                <TouchableOpacity onPress={()=>{
                    this.props.navigator.pop({
                        animationType:"slide-horizontal"
                    })
                }}>
                    <Image style={styles.back} source={require('@images/DrawerScreen/left.png')}/>
                </TouchableOpacity>
                    
                    <Text  style={styles.filter}>FILTER</Text>
                </View>

                <View style={styles.sortPrice}>
                    <Text style={styles.sortPriceText}>Sort Pricing</Text>
                    <View style={styles.selection}>
                        <View style={styles.lowToHigh}>
                            <View style={styles.radioButton}></View>
                            <Text style={styles.selectionText}>Low To Heigh</Text>
                        </View>
                        <View style={[styles.lowToHigh,{marginLeft:((WindowWidth-58)/2)-120}]}>
                            <View style={styles.radioButton}></View>
                            <Text style={styles.selectionText}>Heigh To Low</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.line}></View>

                <View style={[styles.sortPrice]}>
                    <Text style={styles.sortPriceText}>Shipping Fees</Text>
                    <View style={[styles.selection,{marginTop:((WindowWidth-53)/2)-122}]}>
                    <View style={styles.lowToHigh}>
                            <View style={styles.radioButton}></View>
                            <Text style={styles.selectionText}>Only free shipping</Text>
                        </View>
                        <View style={[styles.lowToHigh,{marginLeft:26}]}>
                            <View style={styles.radioButton}></View>
                            <Text style={styles.selectionText}>All</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.line}></View>


                 <View style={styles.sortPrice}>
                    <Text style={styles.sortPriceText}>International Shipping</Text>
                    <View style={[styles.selection,{marginTop:19}]}>
                    <View style={styles.lowToHigh}>
                        <View style={styles.checkBox}></View>
                            <Text style={styles.selectionText}>Only items ships to Israel</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.line}></View>

                <View style={styles.button}>
                <View style={styles.btnBackground}>
                    <Text style={styles.apply}>APPLY</Text>
                </View>
            </View>

            </View>
        )
    }
}