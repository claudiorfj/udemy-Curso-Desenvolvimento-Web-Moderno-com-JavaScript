/* eslint-disable import/no-anonymous-default-export */
import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

import { BrowserRouter } from 'react-router-dom'

import Logo from "../template/Logo";
import Nav from "../template/Nav";
import Home from "../components/home/Home";
import Footer from "../template/Footer";

export default (props) => (
    <BrowserRouter>
    <div className="app">
        <Logo />
        <Nav />
        <Home />
        <Footer />
    </div>
    </BrowserRouter>
);
