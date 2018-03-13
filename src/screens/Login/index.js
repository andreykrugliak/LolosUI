import {
    Container,
    Header,
    Content,
    View,
    Left,
    Body,
    Right,
    Icon,
    Text,
    Title
  } from 'native-base';
  import React, {Component} from 'react';
  import styles from './style';
  import LinearGradient from 'react-native-linear-gradient';
  import Button  from '@components/ButtonComponent/index';
  import { HeaderComponent } from '@components/HeaderComponent/index';
  export default class ButtonExample extends Component {
    static navigatorStyle = {
      navBarHidden:true
    };
    render() {
      return (
       
          <Container style={styles.container}>
            <HeaderComponent navigator={this.props.navigator}/>
            <Title style={styles.subTitle}>SUB TITLE
            </Title>
  
          <View style={{marginTop:41}}>
          <Title style={styles.mainTitle}>
          Onboarding
            </Title>
            <Title style={styles.mainTitle}>
          Screen 2
            </Title>
          </View>
          
            
          <LinearGradient style={{height:151,position:'absolute',bottom:0,left:0,right:0}} colors={ ['#F5317F' , '#FF7C6E']}>
         
          
          <Title style={{height:10,backgroundColor:'#F6F6F6'}}></Title>
            <Button text={'Log In'} onPress={()=>{
                  this.props.navigator.push({
                    screen:'app.TextInputs',
                    animationType:"slide-horizontal"
                  })
                  
                  }}/>
            <Title style={styles.SigninText}>Sign In</Title>
          
          </LinearGradient>
        </Container>
      );
    }
  }