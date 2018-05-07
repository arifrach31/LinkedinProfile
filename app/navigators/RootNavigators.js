import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Button, Icon, View, Title, Subtitle, Header, Body, Left } from 'native-base';
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';

import ProfileList from '../screens/ProfileList';
import AddProfile from '../screens/AddProfile';
import UpdateProfile from '../screens/UpdateProfile';

const RootNavigator = StackNavigator({

  ProfileList: {
    screen: ProfileList,
    navigationOptions: {
      header: null
    }
  },

  AddProfile: {
    screen: AddProfile,
    navigationOptions: {
      title: 'Add Profile'
    }
  },

  UpdateProfile: {
    screen: UpdateProfile,
    navigationOptions: {
      title: 'Update Profile',
    }
  },
  

})

export default RootNavigator;