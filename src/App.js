import React, { Component } from "react";
import CardList from "./CardList"
import Searchbox from "./Searchbox"
import { robots } from './robots';


class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }


    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })

    }

    render() {
        const fileteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        return (
            <div className="tc">
                <h1>RoboFriends</h1>
                <Searchbox searchChange={this.onSearchChange} />
                <CardList robots={fileteredRobots} />
            </div>
        );

    }
}

export default App;