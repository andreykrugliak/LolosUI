import React,{Component} from 'react';
import {Container, Header, Content, Footer, FooterTab, Button, Text, Icon, Body, Right, Left,Title, Card, Badge, CardItem} from 'native-base';
import {View,Dimensions,Image,TouchableOpacity,FlatList,ScrollView} from 'react-native';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';
import Swiper from 'react-native-deck-swiper'
import  ProductSwiper from 'react-native-swiper';
var WindowWidth = Dimensions.get('window').width
var WindowHeight = Dimensions.get('window').height

import styles from './style'
import {RNSlidingButton, SlideDirection} from 'rn-sliding-button';
import LinearGradient from 'react-native-linear-gradient';
export default class ProductPage extends Component{

    static navigatorStyle = {
        navBarHidden:true
    };
    render(){
        return(
            <ScrollView style={{backgroundColor:'#F0F0F0'}}>
                <TouchableOpacity style={styles.back}
                                onPress={()=>{
                                    this.props.navigator.pop({animationType:"slide-horizontal"})
                                    }}>
                    <Image style={[ {height:24,width:12, tintColor:'#fff'}]} source={require('@images/Shop/back.png')}/>
                </TouchableOpacity>
               
                {/* <Image style={styles.Image} resizeMode={'cover'}  source={require('@images/HomePage/image.jpg')}/> */}
               
                <ProductSwiper 
                    style={styles.Image}
                    dotStyle={{backgroundColor:'#fff',opacity:0.3,height:10,width:10,borderRadius:10}}
                    activeDotStyle={{backgroundColor:'#fff',height:10,width:10,borderRadius:10,}}>
                    <View style={{flex:1}}>
                        <Image style={{ height:WindowWidth,width:WindowWidth,resizeMode:'stretch',flex:1}} source={require('@images/HomePage/image.jpg')}/> 
                    </View>
                    <View style={{flex:1}}>
                        <Image style={{ height:WindowWidth,width:WindowWidth,resizeMode:'stretch',flex:1}} source={require('@images/HomePage/image.jpg')}/> 
                    </View>
                    <View style={{flex:1}}>
                        <Image style={{ height:WindowWidth,width:WindowWidth,resizeMode:'stretch',flex:1}} source={require('@images/HomePage/image.jpg')}/> 
                    </View>
                </ProductSwiper>

                
                <View style={styles.extraInfoLabel}>
                    <Image style={styles.extraInfoIcon} source={require('@images/Shop/popular.png')} />
                    <Text style={styles.superHotText}>POPULAR</Text>
                </View>


                <View style={styles.container}>
                    <View style={styles.titleView}>
                        <Text style={styles.title}>
                            Binfull Mini Prortable Micro Mobile Phone USB Gadget Fans Tester 
                        </Text>

                        <View style={styles.label}>
                            <Text style={styles.labelText}>
                            357 lolo's
                            </Text>
                        </View>
                        <View style={styles.line}></View>
                        <View style={styles.shipping}>
                            <Text style={styles.shippingText}>Free Shipping</Text>
                            <Image style={styles.down} source={require('@images/Shop/down-arrow.png')}/>
                        </View>
                        <Text style={styles.shippingSubText}>To israyal via allexpress standart shipping</Text>
                    </View>

                    <View style={styles.titleView}>
                        <Text style={styles.itemText}>Item Description</Text>

                        <View style={styles.type}>
                            <View style={{width:(WindowWidth-50)/2}}><Text style={styles.key}>Type</Text></View>
                            <View style={{width:(WindowWidth-50)/2}}><Text style={styles.value}>USB Fan</Text></View>
                        </View>
                        
                        <View style={[styles.type,{backgroundColor:'#fff'}]}>
                            <View style={{width:(WindowWidth-50)/2}}><Text style={styles.key}>Type</Text></View>
                            <View style={{width:(WindowWidth-50)/2}}><Text style={styles.value}>USB Fan</Text></View>
                        </View>
                        <View style={styles.type}>
                            <View style={{width:(WindowWidth-50)/2}}><Text style={styles.key}>Type</Text></View>
                            <View style={{width:(WindowWidth-50)/2}}><Text style={styles.value}>USB Fan</Text></View>
                        </View>
                        <View style={[styles.type,{backgroundColor:'#fff',marginBottom:24}]}>
                            <View style={{width:(WindowWidth-50)/2}}><Text style={styles.key}>Type</Text></View>
                            <View style={{width:(WindowWidth-50)/2}}><Text style={styles.value}>USB Fan</Text></View>
                        </View>

                    </View>

                    <View style={styles.titleView}>
                        <Text style={[styles.itemText]}>Store Info</Text>
                        <Text style={[styles.shippingSubText,{color:'#000',marginBottom:0}]}>Computer and laptop Accessories Store</Text>
                        <Text style={[styles.shippingSubText,{marginBottom:17}]}>98.7% positive Feedback </Text>
                    </View>

                    <View style={styles.titleView}>

                    <LinearGradient 
                    start={{x: 1.04, y: 0.55}} end={{x: -0.04, y: 0.45}}  
                    locations={[0.00,1.00]}
                    style={[styles.slideBuy,{ marginVertical:28,justifyContent:'center'}]} colors={['#F5317F', '#FF7C6E']} >
                    <RNSlidingButton
                        style={[styles.slideBuy,{backgroundColor:'transparent'},]}
                        height={58}
                        onSlidingSuccess={()=>{
                            this.props.navigator.push({
                                screen:'app.ConfirmationPage',
                                animationType:"slide-horizontal"
                            })
                        }}
                        successfulSlidePercent={40}
                        slideDirection={SlideDirection.RIGHT}>
                        <View style={{justifyContent:'center',alignItems:'center',height:64,width:WindowWidth/2.47,backgroundColor:'white',borderColor:'#F5317F',borderRadius:40,borderWidth:2}}>
                            <Text style={{color:'#FF4273',fontFamily:'Lato-Bold',fontSize:14}}>SLIDE TO BUY  >></Text>
                        </View>
                        </RNSlidingButton>
                        </LinearGradient>
                        
                    </View>
                </View>
                   
            </ScrollView>
        )
    }
}