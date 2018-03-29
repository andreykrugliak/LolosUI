import React, { Component } from 'react';
import {View , Image,Text,TouchableOpacity,Dimensions, ImageBackground} from 'react-native'
import styles from './style'
import Swiper from 'react-native-swiper';
import {Button} from 'native-base'
let windowWidth= Dimensions.get('window').width
export default class Onboarging extends Component {
    static navigatorStyle = {
      navBarHidden:true
    };
    slide1(){
        return(
            <View style={{flex:1}}>
                <Image style={styles.homeLogo} source={require('@images/Onboarding/ActiveHome.png')}/>
                <Text style={styles.loloText}>Earn Lolo's</Text>
                <Text style={styles.featureText}>with special features inside app</Text>
                <Image style={styles.arrowImage} source={require('@images/Onboarding/ArrowImage.png')}/>
                <Image style={styles.footerImage} source={require('@images/Onboarding/footer.png')}/>
            
        </View>
        )
    }

    slide2(){
        return(
            <View style={{flex:1}}>
                <Image style={styles.homeLogo} source={require('@images/Onboarding/ActiveTabs.png')}/>
                <Text style={styles.loloText}>Manage them</Text>
                <Text style={styles.featureText}>in your own private wallet</Text>
                <Image source={require('@images/Onboarding/WalletMoney.png')} style={styles.wallet}/>
            </View>
        )
    }
    slide3(){
        return(
            <View style={{flex:1}}>
                <Image style={styles.homeLogo} source={require('@images/Onboarding/ActiveCart.png')}/>
                <Text style={styles.loloText}>Use them</Text>
                <Text style={styles.featureText}>in our awsome marketplace</Text>
                <Image source={require('@images/Onboarding/em_8.png')} style={styles.smiley}/>
            </View>
        )
    }

    slide4(){
        return(
            <View style={{flex:1}}>
                <Image style={styles.threeSmile} source={require('@images/Onboarding/three.png')}/>
                <Text style={styles.startText}>Let’s start!</Text>
                <Text style={styles.featureText}>Sign up now and get your first 20 lolo’s</Text>
                <TouchableOpacity onPress={()=>{
                  this.props.navigator.push({
                    screen:'app.SignUp',
                    animationType:"slide-horizontal"
                  })
                  
                  }} style={styles.buttonView}>
                    <Text style={styles.buttonText}>Sign Up</Text>
                </TouchableOpacity>
                <View style={styles.footerTextView}>
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
                </View>
            </View>
        )
    }
    

    render() {
       
        return (
         

            <View style={styles.container}>

                <Image source={require('@images/Onboarding/lolos.png')} style={styles.logo}/>
                <Text style={styles.shoppingText}>Shopping online made fun</Text>
                
                <Swiper  loop={false} showsPagination={false} onMomentumScrollEnd ={this._onMomentumScrollEnd}>
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