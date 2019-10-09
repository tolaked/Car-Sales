import React from "react";
import { connect } from "react-redux";
import { add } from "../state/actionCreator";

const AdditionalFeature = props => {
  const buyItem = item => {
    // dipsatch an action here to add an item
    const ids = props.carFeatures.map(item => item.id);
    if (ids.includes(item.id)) return;
    return props.dispatch(add(item));
  };

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick={() => buyItem(props.feature)} className="button">
        Add
      </button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default connect(state => ({ carFeatures: state.car.features }))(
  AdditionalFeature
);
