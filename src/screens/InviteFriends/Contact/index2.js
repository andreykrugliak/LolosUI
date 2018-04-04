import React,{Component} from "react"
import {Text,View,TextInput,Image,ScrollView,TouchableHighlight, TouchableOpacity,FlatList} from "react-native"
import Touchable from 'react-native-platform-touchable'
import styles from "./style"
import { HeaderComponent } from "@components/InviteFriends/HeaderComponent.js";
import AlphabetListView from 'react-native-alphabetlistview'
import Contacts from 'react-native-contacts'


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
            data: {
                A: ['AAAAA','aaaaa','aaaaa'],
                B: ['bbbbb','bbbbb','bbbbb'],
                C: ['ccccc','ccccc','ccccc'],
                D: ['DDDDDD','DDDDD','DDDDD'],
                E: ['some','entries','are here'],
                F: ['some','entries','are here'],
                G: ['some','entries','are here'],
                H: ['HHHHHH','HHHHHH','HHHHHH'],
                I: ['some','entries','are here'],
                J: ['some','entries','are here'],
                K: ['some','entries','are here'],
                L: ['some','entries','are here'],
                M: ['MMMMM','MMMMM','MMMMMM'],
                N: ['some','entries','are here'],
                O: ['some','entries','are here'],
                P: ['some','entries','are here'],
                Q: ['QQQQQQ','QQQQQQ','QQQQQQ'],
                R: ['some','entries','are here'],
                S: ['some','entries','are here'],
                T: ['TTTTTT','TTTTT','TTTTTT'],
                U: ['some','entries','are here'],
                V: ['some','entries','are here'],
                W: ['WWWWW','WWWWW','WWWWWW'],
                X: ['some','entries','are here'],
                Y: ['some','entries','are here'],
                Z: ['ZZZZZ','ZZZZZZ','ZZZZZ'],
            }
        }
    }

    _handleSearch(text){
        this.setState({
            searchKey:text
        })

        if(this.state.searchKey){
            let length=this.state.searchKey.length
            if(length>1){
                this.setState({search:true})
            }
        }

        if(this.state.searchKey<=1){
            this.setState({search:false})
        }
    }
    
    _keyExtractor = (item, index) => index;

    _renderItems({item,index}){
        return(
            <View style={{height:60,justifyContent:'center',marginLeft:14,}}>
            <Text style={{fontSize:24,marginVertical:14}}>{item}</Text>
            <View style={{backgroundColor:'#f0f0f0',height:1,marginRight:14}}></View>
          </View>
        )
    }

    componentDidMount()
    {    
        Contacts.getAll((err,contacts) => {
            console.log(contacts)
            // this.setState({contacts:contacts})
            let nameArray = contacts.map((data, index) => {
                this.state.contacts.push(data.givenName+" "+data.familyName)
                //this.setState({data:{label:data.givenName[0],key:data.givenName}})
            })  
            //this.setState({data:{l:"l",L:["ll","ll"]}})          
            
        })
        console.log('nameArray : ',this.state.contacts);
    }

    render(){
        return(
        <View style={{ flex : 1 }}>
            <HeaderComponent navigator={this.props.navigator}/>
            <View style={{ shadowOpacity:0.3, shadowOffset:{height:1,width:0},}}>
                <View style={styles.searchBox}>
                    <TextInput placeholder={'Search…'} 
                               onChangeText={(text)=>this._handleSearch(text)} 
                                style={styles.textInput}/>
                    <TouchableOpacity
                    onPress={()=>{
                        this.props.navigator.push({
                        screen:'app.InviteFriendsInvite'
                    })}}
                    style={styles.searchIcon}>
                        <Image style={styles.icon}  source={require('@images/InviteFriends/search.png')}/>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{flex:1}}>
            {
                this.state.search?
                <FlatList
                data={this.state.contacts}
                keyExtractor={this._keyExtractor}
                renderItem={this._renderItems}/>
                :
                <AlphabetListView
                data={this.state.data}
                //enableEmptySection={true}
                cell={Cell}
                cellHeight={30}
                sectionListItem={SectionItem}
                sectionHeaderHeight={45}
                //sectionHeader={sectionHeader}
            />
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


  class SectionItem extends Component {
    render(){
      return (
        <View style={{backgroundColor:'#fff',paddingHorizontal:2}}>
            <Text style={{color:'blue'}}>{this.props.title}</Text>
        </View>
      );
    }
  }
  
  class Cell extends Component {
    render() {
      
      return (
        <View style={{height:60,justifyContent:'center',marginLeft:14,}}>
          <Text style={{fontSize:24,marginVertical:14}}>{this.props.item}</Text>
          <View style={{backgroundColor:'#f0f0f0',height:1,marginRight:14}}></View>
        </View>
      );
    }
  }