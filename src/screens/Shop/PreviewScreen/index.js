import React,{Component} from 'react';
import {Container, Header, Content, Footer, FooterTab, Button, Text, Icon, Body, Right, Left,Title, Card, Badge, CardItem} from 'native-base';
import {View,Dimensions,Image,TouchableOpacity,FlatList,Platform, Alert} from 'react-native';
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
            fashion: [],
            wishlist: {},
            country:'',
            street: '',
            city: '',
            zipcode: '',            
            balance: 0,
            state: '',
            apt: '',
            fullname:''
        })
        this._handleIndexChange=this._handleIndexChange.bind(this)
        this._renderHeader=this._renderHeader.bind(this)
        this._renderScane=this._renderScane.bind(this)
        this._renderItems=this._renderItems.bind(this)
    }
    componentWillMount(){
        
        this.setState({loading: true})
        let uid = firebase.auth().currentUser.uid;
        // firebase.database().ref('Products').on('value',snapshot=>{
            
        //     let data = [];
        //     let finalData = []
        //     let route = []
        //     snapshot.forEach(child=>{
        //         data.push(child.val())
        //     })
        //     let DatabyCategory = Sugar.Array.groupBy(data,n=>{
        //         return n.Lolos_Category
        //     })
            
        //     let i = 0
        //     Sugar.Object.forEach(DatabyCategory,(val, key, index)=>{
        //         let dataJson = {};
        //         let routeJson = {}
        //         dataJson.category = key;
        //         dataJson.val = val;
        //         routeJson.key = i;
        //         routeJson.title = key;
        //         route.push(routeJson);
        //         finalData.push(dataJson);
        //         i++;
        //     })
        //     // console.log('++--DATA',finalData, route)
        //     this.setState({data: finalData, loading: false, routes: route})
            
        // }).bind(this)
        firebase.database().ref('wishList/'+uid).on('value',snapshot=>{
            console.log('++--',snapshot.val())
            this.setState({wishlist: snapshot.val(),loading: false})
        }).bind(this)
        firebase.database().ref('users/'+uid).on('value',snapshot=>{
            country=snapshot.child('country').val();
            street=snapshot.child('street').val();            
            city=snapshot.child('city').val();
            zipcode=snapshot.child('zipcode').val();
            state=snapshot.child('state').val();
            apt=snapshot.child('apt').val();
            let balance = snapshot.child('balance').val();
            let fullname=snapshot.child('fullname').val();
            if(country === null) country = ''
            if(street === null) street = ''
            if(city === null) city = ''
            if(zipcode === null) zipcode = ''
            if(balance === null) balance = 0
            if(state===null) state=''
            if(apt===null) apt=''
            if(fullname===null) fullname=''
            this.setState({
               country,
               city,
               street,
               zipcode,
               loading: false,
               balance,
               apt,
               state,
               fullname
           })
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
        if(this.state.loading) return(<View/>)
        console.log('++-----rendering',this.state.wishlist)
        return(
            <View style={{backgroundColor:'#FFF',flex:1}}>
                <View style={{flex:1}}>
                    <View style={[styles.header]}>
                        {/* <TouchableOpacity  
                            style={{position:"absolute",left:27}}
                            onPress={()=>{
                            this.props.navigator.push({
                                screen:'app.ShopSeach',
                                animationType:"slide-horizontal"
                            })                            
                        }}> 
                            <Image style={styles.leftButton} source={require('@images/History.png')}/>
                        </TouchableOpacity> */}                        
                        <Text style={styles.headerText}>{!this.state.wishlist?'WISH LIST':'PRODUCT REQUEST'}</Text>
                          <TouchableOpacity    
                          style={{position:"absolute",right:27}}
                          onPress={()=>{
                             Alert.alert(
                                        '',
                                        'Are you sure you want to delete this product request?',
                                        [
                                            {text:'Cancel',onPress:()=>console.log('cancel'),style:'cancel'},
                                            {text: 'OK',onPress:()=>{
                                                let uid=firebase.auth().currentUser.uid
                                                firebase.database().ref('wishList/'+uid).remove()
                                                this.props.navigator.push({
                                                    screen:'app.HomePage',
                                                    animationType:"slide-horizontal",
                                                    passProps:{from: true}})
                                                }
                                            }
                                        ]

                                    )
                        }}>
                            <Icon name='trash' style={{fontSize:25,marginBottom: -14}} />
                        </TouchableOpacity>                          
                    </View>
                    {!this.state.wishlist?
                        <View style={{flex: 1,alignItems:'center',paddingTop:25}}>
                            <Image source={require('@images/wish_bg.png')} style={styles.cardImage}/>
                            <Text style={styles.wishcommand}>YOUR WISH IS OUR COMMAND!</Text>
                            <Text style={styles.wishplane}>you select what you want and we will make a plane for you to get it!</Text>
                            <TouchableOpacity 
                                style={[styles.button]} onPress={()=>this.props.navigator.push({
                                    screen:'Submit1',
                                    animationType:"slide-horizontal"
                                })}>
                                    <Text style={[styles.buttonTextInvite]}>Next</Text>
                            </TouchableOpacity>
                        </View>:
                        <View style={{flex: 1,paddingTop:25,paddingHorizontal:20}}>
                            <Text style={[styles.wishplane,{alignSelf:'center',fontSize:16}]}>your product request details</Text>
                            <Text style={[{color:'#bdbdbd',marginTop:20,fontSize:13}]}>product link</Text>
                            <Text style={[{color:'#60b0de',marginTop:20,fontSize:13}]}>{this.state.wishlist.url}</Text>
                            <Text style={[{color:'#bdbdbd',marginTop:20,fontSize:13}]}>product description</Text>
                            <Text style={[{color:'#333',marginTop:20,fontSize:13}]}>{this.state.wishlist.description}</Text>
                            <Text style={[{color:'#bdbdbd',marginTop:20,fontSize:13}]}>product price</Text>
                            <Text style={[{color:'#333',marginTop:20,fontSize:13}]}>{this.state.wishlist.price} Lolos</Text>
                            <View style={styles.Line} />
                            <Text style={[styles.wishcommand,{fontSize:16,textAlign:'center',marginTop:5}]}>YOU CAN GET THIS PRODUCT RIGHT NOW</Text>
                            {
                                this.state.balance>this.state.wishlist.price?
                                <TouchableOpacity 
                                    style={[styles.button,{backgroundColor:'#FF4273',borderRadius:4}]} onPress={()=>{

                                         if(this.state.country===''||this.state.city===''||this.state.street===''||this.state.zipcode===''){
                                    
                                                Alert.alert(
                                                    '',
                                                    'You must setup an address in order to make a purchase.',
                                                    [
                                                        {text:'Later',onPress:()=>console.log('cancel'),style:'cancel'},
                                                        {text: 'Setup',onPress:()=>this.props.navigator.push({screen:'app.shippingAddressHome',
                                            animationType:"slide-horizontal"})}
                                                    ]

                                                )
                                                return
                                            }
                                            if(this.state.fullname===''){
                                                Alert.alert(
                                                    '',
                                                    'You must complete your profile details to make a purchase.',
                                                    [
                                                        {text:'Later',onPress:()=>console.log('cancel'),style:'cancel'},
                                                        {text: 'Setup',onPress:()=>
                                                        this.props.navigator.push({
                                                            screen:'app.myProfile',
                                                        animationType:"slide-horizontal"})}
                                                    ]

                                                )
                                                return
                                            }
                                        this.props.navigator.push({
                                            screen:'app.HomePage',
                                            animationType:"slide-horizontal",
                                            passProps: {from: true, purchase: true}
                                        })
                                    }}>
                                        <Text style={[styles.buttonTextInvite,{color:'white'}]}>Buy Product</Text>
                                </TouchableOpacity>:
                                <TouchableOpacity 
                                    style={[styles.button]} onPress={()=>this.props.navigator.push({
                                        screen:'Submit1',
                                        animationType:"slide-horizontal"
                                    })}>
                                        <Text style={[styles.buttonTextInvite]}>Earn Lolos</Text>
                                </TouchableOpacity>
                            }
                        </View>
                    }
                    
                    {/* <View style={{flex:1}}>
                        <TabViewAnimated
                         navigationState={this.state}
                         renderHeader={this._renderHeader}
                         renderScene={this._renderScane}
                         onIndexChange={this._handleIndexChange}
                         renderPager={this._renderPager}/>
                    </View> */}
                </View>
            
                
            </View>  
                 
        )
    }
}
