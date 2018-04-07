import React,{Component} from 'react';
import {Container, Header, Content, Footer, FooterTab, Button, Text, Icon, Body, Right, Left,Title, Card, Badge, CardItem} from 'native-base';
import {View,Dimensions,Image,ScrollView,TouchableOpacity,FlatList} from 'react-native';

var WindowWidth = Dimensions.get('window').width
var WindowHeight = Dimensions.get('window').height
import styles from './style'

export default class Wallet extends Component{
    static navigatorStyle = {
        navBarHidden:true
    };
    render(){
    return(
        <View style={{flex:1,zIndex:0}}>
             <Header style={styles.headerStyle}>
            <Left style={styles.headerLeftSide}>
                <Button transparent onPress={()=>{
                    this.props.navigator.toggleDrawer({
                        side:'left',
                        to:'open'
                    })
                }}>
                    <Image source={require('@images/HomePage/MenuBlack.png')}></Image>
                </Button>
            </Left>

            <Body style={styles.centerLogo}>
                <Title style={styles.headerText}>LOLO'S</Title>
            </Body>

            <Right>
                <Button transparent onPress={()=>{
                    this.props.navigator.toggleDrawer({
                        side:'right',
                        to:'open'
                    })
                }}>
                    <Badge style={[styles.badgeStyle]}>
                        <View>
                            <Text style={styles.badgeText}>1</Text>
                        </View>
                    </Badge>  
                    <Image source={require('@images/HomePage/NOTIFICATIONWhite.png')}>
                    </Image>
                </Button>
            </Right>
        </Header>
        <ScrollView >
            
           
        
            <Text style={styles.date}>12.12.17</Text>
            <Text style={styles.currentWalletText}>Current in my Wallet</Text>
            <Text style={styles.currentWalletNum}>34</Text>
            <Image style={styles.twoSmiley} source={require('@images/InviteFriends/2smiley.png')}/>
              
                <View style={{flexDirection:'row',marginTop:55,justifyContent:'space-between',marginHorizontal:24}}>
                    <View style={[styles.soonBox,{left:11}]}>
                            <Text style={styles.soonText}>Soon</Text>
                    </View>
                    <View style={styles.box}>
                        <Text style={styles.requestText}>Request lolo's</Text>
                    </View> 
                    
                    <View style={[styles.soonBox,{left:(WindowWidth/2)-7}]}>
                            <Text style={styles.soonText}>Soon</Text>
                    </View> 
                    <View style={styles.box}>
                        <Text style={styles.requestText}>Give lolo's</Text>
                    </View>  


                </View> 
                <View style={[styles.backGround,{ marginTop:25}]}>
                    </View> 
                <View style={{height:150}}>
                    <Image style={styles.smileyIcon} source={require('@images/HomePage/wallet/smiley.png')}/>
                    <Image style={styles.greenIcon} source={require('@images/HomePage/wallet/greenIcon.png')}/>
                    <View style={styles.flexColumn}>
                            <Text style={styles.days}>2 DAYS AGO</Text>
                            <Text style={styles.age}>+ 18</Text>
                            <Text style={styles.sendText}>Recived from Mom</Text>
                    </View>
                </View>
                <View style={styles.backGround}>
                    </View> 
                <View style={{height:150}}>
                    <Image style={styles.sadIcon} source={require('@images/HomePage/wallet/sadIcon.png')}/>
                    <Image style={styles.redIcon} source={require('@images/HomePage/wallet/redIcon.png')}/>
                    <View style={styles.flexColumn}>
                            <Text  style={styles.days}>27.11.17</Text>
                            <Text style={styles.age}>- 42</Text>
                            <Text style={styles.sendText}>Bought Item</Text>
                    </View>
                </View>
                <View style={styles.backGround}>
                    </View> 
          
        </ScrollView>
        </View>
    )
}
}