import React from "react";
import { connect } from "react-redux";

import { getSmurfs } from "../actions";

class SmurfList extends React.Component {
  state = {};

  componentDidMount() {
    this.props.getSmurfs();
  }

  render() {
    console.log(this.props);
    return (
      <div className="smurfList">
        {this.props.smurfs.map((smurf, index) => (
          <p key={index}>{smurf.name}</p>
        ))}
      </div>
    );
  }
}

const mapStateToProps = ({ smurfs }) => ({
  smurfs
});

export default connect(
  mapStateToProps,
  { getSmurfs }
)(SmurfList);
