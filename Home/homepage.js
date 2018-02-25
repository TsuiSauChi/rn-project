import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
import { Container, Thumbnail, Form, Item, Image, Label, Input, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Picker } from 'native-base';
import Expo from "expo";
import { Alert } from 'react-native';
import { DrawerNavigator } from "react-navigation";
import SideBar from "../SideBar.js";

import SecondPage from '../SecondPage';

export default class HomePage extends React.Component {

  constructor() {
    super();
    this.state = {
      loading: true,
      teamNameValue: '',
      projectNameValue: '',
      challengeValue: '',
      projectDescriptionValue: '',
      urlValue: '',
      pickerState: 'key0',
    };
  }

  onValueChange2(value) {
    this.setState({
      pickerState: value,
    });
  }

  restPost() {

    console.log("PickerState" + this.state.pickerState);
    if (this.state.pickerState == 'key0') {
      this.setState({ challengeValue: "SGInnovate Deep Tech Challenge" });
    } else if (this.state.pickerState == 'key1') {
      this.setState({ challengeValue: "IoT for Smart Homes Challenge" });
    } else if (this.state.pickerState == 'key2') {
      this.setState({ challengeValue: "Smart Homes for the Elderly" });
    }

    console.log("Challenge Value" + this.state.challengeValue);
    var data =
      'teamName=' +
      this.state.teamNameValue +
      '&name=' +
      this.state.projectNameValue +
      '&description=' +
      this.state.projectDescriptionValue +
      '&youtubeUrl=' +
      this.state.urlValue +
      '&challenge=' +
      this.state.challengeValue;

    const parseString = require('react-native-xml2js').parseString;

    fetch(
      'http://hackomania.geekshacking.com/Admin/public/webservices/Hackomania/Hackomania.asmx/updateProject',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: data,
      }
    )
      .then(response => response.text())
      .then((response) => {
        parseString(response, function (err, result) {
          var i = response.search("success");
          console.log(i);
          console.log(response.charAt(i + 9));
          console.log(response);
          if (response.charAt(i + 9) == 1) {
            Alert.alert("Project Successfully Uploaded!");
          } else {
            var j =response.search("message");
            var k = response.search("}");
            Alert.alert("Please try again\n" + response.substring(j+10,k-1));
          }
        });
      })
      .catch(error => {
        Alert.alert(error);
      });
  }

  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.navigate("DrawerOpen")}>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>HackOMania!</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Form style={{ paddingBottom: 25 }}>
            <Item stackedLabel>
              <Label>Team Name</Label>
              <Input
                onChangeText={teamNameValue => this.setState({ teamNameValue })}
              />
            </Item>
            <Item stackedLabel>
              <Label>Project Name</Label>
              <Input
                onChangeText={projectNameValue =>
                  this.setState({ projectNameValue })}
              />
            </Item>
            <Item stackedLabel>
              <Label>Project Description</Label>
              <Input
                onChangeText={projectDescriptionValue =>
                  this.setState({ projectDescriptionValue })}
              />
            </Item>
            <Item stackedLabel>
              <Label>Enter Project Video URL</Label>
              <Input onChangeText={urlValue => this.setState({ urlValue })} />
            </Item>
            <Label style={{ alignSelf: 'center', paddingTop: 15 }}>Challenge Being Addressed</Label>
            <Picker
              style={{ alignItems: 'center' }}
              mode="dropdown"
              placeholder="Tap to Choose Challenge"
              selectedValue={this.state.pickerState}
              onValueChange={this.onValueChange2.bind(this)}
            >
              <Picker.Item label="SGInnovate Deep Tech Challenge" value="key0" />
              <Picker.Item label="IoT for Smart Homes Challenge" value="key1" />
              <Picker.Item label="Smart Homes for the Elderly" value="key2" />
            </Picker>
          </Form>
          <Button block onPress={this.restPost.bind(this)} primary style={{ width: '90%', alignSelf: 'center' }}>
            <Text> Submit Project </Text>
          </Button>
        </Content>
      </Container >
    );
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