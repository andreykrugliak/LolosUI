import React,{Component} from 'react';
import {Container, Header, Content, Footer, FooterTab, Button, Text, Icon, Body, Right, Left,Title, Card, Form, CardItem, Textarea} from 'native-base';
import {View,Dimensions,Image,TouchableOpacity,FlatList,Platform} from 'react-native';
import { TabViewAnimated,TabViewPagerPan,TabViewPagerScroll, TabBar, SceneMap } from 'react-native-tab-view';
import Swiper from 'react-native-deck-swiper'
var WindowWidth = Dimensions.get('window').width
var WindowHeight = Dimensions.get('window').height
import styles from './style';
import firebase from 'react-native-firebase';



export default class Submit1 extends Component{
    
    static navigatorStyle = {
        navBarHidden:true
    };
    constructor(props)
    {
        super(props)
        this.state=({
            loading: true,
            data:[], 
            index:0,
            fashion: [],
            text: ''
        })
        
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
            
            
        }).bind(this)
    }
    gotoHome(){
        let uid = firebase.auth().currentUser.uid;
        firebase.database().ref('wishList/'+uid).update({
            time: new Date().getTime(),
            url: this.props.url,
            description: this.state.text
        })
            this.props.navigator.push({
                screen:'app.HomePage',
                animationType:"slide-horizontal",
                passProps: {from: true,purchase: true}
        })  
    }
   

    
  

    
   

    render(){       
        return(
            <View style={{backgroundColor:'#FFF',flex:1}}>
                <View style={{flex:1}}>
                    <View style={[styles.header]}>
                          <TouchableOpacity  
                            style={{position:"absolute",left:27}}
                            onPress={()=>{
                            this.props.navigator.pop({                               
                                animationType:"slide-horizontal"
                            })                            
                        }}> 
                            <Image style={styles.leftButton} source={require('@images/DrawerScreen/left.png')}/>
                        </TouchableOpacity>                         
                        <Text style={styles.headerText}>SUBMIT PRODUCT</Text>
                                               
                    </View>
                    <View style={{flex: 1,alignItems:'center',paddingTop:25}}>
                        <Text style={[styles.wishcommand,{fontSize: 15,fontWeight:'400',textAlign:'center'}]}>if there are variants to the product such as size, color etc...mention in below</Text>
                        
                        <Textarea onChangeText={(t)=>this.setState({text:t})} placeholder='description' rowSpan={5} style={styles.textInputArea} />
                        <Image source={require('@images/gift_open.png')} style={styles.gift_open}/>
                        <View style={{flexDirection:'row',marginTop:30,height:15}}>                            
                            <View style={[styles.activeCircle,{opacity:0.6,marginRight: 8}]} />
                            <View style={styles.activeCircle} />
                        </View>
                    </View>
                    <Button disabled={this.state.text.length>4?false:true} onPress={()=>this.gotoHome()}
                            style={[styles.buttonContainer,{backgroundColor:this.state.text.length>4?'#FF4273':'#F0F0F0'}]}>
                            <Text style={[styles.buttonText,{color:this.state.text.length>4?'white':'#CCCCCC'}]}>Submit</Text>
                    </Button>
                  
                </View>
            
                
            </View>  
                 
        )
    }
}
