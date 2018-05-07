import React,{ Component } from 'react'
import {
    Container, Content, Text, Card, 
    CardItem, Body, Header, Left,
    Right, Button, Icon, Spinner, 
    Thumbnail } from 'native-base'
import { 
    View, StyleSheet, Image, StatusBar, 
    ImageBackground } from 'react-native'
import { connect } from 'react-redux'

import ProfileRow from '../components/ProfileRow'
import { allProfiles } from '../actions/profiles'

class ProfileList extends Component{
    
    componentDidMount(){
        
        this.props.dispatch(allProfiles())

    }

    render(){
        return(
            <Container>
                <Content>
                    <Card>
                        {this.props.profilesReducer.profiles.map((n)=>( 
                            
                            <CardItem key={n.objectId} button onPress={()=> this.props.navigation.navigate('ProfileDetail', {profile: n})} {...this.props}>
                                
                                    <Left style={{flex: 2}}>
                                    <Image style={styles.img}
                                        source={{ uri: n.image }}
                                        // source={require('../assets/images/profile.png')}
                                    />
                                    </Left>
                                    <Body style={{flex: 8}}>
                                        <Text>{n.name}</Text>
                                        <Text>{n.headline}</Text>
                                    </Body>
                                
                            </CardItem>
                        ))}
                    </Card>
                </Content>
            </Container>
                                        
        )
    }
}

const mapStateToProps = (state) => ({
    profilesReducer: state.profilesReducer,
    highlightsReducer: state.highlightsReducer
});
  
export default connect(mapStateToProps)(ProfileList)

const styles = StyleSheet.create({
    cardItem: {
        flexDirection: 'column',
        marginTop: 20,
        marginBottom: 20,
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },
    img: {
        width: 50,
        height: 50,
    },
    textBlueTheme: {
        color: '#0073b1'
    },

})