import React,{Component} from "react"
import {Text,View,TextInput,Image,ScrollView,TouchableHighlight,Dimensions,Platform, TouchableOpacity,FlatList} from "react-native"
import Touchable from 'react-native-platform-touchable'
import styles from "./style"
import { HeaderComponent } from "@components/InviteFriends/HeaderComponent.js";
import AlphabetListView from 'react-native-alphabetlistview'
import Contacts from 'react-native-contacts'
import {groupBy,flatMap,map,values,assign} from 'lodash'
import index from "react-native-deck-swiper";
let windowHeight = Dimensions.get('window').height

Array.prototype.diff = function(a) {
    return this.filter(function(i) {return a.indexOf(i) < 0;});
};
export default class InviteFriends extends Component{
    static navigatorStyle = {
        navBarHidden:true
      };
    
    constructor(props){
        super(props)
        this.state={
            searchKey:'',
            contacts:[],
            search:false,
            data: [],
            contactData:[],
            searchdata:[],
            sortData:undefined,
            
        }
        this.cell=this.cell.bind(this)
        this._renderItems = this._renderItems.bind(this)
    }

    _handleSearch(text){
        this.setState({
            searchKey:text
        })

        if(text){
            let contacts = this.state.contacts


            let firstArray = contacts.filter((contact,index) => {
                    if(contact.startsWith(text)){
                        
                        return contact
                    }
            })
            let arrayDifference = contacts.diff(firstArray)

           let  secondArray = arrayDifference.filter(function(x) { 
                 if(x.toLowerCase().includes(text.toLowerCase())){
                     return x
                 } 
                
             });

            this.setState({searchdata:[...firstArray,...secondArray]})
            
        }

        if(this.state.searchKey<=1){
            this.setState({search:false})
        }
    }
    
    _keyExtractor = (item, index) => index;

    _renderItems({item,index}){
       
        return(
            <TouchableOpacity 
            onPress={()=>{
                this.props.navigator.push({
                screen:'app.InviteFriendsInvite',
                animationType:"slide-horizontal",
                passProps:{name:item}
            })}} style={{height:60,justifyContent:'center',marginLeft:14,}}>
            <Text style={{fontSize:24,marginVertical:14}}>{item}</Text>
            <View style={{backgroundColor:'#f0f0f0',height:1,marginRight:14}}></View>
          </TouchableOpacity>
        )
    }

    componentDidMount()
    {   
        let res=Contacts.getAll((err,contact) => {
            let nameArray = contact.map((data, index) => {
                data.familyName?
                this.state.contacts.push(data.givenName+" "+data.familyName)
                :
                this.state.contacts.push(data.givenName),
                this.state.contactData.push(data)
            })  
            let data = _.sortBy(contact,'givenName[0]')
             data = _.groupBy(data,'givenName[0]')

            this.setState({
                    data
                }) 
            })
    }
    cell(item){
       
       return (
            <View style={{height:60,justifyContent:'center',marginLeft:14,}}>
                <TouchableOpacity onPress={()=>{
                            this.props.navigator.push({
                            screen:'app.InviteFriendsInvite',
                            animationType:"slide-horizontal",
                            
                            passProps: item.item.familyName == null ?
                            {name: item.item.givenName }
                            :
                            {
                                name: item.item.givenName +' '+item.item.familyName
                            }
                        })}}>
                        {
                        item.item.familyName == null ?
                        <Text style={{fontSize:24,marginVertical:14}}>{item.item.givenName }</Text>
                        :
                        <Text style={{fontSize:24,marginVertical:14}}>{item.item.givenName + ' ' + item.item.familyName }</Text>
                        }
                </TouchableOpacity>
                {this.props.isLast?
                null:
                <View style={{backgroundColor:'#f0f0f0',height:1,marginRight:14,}}></View>} 
            </View>
            );
    }
          

    render(){
        return(
        <View style={{ flex : 1 }}>
            <HeaderComponent title="INVITE FRIENDS" navigator={this.props.navigator}/>
            <View style={{ shadowOpacity:0.3, shadowOffset:{height:1,width:0},}}>
                <View style={styles.searchBox}>
                    <TextInput placeholder={'Search…'} 
                               onChangeText={(text)=> {
                                   
                                this._handleSearch(text)} }
                                style={styles.textInput}
                                underlineColorAndroid="transparent"/>
                    <TouchableOpacity
                    onPress={()=>{
                        this.props.navigator.push({
                        screen:'app.InviteFriendsInvite',
                        animationType:"slide-horizontal"
                    })}}
                    style={styles.searchIcon}>
                        <Image style={styles.icon} source={require('@images/InviteFriends/search.png')}/>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{flex:1}}>
            {
                 
                this.state.data && this.state.searchKey.length<=0?
                <View style={{flex:1}}>
                    <AlphabetListView
                    enableEmptySections
                    data={this.state.data}
                    hideSectionList={true}
                    cell={(item)=>{
                       
                        return this.cell(item)
                    }}
                    cellHeight={30}
                    sectionListItem={SectionListItem}
                    sectionHeaderHeight={45}
                    headerHeight={20}
                    sectionListStyle={styles.sectionList}
                   
                />
                </View>
                :
                <View style={{flex:1}}>
                    <FlatList
                    navigator={this.props.navigator}
                    data={this.state.searchdata}
                    keyExtractor={this._keyExtractor}
                    renderItem={this._renderItems}/>
                 </View>    
            }
            </View>            
        </View>

)}}

//  class sectionHeader extends InviteFriends{
//         constructor(props){
//             super(props)
//         } 

//      render(){
//          console.log(this.props)
//          return(
//              <View style={{height:45}}>
//                 <Text style={{fontSize:12,color:'#000',marginLeft:14}}>
//                     {this.props.title}
//                 </Text>
//              </View>
//          )
//      }
//  }


  class SectionListItem extends InviteFriends {

    render(){
      return (
          
        <View style={{backgroundColor:'#fff'}}>
            <Text style={{color:'blue'}}>{this.props.title}</Text>
        </View>
      );
    }
  }
  
  