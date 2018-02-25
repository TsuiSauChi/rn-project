import React from "react";
import { Container, Label, Left, Body, Title, Header, Button, Icon, Right, Text, Content } from 'native-base';
import { AppRegistry, Image, StatusBar } from "react-native";
import Expo from "expo";

export default class SecondPage extends React.Component {
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
                        <Title>About GeeksHacking!</Title>
                    </Body>
                    <Right />
                </Header>
                <Body>
                    <Image
                        source={require('./images/logo.png')}
                        style={{ height: 200, width: 400 }}>
                    </Image>
                    <Text>We are passionate software developers, user experience designers, computer engineers and technopreneurs who want to give back to the tech community using our skills and experiences. We want to create innovative and impactful solutions that will make a difference in the world today.</Text>
                    <Text>This year, we want to work on Creating Smart Homes. With the advent of the Internet of Things (IoT) and the ubiquitous mobile phone, the home surprisingly remains largely unchanged. We envision that through HackOMania 2018, we would be able to synergize the conveniences that tech has already given us with everyday use cases; creating solutions using machine learning and AI that would impact our everyday life at home</Text>
                    <Text>We want to “Change The World With Code”. Do you?</Text>
                    <Text>For any enquiries email us at contact@geekshacking.com.</Text>
                </Body>
            </Container>
        );
    }
}