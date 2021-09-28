import { number } from "prop-types";
import React from "react";

class CounterClass extends React.Component {
    constructor() {
        super();
        this.increase = this.increase.bind(this)
        this.state = {
            number: 0
        }
    }

    increase() {
        this.setState({
            number:this.state.number + 1
        })
    }

    render() {
        return (
            <div>
                <h1>counter = {this.state.number}</h1>
                <button onClick={this.increase}>Increase</button>
            </div>
        )
    }
}

export default CounterClass;