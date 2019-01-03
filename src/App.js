import React, { Component } from "react";
import "./styles/conscious.min.css";
import Clock from "./components/Clock";
import Icon from "./components/Icon";

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="sidebar">
                    <Icon icon={"fas fa-bars"} title="Open Sidebar." />
                </div>
                <div className="container">
                    {/* <div className="add-new-reminder">
                        <Icon
                            icon="fas fa-plus-square"
                            title="Add new reminder."
                        />
                    </div> */}
                    <Clock />
                </div>
            </div>
        );
    }
}

export default App;
