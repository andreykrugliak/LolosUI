import {Container, Header, Content, Footer, FooterTab, Button, Text, Icon, Body, Right, Left, Card, Badge, CardItem} from 'native-base';
import React, { Component } from 'react';
import { Dimensions , ScrollView , View, Image } from 'react-native'
import styles from './style'
let windowWidth=Dimensions.get("window").width
export default class ButtonExample extends Component {
    static navigatorStyle = {
        navBarHidden:true
      };
    constructor(props){
        super(props);
        this.state={
            active: true,
            tab1:true,
            tab2:false,
            tab3:false
           
        }
    }
    
    render() {
      return (
        <Container>
            <Header style={styles.headerStyle}>
                <Left style={styles.headerLeftSide}>
                    <Button transparent>
                        <Icon style={styles.menuIcon} name='ios-menu'></Icon>
                    </Button>
                </Left>
                <Body>
                    <Text style={styles.headerText}>Header Title</Text>
                </Body>
                <Right>
                    <Button transparent >
                        <Badge style={styles.badgeStyle}>
                            <View>
                                <Text style={styles.badgeText}>1</Text>
                            </View>
                        </Badge>  
                        <Icon style={styles.notificationIcon} name="ios-notifications-outline">
                        </Icon>
                    </Button>
                </Right>
            </Header>
            <Content>
                <View style={styles.middlePart}>
                

{/*                 
                <RadialGradient style={{width:50,height:50,borderRadius:25}}
                        colors={['#FFF','#FFF3F6']}
                        
                        center={[20,20]}
                        radius={25}>
                        
          
</RadialGradient>  */}

                    <Card>
                        <CardItem>
                            <Left>
                                <Body>
                                    <Text style={styles.cardWelcomeText}>Welcome!</Text>
                                    <Text style={styles.cardMessage}>to a world of new opportunities</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem cardBody>
                            <Image source={require('@images/HomePage/image.jpg')} style={styles.cardImage}/>
                        </CardItem>
                    </Card>            
                </View>
            </Content>
            <Footer style={styles.footerStyle}>
                <View style={[styles.footerLine,{width:windowWidth}]}></View>
                <FooterTab style={{backgroundColor:"#FFFFFF"}}> 
                    <Button  style={{backgroundColor:"#FFFFFF"}} active={this.state.tab1} onPress={() => this.setState({ tab1: !this.state.tab1 ,
                    })} >
                    {
                        this.state.tab1?
                        <Image style={{height:50,width:50,backgroundColor:"#FFFFFF"}} source={require('@images/HomePage/cart.png')}/>
                        :
                        <Icon style={{color:'#000'}} name="ios-cart-outline"></Icon>
                    }
                    </Button>

                    <Button style={{marginHorizontal:15,backgroundColor:"#FFFFFF"}} active={this.state.tab2} onPress={() => this.setState({ tab2: !this.state.tab2 ,
                    })} >
                    {
                        this.state.tab2?
                        <Image style={{height:50,width:50,backgroundColor:"#FFFFFF"}} source={require('@images/HomePage/secon-tab.png')}/>
                        :
                        <Icon style={{color:'#000'}} name="ios-bookmark-outline"></Icon>  
                    }
                         
                    </Button>


                    <Button  style={{backgroundColor:"#FFFFFF"}} active={this.state.tab3} onPress={() => this.setState({ tab3: !this.state.tab3 ,
                    })}>
                    {
                        this.state.tab3?
                        <Image style={{height:50,width:50}} source={require('@images/HomePage/home-active.png')}/>
                        :
                        <Icon style={{color :'black'}} name="ios-home-outline"></Icon>
                    }
                        
                    </Button>
                </FooterTab>
          </Footer>
            
        </Container>
      );
    }
  }