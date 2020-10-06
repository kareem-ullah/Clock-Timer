import React, { Component } from 'react';
import Digitalclock from './Digitalclock';
import Analogclock from './Analogclock'
import './App.css';

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTime: new Date().toLocaleString(),
            counter: 0
        }
        this.UpdateTime();
    }

    UpdateTime() {
        setInterval(() => {
            this.setState({
                currentTime: new Date().toLocaleString(),
                counter: this.state.counter + 1
            })
        }, 1000)
    }

    render() {
        
        return (
            <div>
                <div className="digital">
                    <h1>Clock</h1>
                <Digitalclock time={this.state.currentTime} />
                </div>
                <Analogclock time={this.state.currentTime} />
            </div>
        )
    }
}

export default Clock;