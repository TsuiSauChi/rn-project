import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });
    this.setState({ loading: false });
  }

  render() {
    if (this.setState.loading) {
      return <Expo.AppLoading />;
    }
    return (
      <Container>
        <Header>
          <Left>
            <Button onclick="sideMenu()" transparent>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>HackOMania2018</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Text>
            This is a test
          </Text>
        </Content>
        <Footer>
          <FooterTab>
            <Button full>
              <Text>Submit</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }

  sideMenu() {
    return (
      <Container>
        <Content>
          <List>
            <ListItem>
              <Text>Simon Mignolet</Text>
            </ListItem>
            <ListItem>
              <Text>Nathaniel Clyne</Text>
            </ListItem>
            <ListItem>
              <Text>Dejan Lovren</Text>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}

/*
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/