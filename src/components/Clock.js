import React, { Component } from "react";

export default class Clock extends Component {
    state = {
        currentTime: new Date().toLocaleTimeString(),
        currentDate: ""
    };

    componentDidMount() {
        this.clockInterval = setInterval(() => this.tickClock(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.clockInterval);
    }

    tickClock = () => {
        let currentDateHandle = new Date();
        let months = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
        ];
        this.setState({
            currentTime: currentDateHandle.toLocaleTimeString(),
            currentDate: `${
                months[currentDateHandle.getMonth()]
            } ${currentDateHandle.getDate()}, ${currentDateHandle.getFullYear()} `
        });

        document.title = this.state.currentTime;
    };

    render() {
        return (
            <React.Fragment>
                <div className="time">{this.state.currentTime}</div>
                <div className="date">{this.state.currentDate}</div>
            </React.Fragment>
        );
    }
}
