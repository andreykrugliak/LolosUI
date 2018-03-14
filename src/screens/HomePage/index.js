import React,{Component} from 'react';
import {Container, Header, Content, Footer, FooterTab, Button, Text, Icon, Body, Right, Left, Card, Badge, CardItem} from 'native-base';
import {View,Dimensions,Image} from 'react-native';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';
import styles from './style'
const initialLayout = {
    height: 0,
    width: Dimensions.get('window').width,
  };

  const images ={
      Image1:require('@images/HomePage/ActiveCart.png'),
      Image2:require('@images/HomePage/ActiveTabs.png'),
      Image3:require('@images/HomePage/ActiveHome.png'),
      Image4:require('@images/HomePage/DeactiveCart.png'),
      Image5:require('@images/HomePage/DeactiveTabs.png'),
      Image6:require('@images/HomePage/DeactiveHome.png'),
  }
  const FirstRoute = () => <Content>
  <View style={[styles.middlePart,{ flex:1}]}>
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
</Content>;


  export default class TabViewExample extends React.Component {
    static navigatorStyle = {
        navBarHidden:true
      };
      constructor(props){
        super(props)
        this.state = {
            index: 2,
            routes: [
                { key: '0',icon: images.Image4, iconSelected: images.Image1 },
                { key: '1', icon: images.Image5, iconSelected: images.Image2},
                { key: '2',icon: images.Image6, iconSelected: images.Image3},
            ],
        };
      }
    
    _renderIcon = ({route}) => {
        return <Image  source={route.key == (this.state.index).toString()? route.iconSelected : route.icon}/>; 
    };
    
    _handleIndexChange = index => this.setState({ index });

    _renderHeader = props => <TabBar 
        style={{backgroundColor:"#fff",height:73}}
        labelStyle={{fontSize: 10, color: '#000'}} 
        {...props} 
        renderIcon = {this._renderIcon} 
        indicatorStyle={{ height: 0 }}
         />;

    _renderScene = SceneMap({
        '0': FirstRoute,
        '1': FirstRoute,
        '2':FirstRoute
    });
    
        render() {
            return (
                <Container style={{flex:1}}>
                <Header style={styles.headerStyle}>
                    <Left style={styles.headerLeftSide}>
                        <Button transparent>
                            <Image source={require('@images/HomePage/MenuBlack.png')}></Image>
                        </Button>
                    </Left>
                    <Body>
                        <Text style={styles.headerText}>Header Title</Text>
                    </Body>
                    <Right>
                        <Button transparent >
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
                <TabViewAnimated
                
                style={{flex: 1}}
                navigationState={this.state}
                renderScene={this._renderScene}
                renderFooter={this._renderHeader}
                onIndexChange={this._handleIndexChange}
                initialLayout={initialLayout}
                ></TabViewAnimated>
        
            </Container>
                
            );
        }
  }