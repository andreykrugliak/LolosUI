import React,{Component} from 'react'
import {Text,View,Image,FlatList, TouchableOpacity, ScrollView} from 'react-native'
import Swipeable from 'react-native-swipeable';
import styles from './style'

export default class Notifications extends Component{
   // swipeable=null
    static navigatorStyle={
        navBarHidden:true
    }
    constructor(props){
        super(props)
        this.state={
            data:[
                {id:1,date:' 18.12.17'},
                {id:2,date:' 13.12.17'},
                {id:3,date:' 12.12.17'},
                {id:4,date:' 12.12.17'}
            ],
            swipeable:[],
            backButton:false
        }
        //swipeable:[]
        this._keyExtractor = this
            ._keyExtractor
            .bind(this)
        this.Notifications=this.Notifications.bind(this)
        this._handleSwipe=this._handleSwipe.bind(this)
        this._handleDelete=this._handleDelete.bind(this)
    }

    _handleSwipe()
    {
        for(i=0;i<this.state.swipeable.length;i++){
            this.state.swipeable[i].recenter()
        }
    }

    _handleDelete(key){

        this.state.data.splice(key,1)
        this.setState({
            data:this.state.data
        })
        console.log(this.state.data)
    }

    _keyExtractor = (item, index) => item.id;

     Notifications=(item,index)=>{ 
        return(
            <Swipeable onRef={(ref)=>this.state.swipeable.push(ref)} style={[styles.NotificationBox,{flex:1}]}
                rightButtons={[
                    <TouchableOpacity 
                        onPress={()=>{
                            this._handleDelete(index)  
                            }}
                        style={[{backgroundColor:'#D0021B',height:70,width:80,alignItems:'center',justifyContent:'center'}]}>
                        <Image style={{height:22,width:22}} source={require('@images/component/cancel.png')}/>
                    </TouchableOpacity>
                ]}>
                    <TouchableOpacity onPress={()=>{
                            this.props.navigator.handleDeepLink({
                                link: "Rightmenu",
                                payload: {screen:"app.NoficationScreen",title:'Notifications'}
                     })}}>    
                        <Text style={styles.mainText}>
                            Welcome to lolo's
                        </Text>
                        <Text style={styles.subText}>
                            We more then happty to have you onboard
                        </Text>
                        <Text style={styles.dateText}>
                        {item.item.date}
                        </Text>
                        <View style={styles.forwardImageContainer}>
                            <Image style={styles.forwardImage} source={require('@images/forward.png')}/>
                        </View>
                    </TouchableOpacity>
            </Swipeable>
        )}
          
    render(){
        return(
            <ScrollView style={{backgroundColor:'white',flex:1}}>
                    <View style={styles.container}>
                        <TouchableOpacity style={styles.imageContainer} 
                            onPress={()=>{
                                this._handleSwipe()
                                this.props.navigator.pop()
                                // side: 'right',
                                // to:'close',
                                }}>
                                <Image style={styles.backImage} source={require('@images/InviteFriends/back.png')}/>
                        </TouchableOpacity>
                        <Text style={styles.text}>NOTIFICATIONS</Text>
                    </View>
                 
                    <FlatList
                    style={{flex:1}}
                    extraData={this.state}
                    data={this.state.data}
                    renderItem={this.Notifications}
                    keyExtractor={this._keyExtractor}/>
                   
            </ScrollView>
        )
    }
}
