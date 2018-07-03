import React,{Component} from 'react';
import {Container, Header, Content, Footer, FooterTab, Button, Text, Icon, Body, Right, Left,Title, Card, Badge, CardItem, Input} from 'native-base';
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
            
            
            let i = 0
            
            
            
        }).bind(this)
    }

   

    gotoHome(){
   
        this.props.navigator.push({
            screen: 'Submit2',
            animationType: 'slide-horizontal',
            passProps: {url: this.state.text}
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
                        {/* <TouchableOpacity    onPress={()=>{
                            this.props.navigator.push({
                                screen:'app.FiltersShop',
                                animationType:"slide-horizontal"
                            })
                        }}>
                            <Image  style={styles.rightButton} source={require('@images/Shop/ic_settings.png')}/>
                        </TouchableOpacity> */}                        
                    </View>
                    <View style={{flex: 1,alignItems:'center',paddingTop:25}}>
                        
                        <Text style={[styles.wishcommand,{fontSize: 15,fontWeight:'400'}]}>paste the product page url to the box below</Text>
                        <View style={styles.textInput}>
                            <Input value={this.state.text} style={{marginLeft:16}} returnKeyType='done' onChangeText={(text) => this.setState({text,nameText:false})}/>
                        </View>
                        <Text style={[styles.wishplane,{color:'#FF4273',fontSize:13}]}>please note: unsuitable products will not be applied</Text>
                        <Text style={[styles.wishplane,{color:'grey',fontSize:13,marginTop:45}]}>we support all big marketplaces and many more...</Text>
                        <Image source={require('@images/logo.png')} style={styles.logoImage} />
                        <View style={{flexDirection:'row',marginTop:30,height:15}}>
                            <View style={styles.activeCircle} />
                            <View style={[styles.activeCircle,{opacity:0.6,marginLeft: 8}]} />
                        </View>
                    </View>
                     <Button disabled={this.state.text.length>4?false:true} onPress={()=>this.gotoHome()}
                            style={[styles.buttonContainer,{backgroundColor:this.state.text.length>4?'#FF4273':'#F0F0F0'}]}>
                            <Text style={[styles.buttonText,{color:this.state.text.length>4?'white':'#CCCCCC'}]}>Next</Text>
                    </Button>
                  
                </View>
            
                
            </View>  
                 
        )
    }
}
