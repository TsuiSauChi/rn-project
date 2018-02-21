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

  async restPost() {

    /**
    let totalLength =
      this.state.teamNameValue.length +
      this.state.projectNameValue.length +
      this.state.challengeValue.length +
      this.state.projectDescriptionValue.length +
      this.state.urlValue.length;**/
    //Alert.alert('Total Length is : ' + totalLength);

    /** Alert.alert('xxxx');
    const response = await fetch(
      'http://hackomania.geekshacking.com/Admin/public/webservices/Hackomania/Hackomania.asmx/updateProject',
      {
        method: 'POST',
        headers: {
          Accept: 'application/x-www-form-urlencoded',
          'Content-Length': totalLength,
        },
        body: {
          teamID: this.state.teamNameValue,
          name: this.state.projectNameValue,
          description: this.state.projectDescriptionValue,
          youtubeUrl: this.state.urlValue,
          challenge: this.state.challengeValue,
          opensource: 'testSource',
        },
      }
    );
    Alert.alert(response);
    // } catch (error) {
    //  Alert.alert(error);
    //  }*/

    var data =
      'teamID=' +
      this.state.teamNameValue +
      '&name=' +
      this.state.projectNameValue +
      '&description=' +
      this.state.projectDescriptionValue +
      '&youtubeUrl=' +
      this.state.urlValue +
      '&challenge=' +
      this.state.challengeValue +
      '&opensource=testSource';

    //Alert.alert(data);
/*
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
      .then(function (response) {
        Alert.alert(response.toString());
      })
      .catch(error => {
        Alert.alert(error);
      });
    */
    fetch(
      'http://hackomania.geekshacking.com/Admin/public/webservices/Hackomania/Hackomania.asmx/updateProject',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: data, //'teamID=1435&name=ts&description=qwe&youtubeUrl=qweqwe&challenge=qwewqe&opensource=123',
      }
    )
      .then(response => response.text())
      .then(returnValue => {
        this.setState({ returnValue });
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
          <Form>
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
        </Content>
        <Footer>
          <FooterTab>
            <Button onPress={this.restPost.bind(this)} full>
              <Text>Submit</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }

}
