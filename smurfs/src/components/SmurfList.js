import React from "react";
import { connect } from "react-redux";

import { getSmurfs, addSmurf, updateSmurf, deleteSmurf } from "../actions";

class SmurfList extends React.Component {
  state = {
    name: "",
    age: "",
    height: "",
    activeId: null
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
    if (this.state.name && this.state.age && this.state.height) {
      const newSmurf = {
        name: this.state.name,
        age: this.state.age,
        height: `${this.state.height}cm`
      };
      this.props.addSmurf(newSmurf);
      e.target.reset();
      this.setState({
        name: "",
        age: "",
        height: ""
      });
    } else {
      alert("Please complete form before submission");
    }
  };

  updateActiveSmurf = id => {
    console.log(id);
    this.setState({
      activeId: id
    });
  };

  editSmurf = e => {
    e.preventDefault();
    const editedSmurf = {
      name: this.state.name,
      age: this.state.age,
      height: `${this.state.height}cm`,
      id: this.state.activeId
    };
    this.props.updateSmurf(editedSmurf);
  };

  killSmurf = e => {
    e.preventDefault();
    this.props.deleteSmurf(this.state.activeId);
  };

  render() {
    return (
      <div className="smurfList">
        {this.props.smurfs.map((smurf, index) => (
          <div key={index} className="smurf">
            <p style={{ fontSize: `${parseInt(smurf.height, 10) * 4}px` }}>
              {smurf.name} Smurf, {smurf.age} years old
            </p>
            <form onSubmit={this.editSmurf} className="addSmurf">
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
              <button onClick={() => this.updateActiveSmurf(smurf.id)}>
                Tweak Smurf!
              </button>
            </form>
            <form onSubmit={this.killSmurf}>
              <h4>Kill this Smurf?</h4>
              <button
                onClick={() => this.updateActiveSmurf(smurf.id)}
                style={{ background: "red", color: "white", padding: "5px" }}
              >
                I hope you're sure about this
              </button>
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
  { getSmurfs, addSmurf, updateSmurf, deleteSmurf }
)(SmurfList);
