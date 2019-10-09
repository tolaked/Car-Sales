import React from "react";
import { remove } from "../state/actionCreator";
import { connect } from "react-redux";

const AddedFeature = props => {
  const removeFeature = item => {
    // dispatch an action here to remove an item
    props.dispatch(remove(item));
  };

  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick={() => removeFeature(props.feature)} className="button">
        X
      </button>
      {props.feature.name}
    </li>
  );
};

export default connect()(AddedFeature);
