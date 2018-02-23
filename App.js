import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
import { Container, Form, Item, Label, Input, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import Expo from "expo";
import { Alert } from 'react-native';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      teamNameValue: '',
      projectNameValue: '',
      challengeValue: '',
      projectDescriptionValue: '',
      urlValue: '',
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

  restPost() {

    /**
    let totalLength =
      this.state.teamNameValue.length +
      this.state.projectNameValue.length +
      this.state.challengeValue.length +
      this.state.projectDescriptionValue.length +
      this.state.urlValue.length;**/
    //Alert.alert('Total Length is : ' + totalLength);

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
            Alert.alert("Please try again");
          }
        });
      })
      .catch(error => {
        Alert.alert(error);
      });
  }

  render() {
    if (this.state.loading) {
      return <Expo.AppLoading />;
    }
    return (
      <Container>
        <Header>
          <Left>
            <Button onclick="sideMenu()" transparent>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>HackOMania!</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Form style={{paddingBottom:25}}>
            <Item floatingLabel>
              <Label>Team Name</Label>
              <Input
                onChangeText={teamNameValue => this.setState({ teamNameValue })}
              />
            </Item>
            <Item floatingLabel>
              <Label>Project Name</Label>
              <Input
                onChangeText={projectNameValue =>
                  this.setState({ projectNameValue })}
              />
            </Item>
            <Item floatingLabel>
              <Label>Which Challenge does your project address? </Label>
              <Input
                onChangeText={challengeValue =>
                  this.setState({ challengeValue })}
              />
            </Item>
            <Item floatingLabel>
              <Label>Project Description</Label>
              <Input
                onChangeText={projectDescriptionValue =>
                  this.setState({ projectDescriptionValue })}
              />
            </Item>
            <Item floatingLabel>
              <Label>Enter Project Video URL</Label>
              <Input onChangeText={urlValue => this.setState({ urlValue })} />
            </Item>
          </Form>
          <Button onPress={this.restPost.bind(this)} primary full style={{width: '90%', alignSelf:'center'}}>
              <Text> Submit Project </Text>
          </Button>
        </Content>
      </Container >
    );
  }

}
