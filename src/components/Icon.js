import React, { Component } from "react";

class Icon extends Component {
    render() {
        const { icon } = this.props;
        return <span className={icon} {...this.props} />;
    }
}

export default Icon;
