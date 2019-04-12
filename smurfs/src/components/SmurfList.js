import React from "react";
import { connect } from "react-redux";

import { getSmurfs, addSmurf } from "../actions";

class SmurfList extends React.Component {
  state = {
    name: "",
    age: "",
    height: ""
  };

  componentDidMount() {
    this.props.getSmurfs();
  }

  handleChanges = e => {
    console.log(this.state);
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  submitSmurf = e => {
    e.preventDefault();
    const newSmurf = {
      name: this.state.name,
      age: this.state.age,
      height: `${this.state.height}cm`
    };
    this.props.addSmurf(newSmurf);
  };

  render() {
    return (
      <div className="smurfList">
        {this.props.smurfs.map((smurf, index) => (
          <p
            key={index}
            style={{ fontSize: `${parseInt(smurf.height, 10) * 4}px` }}
          >
            {smurf.name} Smurf, {smurf.age} years old
          </p>
        ))}
        <form onSubmit={this.submitSmurf} className="addSmurf">
          <h2>Add your favorite Smurf!</h2>
          <input
            onChange={this.handleChanges}
            type="text"
            name="name"
            placeholder="Name"
          />
          <input
            onChange={this.handleChanges}
            type="number"
            min="1"
            max="10000"
            name="age"
            placeholder="Age"
          />
          <input
            onChange={this.handleChanges}
            type="number"
            min="1"
            max="10"
            name="height"
            placeholder="Height"
          />
          <button>Add Smurf!</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({ smurfs }) => ({
  smurfs
});

export default connect(
  mapStateToProps,
  { getSmurfs, addSmurf }
)(SmurfList);
