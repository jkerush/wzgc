import React, { Component } from "react";
import Bili from "./bili"


class TempUl extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <ul className="lis">
                <Bili list={this.props.list} />
            </ul>
        );
    }
}

export default TempUl;
