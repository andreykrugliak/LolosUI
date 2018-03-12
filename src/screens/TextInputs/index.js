import {
    Container,
    Header,
    Label,
    Content,
    Button,
    Icon,
    Body,
    Right,
    Text,
    Item,
    Form,
    Input,
    Footer,
    Title
} from 'native-base';
import React, {Component} from 'react';
import {Dimensions, ScrollView, View} from 'react-native'
import styles from './style'
import {FooterComponent} from '@components/FooterComponent/index'
import {HeaderComponent} from '@components/HeaderComponent/index'
let windowWidth = Dimensions
    .get("window")
    .width
export default class ButtonExample extends Component {
    static navigatorStyle = {
        navBarHidden:true
      };
    render() {
        return (
            <Container>
                <HeaderComponent navigator={this.props.navigator}/>
                <Content>
                    <ScrollView>
                        
                        <View
                            style={{
                                marginTop:71,
                                marginBottom:50,
                        }}>
                            <Title style={styles.titleText}>
                            Sign up
                            </Title>
                            <Title style={styles.titleText}>
                            Full Name
                            </Title>
                        </View>
                        <Form>
                            <Item floatingLabel>
                                <Label
                                    style={{
                                    color: "rgba(255,66,115,0.5)",
                                    
                                    
                                    fontSize: 14,
                                  
                                    fontFamily:"Lato-Bold"
                                }}>FIRST NAME</Label>
                                <Input
                                    style={{
                                    fontSize: 18,
                                    lineHeight: 22,
                                    fontFamily: "Lato-Regular",
                                    color: "#000000"
                                }}/>
                            </Item>
                            <Item floatingLabel>
                                <Label
                                    style={{
                                        color: "rgba(255,66,115,0.5)",
                                        fontFamily: "Lato-Bold",
                                    fontSize: 14,
                                    
                                }}>LAST NAME</Label>
                                <Input
                                    style={{
                                    fontSize: 18,
                                    lineHeight: 22,
                                    fontFamily: "Lato-Regular",
                                    color: "#000000"
                                }}/>
                            </Item>
                        </Form>
                    </ScrollView>
                </Content>
                <FooterComponent navigator={this.props.navigator}/>
            </Container>
        );
    }
}