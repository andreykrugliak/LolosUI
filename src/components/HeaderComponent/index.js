import React,{Component} from 'react'
import {Header,Left,Body,Right,Button,Icon,Title} from 'native-base'
import styles from './style'

export const HeaderComponent = (props)=>{

return(
    <Header style={styles.header}>
    <Left>
      <Button transparent onPress={()=>{
        props.navigator.pop()
        }}>
        <Icon style={styles.backArrow} name='arrow-back'/>
      </Button>
    </Left>

    <Body>
      <Title style={styles.TitleStyle}></Title>
    </Body>
    <Right>

    </Right>

</Header>
)
  
}

