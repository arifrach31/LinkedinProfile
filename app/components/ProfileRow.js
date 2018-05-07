import React,{Component} from 'react'
import {
    Left, Body, Right,
    Text,
    CardItem,
    Button, Icon
} from 'native-base'
import {View, StyleSheet, Image} from 'react-native'

const ProfleRow = (props) => (
    <View>
        <CardItem key={props.item.objectId} style={styles.profile}>
            <Left style={styles.left}>
                <Image style={styles.img}
                    source={require('../assets/images/profile.png')}
                />
            </Left>
            <Body style={styles.body}>
                <Text style={styles.title}>{props.item.title}</Text>
                <Text style={styles.description}>{props.item.description}</Text>
            </Body>
            <Right style={styles.right}/>
        </CardItem>
    </View>
)

const styles = StyleSheet.create({
    profile: {
        flex: 1,
        zIndex: 10,
        flexDirection: 'row'
    },
    title: {
        fontWeight: 'bold'
    },
    text: {
        color: '#0073b1'
    },
    description: {

    },
    left: {
        flex: 2
    },
    img: {
        zIndex: 5,
        width: 50,
        height: 50,
    },
    body: {
        zIndex: 0,
        flex: 8
    },
    right: {
        flex: 0
    }
    
})

export default ProfleRow