import React,{Component} from 'react';
import {Container, Header, Content, Footer, FooterTab, Button, Text, Icon, Body, Right, Left,Title, Card, Badge, CardItem} from 'native-base';
import {View,Dimensions,Image,TouchableOpacity,FlatList} from 'react-native';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';
import Swiper from 'react-native-deck-swiper'
var WindowWidth = Dimensions.get('window').width
var WindowHeight = Dimensions.get('window').height
import styles from './style'


export default class PreviewScreen extends Component{

    static navigatorStyle = {
        navBarHidden:true
    };
    constructor(props)
    {
        super(props)
        this.state=({
            data:[
                {
                    id:'1',
                    image:'@images/HomePage/image.jpg',
                    title:'Binfull Mini Prortable Micro Mobile Phone USB Gadget Fans Tester For iphone 5S',
                    price:"357 lolo's",
                    label:'SUPER HOT',
                },
                {
                    id:'2',
                    image:'@images/HomePage/image.jpg',
                    title:'Binfull Mini Prortable Micro Mobile Phone USB Gadget Fans Tester For iphone 5S',
                    price:"357 lolo's",
                    label:'SUPER HOT',
                }
            ],
            index:0,
            routes: [
                { key: '0', title: 'All' },
                { key: '1', title: 'Gadgets' },
                { key: '2', title: 'Mobile' },
                { key: '3', title: 'Fashion' },
              ],
        })
        this.__handleIndexChange=this.__handleIndexChange.bind(this)
        this._renderHeader=this._renderHeader.bind(this)
        this._renderScane=this._renderScane.bind(this)
        this._renderItems=this._renderItems.bind(this)
    }

    _renderHeader = props =>{
        return(
            <TabBar
            {...props}
            style={{ backgroundColor:'rgba(254,116,112,1)',height:50,justifyContent:'center'}}
            indicatorStyle={{backgroundColor:'#fff',height:5}}
            labelStyle={{alignSelf:'center',opacity:1}}
            tabStyle={{opacity:1}}
            renderLabel = {(scene) => <Text 
                                        style={{ 
                                            fontWeight:scene.index==this.state.index? '900':'normal',
                                            color:'#fff',
                                            fontFamily:'Lato',                
                                        }}>{scene.route.title}</Text>}
             />
        )
    } 

    _renderScane=({routes})=>{
        console.log(routes)
        return(
                <FlatList
                    style={{flex:1}}
                    data={this.state.data}
                    keyExtractor={(item,index)=>item.id}
                    renderItem={this._renderItems}
                />
         
        )
    }

    __handleIndexChange(index){
        this.setState({
            index
        })
        console.log(index)
    }

    _renderItems=({item,index})=>{
        return(
            <View style={styles.container}>
                <View style={[styles.card,{shadowOpacity:0.3,shadowOffset:{width:0,height:1}}]}>
                    <Image style={styles.productIcon} resizeMode={'stretch'} source={require('@images/Ecommerce/back.png')}/>
                    <View style={styles.detail}>
                        <Text style={styles.title}>
                            {item.title}
                        </Text>
                        <View style={styles.label}>
                            <Text style={styles.labelText}>
                                {item.price}
                            </Text>
                        </View>
                        <View style={styles.extraInfo}>
                            <Text style={styles.shippingText}>Free Shipping</Text>
                            <View style={styles.extraInfoLabel}>
                                <Image style={styles.extraInfoIcon} source={require('@images/Ecommerce/superhot.png')} />
                                <Text style={styles.superHotText}>{item.label}</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        )
    }

    render(){
        return(
            <View style={{backgroundColor:'#F6F6F6',flex:1}}>
                <View style={{flex:1}}>
                    <View style={styles.header}>
                        <Image style={styles.leftButton} source={require('@images/Ecommerce/ic_search.png')}/> 
                        <Text style={styles.headerText}>MARKET PLACE</Text>
                        <Image  style={styles.rightButton} source={require('@images/Ecommerce/ic_settings.png')}/>
                    </View>

                    <View style={{flex:1}}>
                        <TabViewAnimated
                         navigationState={this.state}
                         renderHeader={this._renderHeader}
                         renderScene={this._renderScane}
                         onIndexChange={this.__handleIndexChange}/>
                    </View>
                </View>
            
                
            </View>  
                 
        )
    }
}