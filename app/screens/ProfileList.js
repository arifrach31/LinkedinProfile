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
import { allHighlights } from '../actions/highlights'

class ProfileList extends Component{
    
    componentDidMount(){

        this.props.dispatch(allProfiles())
        this.props.dispatch(allHighlights())

    }

    render(){
        return(
            
            <Container>
                <Content>
                    {this.props.profilesReducer.profiles.isLoading ? (<Spinner/>)
                    : (
                        <ImageBackground
                            style={{flex:1, alignSelf: 'stretch',width: '100%', height: '100%',zIndex: 0}}
                            source={require('../assets/images/cover.jpg')}
                        >
                                    <View style={styles.profileGroup}>
                                        <Thumbnail large style={styles.profileImg}
                                            source={require('../assets/images/profile.png')}
                                        />
                                        {this.props.profilesReducer.profiles.map((n)=>( 
                                            <View  style={styles.profileDetail} key={n.objectId}>
                                                <Button transparent style={styles.btnUpdate} onPress={()=> this.props.navigation.navigate('UpdateProfile', {id: n.objectId})} {...this.props}>
                                                    <Icon name="settings" style={styles.textBlueTheme}/>
                                                </Button>
                                                <Text style={styles.profileName}>{n.name}</Text>
                                                <Text style={styles.profileHeadline}>{n.headline}</Text>
                                                <View style={styles.profileInformation}>
                                                    <Text style={styles.profileInformationItem}>{n.academy + ' - ' + n.location}</Text>
                                                    <Text style={styles.profileInformationItem}>{n.country + ' \u2022 ' + n.connections} <Icon name="people" style={styles.iconSmall} /></Text>
                                                </View>
                                                <View style={styles.profileBtnGroup}>
                                                    <Button bordered style={styles.profileBtnItemOutline}>
                                                        <Text style={styles.textBlueTheme}>MESSAGE</Text>
                                                    </Button>
                                                    <Button primary style={styles.profileBtnItem}>
                                                        <Text>CONNECT</Text>
                                                    </Button>
                                                </View>
                                                <Text style={styles.profileSummary}>{n.summary}</Text>
                                            </View>
                                        ))}

                                        <View style={styles.highlightsGroup}>
                                            <Text style={styles.highlightTitle}>Highlights</Text>
                                            {this.props.highlightsReducer.highlights.map((n)=>(
                                                <ProfileRow item={n} {...this.props} key={n.objectId}/>
                                            ))}
                                        </View>
                                    </View>
                        </ImageBackground>
                    )}
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
     // Styling for ProfileDetail Component
    profileGroup: {
        marginTop: 100,
        marginBottom: 10,
        marginRight: 10,
        marginLeft: 10,
    },
    profileImg: {
        alignSelf: 'center',
        borderWidth: 3,
        borderColor: '#FFF',
        position: 'absolute',
        top: -50,
        width: 90,
        height: 90,
        zIndex: 1,
    },
    profileDetail: {
        alignItems: 'center',
        backgroundColor: '#FFF',
        justifyContent: 'center',
        paddingTop: 50,
        paddingBottom: 20,
        zIndex: 0,
    },
    btnUpdate: {
        alignSelf: 'flex-end',
        position: 'absolute',
        top: 0,
        right: 0,
    },
    profileName: {
        fontWeight: 'bold',
        letterSpacing: 2,
    },
    profileHeadline: {
        fontSize: 15,
    },
    profileInformation: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 7,
        marginBottom: 7,
    },
    profileInformationItem: {
        color: '#918f8f',
        fontSize: 12,
    },
    iconSmall: {
        fontSize: 17,
    },
    profileBtnGroup: {
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10
    },
    profileBtnItemOutline: {
        borderColor: '#0073b1',
        height: 35,
        marginRight: 5,
    },
    profileBtnItem: {
        backgroundColor: '#0073b1',
        height: 35,
        marginRight: 5,
    },
    profileSummary: {
        alignItems: 'center',
        fontSize: 13,
        paddingTop: 5,
    },

    // Styling for Highlights Component
    highlightsGroup: {
        backgroundColor: '#FFF',
        marginTop: 10,
        marginBottom: 50,
    },
    highlightTitle: {
        color: '#727171',
        fontSize: 15,
        paddingTop: 10,
        paddingLeft: 10,
    },
    textBlueTheme: {
        color: '#0073b1'
    },

})