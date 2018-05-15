import React, { Component } from 'react';
import {View ,Animated,Easing,PanResponder, Image,Text,TouchableOpacity,Dimensions, ImageBackground} from 'react-native'
import styles from './style'
import Swiper from 'react-native-swiper';
import {Button} from 'native-base';
import firebase from 'react-native-firebase'
let windowWidth= Dimensions.get('window').width


export default class Onboarging extends Component {
    static navigatorStyle = {
      navBarHidden:true
    };
    constructor () {
        super()
        this.state={
            index:0,
            activeImage:'',
            text:'',
            title:'',
            walletImage:''
        }
      }

      componentWillMount(){
          let text='',title='',activeImage='',walletImage='';
          firebase.database().ref('config').on('value',function(snapshot){
            activeImage=snapshot.child('activeImage').val();
            text=snapshot.child('text').val();            
            title=snapshot.child('title').val();
            walletImage=snapshot.child('walletImage').val();
            
           this.setState({
            activeImage,text,title,walletImage
           })
          
        }.bind(this));
      }
    
        
      

    slide1(){
        if(this.state.index ==0)
        {
            this.imageinitialPosition = new Animated.ValueXY({x:200 , y: 0}) ,
            Animated.spring(
            this.imageinitialPosition,
            {
                toValue :{ x : 0, y :0},
                bounciness:5,
                speed:1
            }
        ).start()
        return(
            <View style={{flex:1}}>
                <Animated.Image style={[styles.homeLogo,this.imageinitialPosition.getLayout()]} source={require('@images/Onboarding/ActiveHome.png')}/>
                <Animated.Text style={[styles.loloText,this.imageinitialPosition.getLayout()]}>Earn lolo's</Animated.Text>
                <Animated.Text style={[styles.featureText,this.imageinitialPosition.getLayout()]}>with special features inside app</Animated.Text>
                <View style={styles.animatedImageView}>
                    <Animated.Image style={[styles.arrowImage,this.imageinitialPosition.getLayout()]} source={require('@images/Onboarding/ArrowImage.png')}/>
                </View>
                
                <Image style={[styles.footerImage,]} source={require('@images/Onboarding/footer.png')}/>
            
        </View>
        )
    }
    }

    slide2(){
        
        if(this.state.index ==1)
        {
            this.imageinitialPosition = new Animated.ValueXY({x:200 , y: 0}) ,
            Animated.spring(
            this.imageinitialPosition,
            {
                toValue :{ x : 0, y :0},
                bounciness:5,
                speed:1
            }
        ).start()
        
        return(
           <View style={{flex:1}}>
                <Animated.Image style={[styles.homeLogo,this.imageinitialPosition.getLayout()]}  source={{uri:this.state.activeImage}}/>
                <Animated.Text style={[styles.loloText,this.imageinitialPosition.getLayout()]}>{this.state.title}</Animated.Text>
                <Animated.Text style={[styles.featureText,this.imageinitialPosition.getLayout()]}>{this.state.text}</Animated.Text>
                {/* <View style={styles.animatedWalletView}> */}
                <Animated.Image source={{uri:this.state.walletImage}} style={[styles.wallet,this.imageinitialPosition.getLayout(),{marginTop: 55}]}/>
                {/* </View> */}
                
            </View>
        )
    }
    }
    slide3(){
        if(this.state.index ==2)
        {
            this.imageinitialPosition = new Animated.ValueXY({x:200 , y: 0}) ,
            Animated.spring(
            this.imageinitialPosition,
            {
                toValue :{ x : 0, y :0},
                bounciness:5,
                speed:1
            }
        ).start()
        return(
            <View style={{flex:1}}>
                <Animated.Image style={[styles.homeLogo,this.imageinitialPosition.getLayout()]} source={require('@images/Onboarding/ActiveCart.png')}/>
                <Animated.Text style={[styles.loloText,this.imageinitialPosition.getLayout()]}>Use them</Animated.Text>
                <Animated.Text style={[styles.featureText,this.imageinitialPosition.getLayout()]}>in our awsome marketplace</Animated.Text>
                <View style={styles.animatedSmileyView}>
                    <Animated.Image source={require('@images/Onboarding/em_8.png')} style={[styles.smiley,this.imageinitialPosition.getLayout()]}/>

                </View>
            </View>
        )
    }
    }

    slide4(){
        if(this.state.index ==3)
        {
            this.imageinitialPosition = new Animated.ValueXY({x:200 , y: 0}) ,
            Animated.spring(
            this.imageinitialPosition,
            {
                toValue :{ x : 0, y :0},
                bounciness:5,
                speed:1
            }
        ).start()        
        return(
            <View style={{flex:1}}>
                <Animated.Image style={[styles.threeSmile,this.imageinitialPosition.getLayout()]} source={require('@images/Onboarding/three.png')}/>
                <Animated.Text style={[styles.startText,this.imageinitialPosition.getLayout()]}>Let’s start!</Animated.Text>
                <Animated.Text style={[styles.featureText,this.imageinitialPosition.getLayout()]}>Sign up now and get your first 20 lolo’s</Animated.Text>
                
                <TouchableOpacity onPress={()=>this.next()} style={styles.buttonView} >
                <Animated.View style={[this.imageinitialPosition.getLayout(),styles.animatedButtonView]}>
                    <Animated.Text style={[styles.buttonText]}>Sign Up</Animated.Text>
                </Animated.View>
                </TouchableOpacity>
                
                <View style={[styles.footerTextView]}>
                <Animated.View style={[styles.footerTextSubView,this.imageinitialPosition.getLayout()]}>
                <Text style={styles.footerText}>By signing up, you agree to the </Text> 
                            <TouchableOpacity>
                                <Text style={[styles.footerText,{color:'#4A90E2'}]}>
                                    Terms of Use
                                </Text>
                            </TouchableOpacity> 
                                <Text style={styles.footerText}> & </Text>
                            <TouchableOpacity>
                                <Text style={[styles.footerText,{color:'#4A90E2'}]}> Privacy Policy</Text>
                            </TouchableOpacity>
                </Animated.View>
                        
                </View>
            </View>
        )
    }
    }
    next(){
        let self = this
        firebase.auth().onAuthStateChanged(user=>{
            if(user){
                self.props.navigator.push({
                    screen: 'app.HomePage',
                    animationType: 'slide-horizontal',
                    passProps: {createAccount: false}
                })
            }else{
                self.props.navigator.push({
                    screen:'app.SignUp',
                    animationType:"slide-horizontal"
                }) 
            }
        })
    }

    render() {
       
        return (
         

            <View style={styles.container}>

                <Image source={require('@images/Onboarding/lolos.png')} style={styles.logo}/>
                <Text style={styles.shoppingText}>Shopping online made fun</Text>
                
                <Swiper  onIndexChanged={(index) => {this.setState({
                    index: index
                })}}  loop={false} showsPagination={false} onMomentumScrollEnd ={this._onMomentumScrollEnd}>
                    <View style={{flex:1}}>
                        {this.slide1()}
                    </View>
                    <View style={{flex:1}}>
                        {this.slide2()}
                    </View>
                    <View style={{flex:1}}>
                        {this.slide3()}
                    </View>
                    <View style={{flex:1}}>
                        {this.slide4()}
                    </View>
                </Swiper>
            </View>
        )
    }
}