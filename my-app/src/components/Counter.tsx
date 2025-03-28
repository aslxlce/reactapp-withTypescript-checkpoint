import React, { Component } from "react";

// Define the state type
interface CounterState {
    count: number;
}

class Counter extends Component<{}, CounterState> {
    state: CounterState = {
        count: 0,
    };

    increment = () => {
        this.setState((prevState) => ({ count: prevState.count + 1 }));
    };

    render() {
        return (
            <div>
                <p>Count: {this.state.count}</p>
                <button onClick={this.increment}>Increment</button>
            </div>
        );
    }
}

export default Counter;
