import React, { Component } from "react";
import "./styles/conscious.min.css";
import Clock from "./components/Clock";

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="container">
                    <Clock />
                </div>
            </div>
        );
    }
}

export default App;
