import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
import { Container, Form, Item, Label, Input, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Picker } from 'native-base';
import Expo from "expo";
import { Alert } from 'react-native';
import { DrawerNavigator } from "react-navigation";
import SideBar from "./SideBar.js";

import SecondPage from './SecondPage';
import HomePage from './Home/index.js';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
    });
    this.setState({ loading: false });
  }


  render() {
    if (this.state.loading) {
      return <Expo.AppLoading />;
    }
    return (
      <HomePage />
    )
  }

}
/*
            <Item floatingLabel>
              <Label>Which Challenge does your project address? </Label>
              <Input
                onChangeText={challengeValue =>
                  this.setState({ challengeValue })}
              />
            </Item>
              */