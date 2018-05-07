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


export default class AddProfile extends Component{

    state = {
       name: '',
       headline: '',
       academy: '',
       location: '',
       country: '',
       summary: ''
    }

    componentDidMount(){
        // get method allCards() 

    }

    handleAddProfile(){
        
        // Initial constanta to get state value
        const dataProfiles = {
            ...this.state.data,
            name: this.state.name,
            headline: this.state.headline,
            academy: this.state.academy,
            location: this.state.location,
            country: this.state.country,
            summary: this.state.summary,
        }


        axios
            .post('https://api.backendless.com/098517CC-AB9E-8E8D-FF71-567AD8579900/62B5AEA6-36A5-13EA-FF8B-57B1D5F1F700/data/profiles', dataProfiles)
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
                                name=> this.setState({name})
                            }
                            value={this.state.name}
                            placeholder="Your Name"
                        />
                    </View>
                    <View style={styles.itemForm}>
                        <Label>Headline </Label>
                        <Textarea rowSpan={5} bordered style={styles.textareaForm} 
                            onChangeText={
                                headline=> this.setState({headline})
                            }
                            value={this.state.headline}
                            placeholder="Headline Your Profile"
                        />
                    </View>
                    <View style={styles.itemForm}>
                        <Label>Academy / Industry *</Label>
                        <Input 
                            style={styles.inputForm}
                            onChangeText={
                                academy=> this.setState({academy})
                            }
                            value={this.state.academy}
                            placeholder="You Academy / Industry"
                        />
                    </View>
                    <View style={styles.itemForm}>
                        <Label>Location *</Label>
                        <Input 
                            style={styles.inputForm}
                            onChangeText={
                                location=> this.setState({location})
                            }
                            value={this.state.location}
                            placeholder="You Location"
                        />
                    </View>
                    <View style={styles.itemForm}>
                        <Label>Country *</Label>
                        <Input 
                            style={styles.inputForm}
                            onChangeText={
                                country=> this.setState({country})
                            }
                            value={this.state.country}
                            placeholder="You Country"
                        />
                    </View>
                    <View style={styles.itemForm}>
                        <Label>Summary </Label>
                        <Textarea rowSpan={5} bordered style={styles.textareaForm} 
                            onChangeText={
                                summary=> this.setState({summary})
                            }
                            value={this.state.summary}
                            placeholder="Summary Your Profile"
                        />
                    </View>
                    <Button Primary full style={{marginTop: 10,marginBottom: 10}} onPress={() => this.handleAddProfile()}>
                        <Text>Add New Profile</Text>
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