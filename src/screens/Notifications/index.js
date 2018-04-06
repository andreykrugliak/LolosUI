import React,{Component} from 'react'
import {Text,View,Image,FlatList, TouchableOpacity, ScrollView} from 'react-native'

import styles from './style'

export default class Notifications extends Component{
    static navigatorStyle={
        navBarHidden:true
    }
    constructor(props){
        super(props)
        this.state={
            data:[
                {id:1,
                date:' 18.12.17'},
                {id:2,date:' 13.12.17'},
                {id:3,date:' 12.12.17'},
                {id:4,date:' 12.12.17'}
            ]
        }
        this._keyExtractor = this
            ._keyExtractor
            .bind(this)
    }
    _keyExtractor = (item, index) => item.id;
    Notifications=(item)=>{
        
        return(
        <TouchableOpacity onPress={()=>{
            this.props.navigator.push({
                screen:'app.NoficationScreen',
              //  animationType:'slide-horizontal'
            })
        }}
        style={styles.NotificationBox}>
            <Text style={styles.mainText}>
                Welcome to lolo's
            </Text>
            <Text style={styles.subText}>
                We more then happty to have you onboard
            </Text>
            <Text style={styles.dateText}>
            {item.item.date}
            </Text>
            <TouchableOpacity style={styles.forwardImageContainer}>
                <Image style={styles.forwardImage} source={require('@images/forward.png')}/>
            </TouchableOpacity>
        </TouchableOpacity>
        )}
    render(){
        return(
            <ScrollView style={{flex:1,backgroundColor:'white'}}>
                     <View style={styles.container}>
                        <TouchableOpacity style={styles.imageContainer} 
                            onPress={()=>{this.props.navigator.toggleDrawer({
                                side: 'right',
                                to:'close',
                                })}}>
                                <Image style={styles.backImage} source={require('@images/InviteFriends/back.png')}/>
                        </TouchableOpacity>
                        <Text style={styles.text}>INVITE FREINDS</Text>
                    </View>
                    <FlatList
                    data={this.state.data}
                    renderItem={this.Notifications}
                    keyExtractor={this._keyExtractor}/>
                   
            </ScrollView>
        )
    }
}