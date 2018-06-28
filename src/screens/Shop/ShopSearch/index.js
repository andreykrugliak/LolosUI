import React,{Component} from 'react';
import {Container, Header, Content, Footer, FooterTab, Button, Text, Icon, Body, Right, Left,Title, Card, Badge, CardItem} from 'native-base';
import {View,Dimensions,Image,TouchableOpacity,FlatList,ScrollView,TextInput,ActivityIndicator} from 'react-native';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';
var WindowWidth = Dimensions.get('window').width
var WindowHeight = Dimensions.get('window').height
import styles from './style';
import firebase from 'react-native-firebase';
import moment from 'moment';
import Sugar from 'sugar'

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
            data:[],
            loading: true
        }
    }
    componentWillMount(){
        let self = this
        this.setState({loading: true})
        let uid = firebase.auth().currentUser.uid;
        firebase.database().ref('purchased/'+uid).on('value',function(snap){
            let data=[]
            snap.forEach(c=>{
                // console.log('++---purchased',c.key, moment(c.val().time).format('MM.DD.YY'))
                c.val().date = moment(c.val().time).format('MM.DD.YY')
                data.push(c.val())
            })
            self.setState({data, loading: false})
        }).bind(this)
    }

    

    
    

    render(){
        let self = this
        let data = []
        data = this.state.data.sort(function(a,b){            
            if(a.time>b.time) return -1
            if(a.time<b.time) return 1
            return 0
        }).filter(d=>{
                d.date = moment(d.time).format('DD.MM.YY')
                return true
            })
        let DatabyDate = Sugar.Array.groupBy(data,n=>{
                return n.date
            })
            
            let finalData = []
            Sugar.Object.forEach(DatabyDate,(val, key)=>{
                let dataJson = {};                
                dataJson.date = key;
                dataJson.val = val;
                finalData.push(dataJson);
            })
        console.log('++----purchased Data',finalData)
        return(
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity 
                    style={{position: 'absolute', left: 18}}
                    onPress={()=>{
                        this.props.navigator.pop({
                            animationType:"slide-horizontal"
                        })
                    }}>
                        <Image style={styles.back} source={require('@images/DrawerScreen/left.png')}/>
                    </TouchableOpacity>
                    <Text  style={styles.searchItem}>ORDER HISTORY</Text>
                </View>

                <ScrollView  contentContainerStyle={styles.searchSection}>
                    {
                        finalData.map(f=>{
                            return(
                                <View style={{backgroundColor:'transparent'}}>
                                    <Text style={{marginLeft: 15}}>{f.date}</Text>
                                    {
                                        f.val.map(v=>{
                                            return(
                                                <View style={[styles.container1,{backgroundColor:'transparent'}]}>
                                                    <TouchableOpacity
                                                        onPress={()=>{
                                                            self.props.navigator.push({
                                                            screen:'app.ProductPage',
                                                            animationType:"slide-horizontal",
                                                            passProps:{item:v}
                                                            }) 
                                                        }}>
                                                        <View style={[styles.card,{shadowOpacity:0.3,shadowRadius:2,shadowColor:'rgba(0,0,0,0.20)',shadowOffset:{width:0,height:2}}]}>
                                                            <Image style={styles.productIcon} resizeMode={'stretch'} 
                                                                source={{uri: v.Preview_Img}}/>
                                                            <View style={styles.detail}>
                                                                <Text  numberOfLines={3} style={styles.title}>
                                                                    {v.Product_Name}
                                                                </Text>
                                                                <View style={styles.label}>
                                                                    <Text style={styles.labelText}>
                                                                        {v.Price_Lolos} lolo's
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
                                        })
                                    }
                                </View>
                            )
                        })
                    }
                </ScrollView> 
                {
                this.state.loading?
                    <View style={{flex:1,width:WindowWidth, height: WindowHeight,justifyContent:"center",alignItems:'center',position:'absolute'}}>
                        <ActivityIndicator size='large' color='#ffb100' />
                    </View>:null
                }
            </View>
        )
    }
}