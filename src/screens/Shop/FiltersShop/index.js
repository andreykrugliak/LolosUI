import React,{Component} from 'react';
import {Container, Header, Content, Footer, FooterTab, Button, Text, Icon, Body, Right, Left,Title, Card, Badge, CardItem} from 'native-base';
import {View,Dimensions,Image,TouchableOpacity,FlatList,ScrollView} from 'react-native';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import CheckBox from 'react-native-checkbox';
var WindowWidth = Dimensions.get('window').width
var WindowHeight = Dimensions.get('window').height
import styles from './style'

 


export default class FilterShop extends Component{

    constructor(props){
        super(props)
        this.state={
            value:true,
            sortRadioValue:'',
            shippingRadioValue:'',
            checked:true,
        }
    }

    static navigatorStyle = {
        navBarHidden:true

    };

    render(){
        let sortRadio_props = [
            {label: <Text style={styles.radioButtonText}>Low To Heigh</Text>, value: 0 },
            {label: <Text style={styles.radioButtonText}>Heigh To Low</Text>, value: 1 }
          ];
        let shippingRadio_props=[
            {label: <Text style={styles.radioButtonText}>Only free shipping</Text>, value: 0 },
            {label: <Text style={styles.radioButtonText}>All</Text>, value: 1 }
        ]
        let ClickersRadioButton=
            <RadioForm
            //ref="radioForm"
            radio_props={sortRadio_props}
            initial={0}
            formHorizontal={true}
            labelHorizontal={true}
            buttonSize={8}
            buttonOuterSize={20}
            buttonInnerSize={10}
            buttonColor={'#FF4273'}
            selectedButtonColor={'#FF4273'}
            radioStyle={{paddingRight:((WindowWidth-58)/2)-120}}
            buttonStyle={{selctedButtonColor:'red'}}
            animation={true}
            onPress={(value, index) => {
                this.setState({radioValue:value})
            }}
          />
        
        return(
            <View style={{flex:1,backgroundColor:'white'}}>
                <View style={styles.header}>
                <TouchableOpacity style={{padding:10}}  onPress={()=>{
                    this.props.navigator.pop({
                        animationType:"slide-horizontal"
                    })
                }}>
                    <Image style={styles.back} source={require('@images/DrawerScreen/left.png')}/>
                </TouchableOpacity>
                    
                    <Text  style={styles.filter}>FILTER</Text>
                </View>

                <View style={[styles.sortPrice]}>
                    <Text style={styles.sortPriceText}>Sort Pricing</Text>

                    <View style={styles.selection}>   
                    <RadioForm
                        ref="radioForm"
                        radio_props={sortRadio_props}
                        initial={0}
                        formHorizontal={true}
                        labelHorizontal={true}
                        buttonSize={8}
                        buttonOuterSize={20}
                        buttonInnerSize={10}
                        buttonColor={'#FF4273'}
                        selectedButtonColor={'#FF4273'}
                        radioStyle={{paddingRight:((WindowWidth-58)/2)-120}}
                        buttonStyle={{selctedButtonColor:'red'}}
                        animation={true}
                        onPress={(value, index) => {
                            this.setState({radioValue:value})
                        }}
                    />               
                    </View>
                    
                </View>
                <View style={styles.line}></View>

                <View style={[styles.sortPrice]}>
                    <Text style={styles.sortPriceText}>Shipping Fees</Text>
                    <View style={[styles.selection,{marginTop:((WindowWidth-53)/2)-122}]}>
                        <RadioForm
                            ref="radioForm"
                            radio_props={shippingRadio_props}
                            initial={0}
                            formHorizontal={true}
                            labelHorizontal={true}
                            buttonSize={8}
                            buttonOuterSize={20}
                            buttonInnerSize={10}
                            buttonColor={'#FF4273'}
                            selectedButtonColor={'#FF4273'}
                            radioStyle={{paddingRight:((WindowWidth-58)/2)-120}}
                            buttonStyle={{selctedButtonColor:'red'}}
                            animation={true}
                            onPress={(value, index) => {
                                this.setState({radioValue:value})
                            }}
                        />  
                    </View>
                </View>
                <View style={styles.line}></View>


                 <View style={styles.sortPrice}>
                    <Text style={styles.sortPriceText}>International Shipping</Text>
                    <View style={[styles.selection,{marginTop:19}]}>
                    <View style={styles.lowToHigh}>
                        <CheckBox
                            label='Only items ships to Israel'
                            labelStyle={styles.radioButtonText}
                            checkboxStyle={this.state.checked?[{backgroundColor:'#FF4273'},styles.checkBox]:[{backgroundColor:'#fff',},styles.checkBox]}
                            checkedImage={require('@images/FilterScreen/after.png')}
                            checked={this.state.checked}
                            underlayColor={"#fff"}
                            onChange={(checked) => this.setState({checked:!this.state.checked})}
                            />
                        </View>
                    </View>
                </View>
                <View style={styles.line}></View>

                <View style={styles.button}>
                <TouchableOpacity onPress={()=>{
                    this.props.navigator.push({
                        screen:'app.HomePage',
                        animationType:"slide-horizontal"

                    })
                }}
                style={styles.btnBackground}>
                    <Text style={styles.apply}>Apply</Text>
                </TouchableOpacity>
            </View>

            </View>
        )
    }
}