import React from "react";
import { connect } from "react-redux";

import { getSmurfs, addSmurf, updateSmurf } from "../actions";

class SmurfList extends React.Component {
  state = {
    name: "",
    age: "",
    height: "",
    id: null
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

  updateActiveSmurf = id => {
    console.log(id);
    this.setState({
      id: id
    });
  };

  editSmurf = e => {
    e.preventDefault();
    const editedSmurf = {
      name: this.state.name,
      age: this.state.age,
      height: `${this.state.height}cm`,
      id: this.state.id
    };
    this.props.updateSmurf(editedSmurf);
  };

  render() {
    return (
      <div className="smurfList">
        {this.props.smurfs.map((smurf, index) => (
          <div key={index} className="smurf">
            <p style={{ fontSize: `${parseInt(smurf.height, 10) * 4}px` }}>
              {smurf.name} Smurf, {smurf.age} years old
            </p>
            <form
              onClick={() => this.updateActiveSmurf(smurf.id)}
              onSubmit={this.editSmurf}
              className="addSmurf"
            >
              <h3>Tweak this Smurf!</h3>
              <input
                onChange={this.handleChanges}
                type="text"
                name="name"
                defaultValue={smurf.name}
              />
              <input
                onChange={this.handleChanges}
                type="number"
                min="1"
                max="10000"
                name="age"
                defaultValue={smurf.age}
              />
              <input
                onChange={this.handleChanges}
                type="number"
                min="1"
                max="10"
                name="height"
                defaultValue={parseInt(smurf.height, 10)}
              />
              <button>Tweak Smurf!</button>
            </form>
          </div>
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
  { getSmurfs, addSmurf, updateSmurf }
)(SmurfList);
