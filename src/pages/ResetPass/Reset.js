import React from 'react';
import {useStepper} from "../../hooks";
import EnterVerifyCode from '../../containers/EnterVerifyCode';
import ChangePass from '../../containers/ChangePass';

let currentValue = {};
function Reset(props) {
  const stepProps = useStepper();
  const {step, increase, decrease } = stepProps;
  const increaseStep = data => {
    currentValue = {...currentValue, ...data}
    increase();
  }

   switch(step) {
      case 1: return <EnterVerifyCode increase={increaseStep} />
      case 2: return <ChangePass currentValue={currentValue}/>
    }
}

export default Reset;
