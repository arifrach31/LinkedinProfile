import React,{Component} from 'react'
import {
    Container, Content, Text,
    Card, CardItem, Body,
    Header,
    Left,
    Right, Button, Icon,
    Spinner, Thumbnail
} from 'native-base'
import {View, StyleSheet, Image, StatusBar, ImageBackground} from 'react-native'
import { connect } from 'react-redux'

import ProfileRow from '../components/ProfileRow'
import {allProfiles} from '../actions/profiles'
import {allHighlights} from '../actions/highlights'

class ProfileList extends Component{
    
    componentDidMount(){
        this.props.dispatch(allProfiles())
        this.props.dispatch(allHighlights())

    }
    render(){
        return(
            <Container>
                <Content>
                    <ImageBackground
                        style={{flex:1, alignSelf: 'stretch',width: '100%', height: '100%',zIndex: 0}}
                        source={require('../assets/images/cover.jpg')}
                    >
                        {this.props.profilesReducer.profiles.isLoading ? (<Spinner color="#ffffff" />)
                            : (
                                <View style={styles.profileGroup}>
                                    <Thumbnail large style={styles.img}
                                        source={require('../assets/images/profile.png')}
                                    />
                                    <View style={styles.profileGroups}>
                                        {this.props.profilesReducer.profiles.map((n)=>( 
                                            <View key={n.objectId}>
                                                <Button transparent style={styles.btnUpdate} onPress={()=> this.props.navigation.navigate('UpdateProfile', {id: n.objectId})} {...this.props}>
                                                    <Icon name="settings" style={styles.blueTheme}/>
                                                </Button>
                                                <View style={styles.profile} key={n.objectId}>
                                                    <Text style={styles.name}>{n.name}</Text>
                                                    <Text style={styles.textHeadline}>{n.headline}</Text>
                                                    <View style={styles.nowWork}>
                                                        <Text style={styles.textWork}>{n.academy + ' - ' + n.location}</Text>
                                                        <Text style={styles.textWork}>{n.country + ' \u2022 ' + n.connections} <Icon name="people" style={styles.icon} /></Text>
                                                    </View>
                                                    <View style={styles.btnGroup}>
                                                        <Button bordered style={styles.btnMsg}>
                                                            <Text style={styles.blueTheme}>MESSAGE</Text>
                                                        </Button>
                                                        <Button primary style={styles.btn}>
                                                            <Text>CONNECT</Text>
                                                        </Button>
                                                    </View>
                                                    <Text style={styles.textSummary}>{n.summary}</Text>
                                                </View>
                                            </View>
                                        ))}
                                    </View>

                                    <View style={styles.highlightsGroup}>
                                        <Text style={styles.title}>Highlights</Text>
                                        {this.props.highlightsReducer.highlights.map((n)=>(
                                            <ProfileRow item={n} {...this.props} key={n.objectId}/>
                                        ))}
                                    </View>
                                </View>
                            )}
                    </ImageBackground>
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
    nowWork: {
        marginTop: 7,
        marginBottom: 7,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textHeadline: {
        fontSize: 15,
    },
    textWork: {
        fontSize: 12,
        color: '#918f8f'
    },
    icon: {
        fontSize: 17
    },
    img: {
        width: 90,
        height: 90,
        alignSelf: 'center',
        position: 'absolute',
        top: 50,
        zIndex: 1,
        borderWidth: 3,
        borderColor: '#FFF',
    },
    profileGroup: {

    },
    profileGroups: {
        paddingTop: 50,
        marginTop: 100,
        zIndex: 0,
        backgroundColor: '#FFF',
        zIndex: 0,
        paddingBottom: 20,
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 10
    },
    profile: {
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 0
    },
    highlightsGroup: {
        marginBottom: 50,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: '#FFF'
    },
    title: {
        paddingTop: 10,
        paddingLeft: 10,
        color: '#727171',
        fontSize: 15
    },
    body: {
        zIndex: 0,
        
    },
    name: {
        fontWeight: 'bold',
        letterSpacing: 2
    },
    btnUpdate: {
        alignSelf: 'flex-end',
        position: 'absolute',
        top: -50,
        right: 0,
    },
    textSummary: {
        paddingTop: 5,
        alignItems: 'center',
        fontSize: 13,
    },
    btnGroup: {
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10
    },
    btnMsg: {
        marginRight: 5,
        borderColor: '#0073b1',
        height:30
    },
    btn: {
        marginRight: 5,
        backgroundColor: '#0073b1',
        height:30
    },
    blueTheme: {
        color: '#0073b1'
    },

    
})