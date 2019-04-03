import React, { Component } from "react";
import CardList from "../components/CardList";
/* import { robots } from "./robots"; */
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import "./App.css";
import ErrorBoundry from "../components/ErrorBoundry";

class App extends Component {
  state = {
    robots: [],
    searchfield: ""
  };
  /* 
  componentWillMount() {
    console.log("willMount");
  } */
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
    const { searchfield, robots } = this.state;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });

    if (robots.length === 0) {
      return <h1>loading...</h1>;
    } else {
      return (
        <div className="tc">
          <h1 className="f1">RoboFriends</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <Scroll>
            <ErrorBoundry>
              <CardList robots={filteredRobots} />
            </ErrorBoundry>
          </Scroll>
        </div>
      );
    }
  }
}
export default App;
