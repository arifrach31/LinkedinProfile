import React,{Component} from 'react'
import {
    Container,Header,Content,
    Left,Body,Right,Title,
    Text,Button,Form,Label,
    Input,Textarea,Icon,
    Picker,Footer,FooterTab
} from 'native-base'

import {
    View,
    StyleSheet
} from 'react-native'

import axios from 'axios'

const uri = 'https://api.backendless.com/098517CC-AB9E-8E8D-FF71-567AD8579900/62B5AEA6-36A5-13EA-FF8B-57B1D5F1F700/data/profiles'
export default class UpdateProfile extends Component{

    state = {
       name: '',
       headline: '',
       academy: '',
       location: '',
       country: '',
       summary: '',
       profile: []
    }


    getProfile(){
        const {id} = this.props.navigation.state.params
        axios.get(`${uri}/${id}`).then(result=>{
            this.setState({
                profile: result.data,
            })
        })
      }

    componentDidMount(){
        // get method allCards() 
        this.getProfile()
    }

    handleUpdateProfile(){
        const {id, } = this.props.navigation.state.params;
        // Initial constanta to get state value
        const dataProfile = {
            ...this.state.profile,
            name: this.state.profile.name,
            headline: this.state.profile.headline,
            academy: this.state.profile.academy,
            location: this.state.profile.location,
            country: this.state.profile.country,
            summary: this.state.profile.summary,
        }

        axios
            .put('https://api.backendless.com/098517CC-AB9E-8E8D-FF71-567AD8579900/62B5AEA6-36A5-13EA-FF8B-57B1D5F1F700/data/profiles', dataProfile)
            .then(result=>{
                if(result.data){
                   alert('SUKSES')
                   this.props.navigation.navigate('ProfileList')
                }
            })
    }
    
    render(){
        return(
        <Container style={{backgroundColor: '#FFF'}}>
            <Content style={styles.container}>
                <Form>
                    <View style={styles.itemForm}>
                        <Label>Your Name *</Label>
                        <Input 
                            style={styles.inputForm}
                            onChangeText={
                                name=> this.setState({profile: {...this.state.profile, name}})
                            }
                            value={this.state.profile.name}
                            placeholder="Your Name"
                        />
                    </View>
                    <View style={styles.itemForm}>
                        <Label>Headline </Label>
                        <Textarea rowSpan={5} bordered style={styles.textareaForm} 
                            onChangeText={
                                headline=> this.setState({profile: {...this.state.profile, headline}})
                            }
                            value={this.state.profile.headline}
                            placeholder="Headline Your Profile"
                        />
                    </View>
                    <View style={styles.itemForm}>
                        <Label>Academy / Industry *</Label>
                        <Input 
                            style={styles.inputForm}
                            onChangeText={
                                academy=> this.setState({profile: {...this.state.profile, academy}})
                            }
                            value={this.state.profile.academy}
                            placeholder="You Academy / Industry"
                        />
                    </View>
                    <View style={styles.itemForm}>
                        <Label>Location *</Label>
                        <Input 
                            style={styles.inputForm}
                            onChangeText={
                                location=> this.setState({profile: {...this.state.profile, location}})
                            }
                            value={this.state.profile.location}
                            placeholder="You Location"
                        />
                    </View>
                    <View style={styles.itemForm}>
                        <Label>Country *</Label>
                        <Input 
                            style={styles.inputForm}
                            onChangeText={
                                country=> this.setState({profile: {...this.state.profile, country}})
                            }
                            value={this.state.profile.country}
                            placeholder="You Country"
                        />
                    </View>
                    <View style={styles.itemForm}>
                        <Label>Summary </Label>
                        <Textarea rowSpan={5} bordered style={styles.textareaForm} 
                            onChangeText={
                                summary=> this.setState({profile: {...this.state.profile, summary}})
                            }
                            value={this.state.profile.summary}
                            placeholder="Summary Your Profile"
                        />
                    </View>
                    <Button Primary full style={{marginTop: 10,marginBottom: 10}} onPress={() => this.handleUpdateProfile()}>
                        <Text>Update Profile</Text>
                    </Button>
                </Form>
            </Content>
        </Container>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 15
    },
    itemForm: {
        marginTop: 5,
        marginLeft: 10,
        marginRight: 10
    },
    inputForm: {
        flex: 1,
        borderColor: 'black',
        borderWidth: 1,
        marginTop: 10,
        marginRight: 20,
        padding: 0,
        height: 40
    },
    textareaForm: {
        borderColor: 'black',
        borderWidth: 1
    },
    pickerForm: {
        flex: 1,
        borderColor: 'black',
        borderWidth: 1,
        marginTop: 10,
        marginRight: 20,
        padding: 0,
        height: 40,
        alignSelf: 'stretch'
    },
    btnAdd: {
        alignSelf: 'flex-end',
    },
    footerTabsColor:{
        backgroundColor: '#026aa7'
    },
    footerInactiveTab:{
        color: '#ffffff'
    }
})