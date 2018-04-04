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
        this.state={
            searchKey:'',
            search:false,
            match:false,
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
                },
                {
                    id:'3',
                    image:'@images/HomePage/image.jpg',
                    title:'Binfull Mini Prortable Micro Mobile Phone USB Gadget Fans Tester For iphone 5S',
                    price:"357 lolo's",
                    label:'SUPER HOT',
                },
                {
                    id:'4',
                    image:'@images/HomePage/image.jpg',
                    title:'Binfull Mini Prortable Micro Mobile Phone USB Gadget Fans Tester For iphone 5S',
                    price:"357 lolo's",
                    label:'SUPER HOT',
                }
            ],
        }
    }

    _handleTextInput(text){
        console.log(text)
        this.setState({
            searchKey:text
        })

        if(this.state.searchKey)
        {
            let searchKeyLength=this.state.searchKey.length
           
            if(searchKeyLength>1)
            {
                this.setState({
                    search:true
                })
            }
            if(searchKeyLength==1)
            {
                this.setState({search:false,match:false})
            }
            console.log(searchKeyLength)
        }else{
            this.setState({search:false,match:false})
           
        }
    }

    _handleSearch(){
        this.setState({match:true})
    }

    _handleMatch(){
        this.setState({
            searchKey:null,
        })
    }

    _renderItems=({item,index})=>{
        return(
            <View style={styles.FlatListcontainer}>
                <View style={[styles.card,{shadowOpacity:0.3,shadowOffset:{width:0,height:1}}]}>
                    <Image style={styles.productIcon} resizeMode={'stretch'} source={require('@images/Shop/image.jpg')}/>
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
            </View>
        )
    }


    render(){
        return(
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image style={styles.back} source={require('@images/DrawerScreen/left.png')}/>
                    <Text  style={styles.searchItem}>SEARCH ITEM</Text>
                </View>

                <View style={styles.searchSection}>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                        <View style={this.state.search?[styles.body,{width:WindowWidth-105,justifyContent:'space-between'}]:styles.body}>
                            <TextInput
                            style={styles.textInput}
                            placeholder={'Search . . .'}
                            value={this.state.searchKey}
                            underlineColorAndroid='transparent'
                            onChangeText={(text)=>this._handleTextInput(text)}
                            />
                            {
                                this.state.search?
                                <View>
                                <TouchableOpacity 
                                onPress={()=>{
                                    this.state.match?
                                    this._handleMatch()
                                    :
                                    this._handleSearch()
                                }}>
                                <Image style={
                                    this.state.match?
                                    [styles.iconSearch,{height:24,width:24,marginRight:13,marginVertical:18}]:
                                    [styles.iconSearch,{height:50,width:50,marginRight:5,marginVertical:5}]} 
                                    source={this.state.match?require('@images/Shop/cross.png'):require('@images/Shop/greenSearch.png')} />
                                </TouchableOpacity>
                                </View>:
                                <Image style={styles.iconSearch} source={require('@images/Shop/ic_search.png')} />    
                            }
                            
                        </View>
                            {this.state.search?
                            <TouchableOpacity onPress={()=>this._handleMatch()}><Text style={styles.cancel}>Cancel</Text></TouchableOpacity>
                            :null}
                    </View>
                </View> 
                <View style={styles.line}></View>
                {
                    this.state.search?
                    <View style={[{flex:1}]}>
                    {
                        this.state.match?
                        <View style={{flex:1,backgroundColor:'#F6F6F6'}}>
                            <FlatList
                            style={{flex:1}}
                            data={this.state.data}
                            keyExtractor={(item,index)=>item.id}
                            renderItem={this._renderItems}
                            />
                        </View>
                        :
                        <View style={styles.recentSearch}>
                            <Text style={styles.item}>item#1</Text>
                            <Text style={styles.item}>item#1</Text>
                            <Text style={styles.item}>item#1</Text>
                            <Text style={styles.item}>item#1</Text>
                        </View>

                    }  
                    </View>
                    :
                    <View>
                        <View>
                            <View style={[styles.recentSearch,{marginTop:1}]}>
                                <Text style={styles.head}>Recent Searches</Text>
                                <Text style={styles.item}>item#1</Text>
                                <Text style={styles.item}>item#1</Text>
                                <Text style={styles.item}>item#1</Text>
                                <Text style={styles.item}>item#1</Text>
                            </View>
                            <View style={styles.line}></View>
        
                            <View style={[styles.recentViewed]}>
                                <Text style={[styles.head,{marginLeft:30}]}> Recently Viewed</Text>
                                <FlatList
                                horizontal={true}
                                keyExtractor={(item,index)=> item}
                                style={styles.productImages}
                                data={['1','2','16','26','17','29','10','20']}
                                renderItem={()=>{
                                    return( 
                                        <Image style={styles.img} resizeMode={'stretch'} source={require('@images/HomePage/image.jpg')}/>
                                    )
                                }}
                                />    
                            </View>
                        </View>
                    </View>

                }

            </View>
        )
    }
}