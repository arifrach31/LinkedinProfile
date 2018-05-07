import React,{Component} from 'react'
import {
    Container,
    Content,
    Text,
    List,
    ListItem
} from 'native-base'

export default class NotificationDetail extends Component{

    // const {title, description} = this.props
    
    render(){
        return(
            <Container>
                <Content>
                    <List>
                        <ListItem>
                            <Text>{this.props.navigation.state.params.item.title + ' '}</Text>
                            <Text>{this.props.navigation.state.params.item.description}</Text>
                        </ListItem>
                    </List>
                </Content>
            </Container>
        )
    }
}
