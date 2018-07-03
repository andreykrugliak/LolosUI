import {Container,Button, Content} from 'native-base';
import React, { Component } from 'react';
import { Image, View, Easing, Animated,TouchableWithoutFeedback,TouchableOpacity, Dimensions, Text,Platform, AsyncStorage} from 'react-native';
import styles from './style'
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;


import LinearGradient from 'react-native-linear-gradient';
import firebase from 'react-native-firebase';
export default class ButtonExample extends Component {
    
    constructor(props){
        super(props)
        this.state={
            splash:true
        }
    }
   
    static navigatorStyle = {
        navBarHidden :true
    }
    componentDidMount(){
        let self = this
        this.unsubscribe = firebase.auth().onAuthStateChanged(user=>{
            if(user){
                self.props.navigator.push({
                    screen: 'app.HomePage',
                    animationType: 'slide-horizontal'                    
                })
            }else{
                setTimeout(()=>{
                    this.setState({splash:false})
                },500)
            }
        })

        firebase.links().getInitialLink().then(url=>{
            if(url) AsyncStorage.setItem('url',JSON.stringify({url:url}))
        })
        this.imageinitialPosition = new Animated.ValueXY({x:0 , y: 80})        
        this.imageLoloInitialPosition=new Animated.ValueXY({x:0,y:1})        
        this.textInitialPosition = new Animated.ValueXY({ x : 0, y : windowHeight})
        this.initialPosition = new Animated.ValueXY({ x : 0, y : windowHeight});
        
        
    }

    componentWillUnmount(){
        if(this.unsubscribe) this.unsubscribe()
    }
    next(){
        let self = this
        
                self.props.navigator.resetTo({
                    screen:'app.Onboarding',
                    animationType:"slide-horizontal"
                }) 
            
                       
    }
    render() { 
        if(this.state.splash){
            return(
                <View style={{flex:1,backgroundColor:'#fff'}} >
                <Image style={[{resizeMode:'contain',height:114,width:114,flex:1,alignSelf:'center'} ]} source={require('@images/Assets/em.png')}/>  
                </View>
            )
        }
        else{
           
            Animated.spring(
                this.imageinitialPosition,
                {
                    toValue :{ x : 0, y :0},
                    bounciness:10,
                    speed:10
                }
            ).start()

            Animated.spring(
                this.imageLoloInitialPosition,
                {
                  toValue:{x:0,y:((windowHeight/2)-350)},
                    speed:5
                }
            ).start()

            Animated.spring(
                this.textInitialPosition,
                {
                    toValue: { x : 0, y :windowHeight-350},
                    easing:Easing.back(),
                    bounciness:10,
                    speed:10
                }
            ).start()
        
            Animated.spring(this.initialPosition,
                {
                    toValue :{ x : 0, y :Platform.OS=='android'?windowHeight-450: windowHeight-420},
                    easing:Easing.back(),
                    bounciness:10,
                    speed:10

                }
            ).start()
        }
            return (
                
                  <View style={{flex:1,backgroundColor:'transparent'}}>
                      <Animated.Image style={[this.imageinitialPosition.getLayout(),styles.loloImage]} source={require('@images/component/lolos.png')}/>
                      <Animated.View style={[this.textInitialPosition.getLayout(),{backgroundColor:'transparent',}]}>
                        <Text style={styles.ShoppingText}>Your New{'\n'}Pocket Money!</Text>
                        {/* <Text  style={styles.ShoppingText}></Text> */}
                      </Animated.View>
                      <Animated.Image style={[this.imageLoloInitialPosition.getLayout(), styles.lolo]} source={require('@images/Assets/em.png')}/>  
                      <Animated.View style={[this.initialPosition.getLayout(),{width:windowWidth,backgroundColor:"transparent"}]}>
                          
                          <LinearGradient 
                          start={{x: 1.04, y: 0.55}} end={{x: -0.04, y: 0.45}}  
                          locations={[0.00,1.00]}
                          style={styles.linerButton} colors={['#F5317F', '#FF7C6E']} >
                                <TouchableOpacity onPress={()=>this.next()} style={styles.ButtonView}>
                                    {/* <Text style={styles.ButtonText}>Create Account</Text> */}
                                    <Text style={styles.ButtonText}>Check It Out!</Text>
        
                                </TouchableOpacity>
                          </LinearGradient>
        
                          {/* <Button onPress={()=>{
                          this.props.navigator.push({
                            screen:'app.LoginScreen',
                            animationType:"slide-horizontal"
                          })
                          
                          }}style={[styles.ButtonView,{marginHorizontal:30},{marginTop:10},{backgroundColor:'#FFFFFF'}]} >
                              <Text style={styles.ButtonText2}>
                                  Log In
                              </Text>
                          </Button> */}
                      </Animated.View>
                  </View>
            )}}
