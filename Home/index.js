import React, { Component } from "react";
import HomeScreen from "./homepage.js";
import SideBar from "../SideBar.js";
import { DrawerNavigator } from "react-navigation";

import SecondPage from '../SecondPage';

const HomePage = DrawerNavigator(
    {
        ProjectSubmission : { screen: HomeScreen },
        AboutUs: { screen: SecondPage },
    },
    {
        contentComponent: props => <SideBar {...props} />
    }
);
export default HomePage;