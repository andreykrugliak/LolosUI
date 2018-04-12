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
                    title:'Elastic sport wristband',
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
            sportsData:[
                {
                    id:'1',
                    image:'@images/shopSports/1_sport.jpg',
                    title:'Elastic sport wristband',
                    price:"357 lolo's",
                    label:'SUPER HOT',
                },
                {
                    id:'2',
                    image:'@images/shopSports/2_sport.jpg',
                    title:'2.8m/75cm Sports LED Luminous Jump Skipping Ropes Handle Rope Jump Ropes Crossfit Training Boxing Fitness Equipment Random Color',
                    price:"357 lolo's",
                    label:'SUPER HOT',
                },
                {
                    id:'3',
                    image:'@images/shopSports/3_sport.jpg',
                    title:'cross-fit jumping rope',
                    price:"357 lolo's",
                    label:'SUPER HOT',
                },
            ],


            index:0,
            routes: [
                // { key: '0', title: 'All' },
                // { key: '1', title: 'Gadgets' },
                // { key: '2', title: 'Mobile' },
                // { key: '3', title: 'Fashion' },
                // { key: '4', title: 'Sports'}
                {key:'0',title:'Sports'}
              ],
        })
        this._handleIndexChange=this._handleIndexChange.bind(this)
        this._renderHeader=this._renderHeader.bind(this)
        this._renderScane=this._renderScane.bind(this)
        this._renderItems=this._renderItems.bind(this)
    }

    _renderHeader = props =>{
        return(
            
            <TabBar
            {...props}
            scrollEnabled ={true}
            style={{ backgroundColor:'rgba(254,116,112,1)',height:50,justifyContent:'center'}}
            indicatorStyle={{backgroundColor:'#fff',height:5}}
            labelStyle={{opacity:1}}
            renderLabel = {(scene) => <Text 
                                        style={{ 
                                            fontWeight:scene.index==this.state.index? '900':'normal',
                                            color:'#fff',
                                            fontFamily:'Lato',                
                                        }}>{scene.route.title}</Text>}
             />
        )
    } 

    _renderScane=({ route })=>{
        console.log(route.key)
        let categoryKey=route.key
        return(
                <FlatList
                    style={{flex:1}}
                    data={
                            route.key==0?
                            this.state.sportsData:
                            this.state.data
                        }
                    keyExtractor={(item,index)=>item.id}
                    renderItem={({item,index})=>this._renderItems({item,index},categoryKey)}
                />
        )
    }

    _handleIndexChange(index){
        this.setState({
            index:index
        })
        console.log(index)
    }

    _renderItems=({item,index},categoryKey)=>{

       console.log(item.title)
        console.log("categoryKey"+categoryKey)
        return(
        <View style={[styles.container]}>
            <TouchableOpacity
                onPress={()=>{
                    this.props.navigator.push({
                    screen:'app.ProductPage',
                    animationType:"slide-horizontal",
                    passProps:{index:item.id,categoryKey:categoryKey,name:item.title}
                    }) 
                }}>
                <View style={[styles.card,{shadowOpacity:0.3,shadowRadius:2,shadowColor:'rgba(0,0,0,0.20)',shadowOffset:{width:0,height:2}}]}>
                    <Image style={styles.productIcon} resizeMode={'stretch'} 
                           source={
                                item.id=='1'?
                                    require('@images/shopSports/1_sport.jpg'):
                                item.id=='2'?
                                    require('@images/shopSports/2_sport.jpg'):
                                item.id=='3'?
                                    require('@images/shopSports/3_sport.jpg'):
                                    require('@images/HomePage/image.jpg')
                               }/>
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
                                <Image style={styles.extraInfoIcon} source={require('@images/Shop/superhot.png')} />
                                <Text style={styles.superHotText}>{item.label}</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </TouchableOpacity> 
        </View>
           
        )
    }

    render(){
        return(
            <View style={{backgroundColor:'#F6F6F6',flex:1}}>
                <View style={{flex:1}}>
                    <View style={styles.header}>
                        <TouchableOpacity onPress={()=>{
                            this.props.navigator.push({
                                screen:'app.ShopSeach',
                                animationType:"slide-horizontal"
                            })
                        }}>
                            <Image style={styles.leftButton} source={require('@images/Shop/ic_search.png')}/>
                        </TouchableOpacity>
                        
                        <Text style={styles.headerText}>MARKET PLACE</Text>
                        <TouchableOpacity onPress={()=>{
                            this.props.navigator.push({
                                screen:'app.FiltersShop',
                                animationType:"slide-horizontal"
                            })
                        }}>
                            <Image  style={styles.rightButton} source={require('@images/Shop/ic_settings.png')}/>
                        </TouchableOpacity>
                        
                    </View>

                    <View style={{flex:1}}>
                        <TabViewAnimated
                         navigationState={this.state}
                         renderHeader={this._renderHeader}
                         renderScene={this._renderScane}
                         onIndexChange={this._handleIndexChange}/>
                    </View>
                </View>
            
                
            </View>  
                 
        )
    }
}
