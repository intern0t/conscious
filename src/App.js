import React, { Component } from "react";
import "./styles/conscious.min.css";
import Clock from "./components/Clock";
import Icon from "./components/Icon";

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="sidebar">
                    Sidebar
                    <Icon icon={"fas fa-bars"} />
                </div>
                <div className="container">
                    <Clock />
                </div>
            </div>
        );
    }
}

export default App;
