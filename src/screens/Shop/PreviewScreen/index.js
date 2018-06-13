import React,{Component} from 'react';
import {Container, Header, Content, Footer, FooterTab, Button, Text, Icon, Body, Right, Left,Title, Card, Badge, CardItem} from 'native-base';
import {View,Dimensions,Image,TouchableOpacity,FlatList,Platform} from 'react-native';
import { TabViewAnimated,TabViewPagerPan,TabViewPagerScroll, TabBar, SceneMap } from 'react-native-tab-view';
import Swiper from 'react-native-deck-swiper'
var WindowWidth = Dimensions.get('window').width
var WindowHeight = Dimensions.get('window').height
import styles from './style';
import firebase from 'react-native-firebase';
import Sugar from 'sugar'


export default class PreviewScreen extends Component{
    
    static navigatorStyle = {
        navBarHidden:true
    };
    constructor(props)
    {
        super(props)
        this.state=({
            loading: true,
            data:[
                
            ],
            sportsData:[
                {
                    id:'0',
                    image:'@images/shopSports/1_sport.jpg',
                    title:'Elastic sport wristband',
                    price:"357 lolo's",
                    label:'SUPER HOT',
                },
                {
                    id:'1',
                    image:'@images/shopSports/2_sport.jpg',
                    title:'2.8m/75cm Sports LED Luminous Jump Skipping Ropes Handle Rope Jump Ropes Crossfit Training Boxing Fitness Equipment Random Color',
                    price:"357 lolo's",
                    label:'SUPER HOT',
                },
                {
                    id:'2',
                    image:'@images/shopSports/3_sport.jpg',
                    title:'cross-fit jumping rope',
                    price:"357 lolo's",
                    label:'SUPER HOT',
                },
            ],


            index:0,
            routes: [
                {key:'0',title:'Sports'},
                { key: '1', title: 'Gadgets' },
                { key: '2', title: 'Mobile' },
                { key: '3', title: 'Fashion' },
                { key: '4', title: 'Sports'},
              ],
            fashion: []
        })
        this._handleIndexChange=this._handleIndexChange.bind(this)
        this._renderHeader=this._renderHeader.bind(this)
        this._renderScane=this._renderScane.bind(this)
        this._renderItems=this._renderItems.bind(this)
    }
    componentWillMount(){
        
        this.setState({loading: true})
        let uid = firebase.auth().currentUser.uid;
        firebase.database().ref('Products').on('value',snapshot=>{
            
            let data = [];
            let finalData = []
            let route = []
            snapshot.forEach(child=>{
                data.push(child.val())
            })
            let DatabyCategory = Sugar.Array.groupBy(data,n=>{
                return n.Lolos_Category
            })
            
            let i = 0
            Sugar.Object.forEach(DatabyCategory,(val, key, index)=>{
                let dataJson = {};
                let routeJson = {}
                dataJson.category = key;
                dataJson.val = val;
                routeJson.key = i;
                routeJson.title = key;
                route.push(routeJson);
                finalData.push(dataJson);
                i++;
            })
            // console.log('++--DATA',finalData, route)
            this.setState({data: finalData, loading: false, routes: route})
            
        }).bind(this)
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
                                            fontFamily:'Lato-Regular',               
                                        }}>{scene.route.title}</Text>}
             />
        )
    } 

    _renderScane=({ route })=>{
        // console.log('++--ROUTE',route)
        let categoryKey=route.key
        return(
                <FlatList
                    style={{flex:1}}
                    data={
                         
                         //this.state.data
                         this.selectData(route) 
                        }
                    keyExtractor={(item,index)=>item.id}
                    renderItem={({item,index})=>this._renderItems({item,index},categoryKey)}
                />
        )
    }
    selectData(route){
        if(this.state.data.length>0){
            // return(
                let test=this.state.data.filter(d=>{
                    return d.category === route.title;
                })[0]
                // console.log('++--TEST',test.val)
                return test.val
            // )
        }
        return []
    }

    _handleIndexChange(index){
        this.setState({
            index:index
        })
        console.log(index)
    }

    _renderItems=({item,index},categoryKey)=>{

    //    console.log(item.title)
    //     console.log("categoryKey"+categoryKey)
    // console.log('++---ITEM',item)
        return(
        <View style={[styles.container]}>
            <TouchableOpacity
                onPress={()=>{
                    this.props.navigator.push({
                    screen:'app.ProductPage',
                    animationType:"slide-horizontal",
                    passProps:{item:item}
                    }) 
                }}>
                <View style={[styles.card,{shadowOpacity:0.3,shadowRadius:2,shadowColor:'rgba(0,0,0,0.20)',shadowOffset:{width:0,height:2}}]}>
                    <Image style={styles.productIcon} resizeMode={'stretch'} 
                           source={{uri: item.Preview_Img}}/>
                    <View style={styles.detail}>
                        <Text  numberOfLines={3} style={styles.title}>
                            {item.Product_Name}
                        </Text>
                        <View style={styles.label}>
                            <Text style={styles.labelText}>
                                {item.Price_Lolos} lolo's
                            </Text>
                        </View>
                       
                    </View>
                    <View style={styles.extraInfo}>
                            <Text style={[styles.shippingText,{paddingBottom:9}]}>Free Shipping</Text>
                            {/* <View style={styles.extraInfoLabel}>
                                <Image style={styles.extraInfoIcon} source={require('@images/Shop/superhot.png')} />
                                <Text style={styles.superHotText}>{item.label}</Text>
                            </View> */}
                        </View>
                </View>
                
            </TouchableOpacity> 
        </View>
           
        )
    }
    _renderPager = (props) => {
        return (Platform.OS === 'ios') ? <TabViewPagerScroll {...props} /> : <TabViewPagerPan {...props} />
       }

    render(){
        if(this.setState.loading) return(<View/>)
        // console.log('++-----rendering',this.state.data)
        return(
            <View style={{backgroundColor:'#F6F6F6',flex:1}}>
                <View style={{flex:1}}>
                    <View style={styles.header}>
                        <TouchableOpacity  onPress={()=>{
                            this.props.navigator.push({
                                screen:'app.ShopSeach',
                                animationType:"slide-horizontal"
                            })
                        }}> 
                            <Image style={styles.leftButton} source={require('@images/Shop/ic_search.png')}/>
                        </TouchableOpacity>
                        
                        <Text style={styles.headerText}>MARKET PLACE</Text>
                        <TouchableOpacity    onPress={()=>{
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
                         onIndexChange={this._handleIndexChange}
                         renderPager={this._renderPager}/>
                    </View>
                </View>
            
                
            </View>  
                 
        )
    }
}
