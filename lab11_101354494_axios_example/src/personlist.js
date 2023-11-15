import React, { Component } from "react";
import axios from "axios";

class PersonList extends Component {
  state = {
    persons: [],
  };

  componentDidMount() {
    fetch("https://randomuser.me/api/?results=10")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const persons = data.results;
        this.setState({ persons });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }

  render() {
    return (
      <div>
        <h2>Person List</h2>
        <ul>
          {this.state.persons.map((person) => (
            <li key={person.login.uuid}>
              {person.name.first} {person.name.last}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default PersonList;
