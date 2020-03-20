import React, { useState, useCallback } from "react";

export default function(defaultStep = 1) {
  const [step, setStep] = useState(defaultStep);

  const increase = useCallback(
    () => setStep(currentStep => currentStep + 1),
    []
  );
  const decrease = useCallback(
    () => setStep(currentStep => currentStep - 1),
    []
  );
  return {
    step,
    increase,
    decrease
  };
}
export function withStepper(Component, defaultStep = 1) {
  class Stepper extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        step: defaultStep
      };

      this.increase = this.increase.bind(this);
      this.decrease = this.decrease.bind(this);
    }

    increase() {
      this.setState(state => ({ step: state.step + 1 }));
    }

    decrease() {
      this.setState(state => ({ step: state.step - 1 }));
    }

    render() {
      return <Component {...this.state} />;
    }
  }
  Stepper.displayName = "stepper";

  return Stepper;
}
