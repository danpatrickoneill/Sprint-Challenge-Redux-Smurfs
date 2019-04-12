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
    const { name, age, height } = this.state;
    const newSmurf = { name, age, height };
    this.props.addSmurf(newSmurf);
  };

  render() {
    return (
      <div className="smurfList">
        {this.props.smurfs.map((smurf, index) => (
          <p
            key={index}
            style={{ fontSize: `${parseInt(smurf.height) * 4}px` }}
          >
            {smurf.name}, {smurf.age}
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
            name="age"
            placeholder="Age"
          />
          <input
            onChange={this.handleChanges}
            type="number"
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
