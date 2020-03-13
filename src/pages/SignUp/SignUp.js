import React from "react";
import { useStepper } from "../../hooks";
import {Register, EnterPhone, VerifyCode} from '../../containers/Register';

let currentValue = {};
function SignUp({ ...props }) {

  const {step, increase } = useStepper();
  const increaseStep = data => {
    currentValue = {...currentValue, ...data}
    increase();
  }

   switch(step) {
      case 1: return <EnterPhone increase={increaseStep} />
      case 2: return <VerifyCode increase={increaseStep} currentValue={currentValue}/>
      case 3: return <Register currentValue={currentValue}/>
      default: return null;
    }
}

export default SignUp;
