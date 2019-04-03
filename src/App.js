import React, { Component } from "react";
import CardList from "./CardList";
/* import { robots } from "./robots"; */
import SearchBox from "./SearchBox";
import Scroll from "./Scroll";
import "./App.css";

class App extends Component {
  state = {
    robots: [],
    searchfield: ""
  };

  componentWillMount() {
    console.log("willMount");
  }
  componentDidMount() {
    /* console.log("didMount"); */
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ robots: users }));
  }

  onSearchChange = e => {
    //change the state
    this.setState({
      searchfield: e.target.value
    });
  };

  render() {
    /* console.log("render"); */
    //filter the results
    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });

    if (this.state.robots.length === 0) {
      return <h1>loading...</h1>;
    } else {
      return (
        <div className="tc">
          <h1 className="f1">RoboFriends</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <Scroll>
            <CardList robots={filteredRobots} />
          </Scroll>
        </div>
      );
    }
  }
}
export default App;
