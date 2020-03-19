import React from "react";
import { useStepper } from "../../hooks";
import { SelectOrigin } from "../../containers/OrderTaxiSteps";

let data = {};
export default function(props) {
  const { step, increase } = useStepper();
  const increaseStep = function(state) {
    data = {
      ...data,
      ...state
    };
    increase();
  };

  switch (step) {
    case 1:
      return <SelectOrigin increase={increaseStep} />;
    default:
      return null;
  }
}
