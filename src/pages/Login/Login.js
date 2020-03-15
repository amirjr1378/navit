import React from 'react';
import {useStepper} from "../../hooks";
import EnterPhone from '../../containers/EnterPhone';
import EnterPass from '../../containers/EnterPass';

let currentValue = {};
function Login(props) {
  const stepProps = useStepper();
  const {step, increase } = stepProps;
  const increaseStep = data => {
    if(!data) return;
    currentValue = {...currentValue, ...data}
    increase();
  }
  switch(step) {
      case 1: return <EnterPhone  increase={increaseStep} />
      case 2: return <EnterPass currentValue={currentValue} />
      default: return null;
  }


}
export default Login;
