import {useState, useCallback} from "react";


export default function() {
  const [step, setStep] = useState(1);

  const increase = useCallback(() => setStep(currentStep => currentStep + 1), [])
  const decrease = useCallback(() => setStep(currentStep => currentStep - 1), [])
  return {
    step,
    increase,
    decrease
  }
}
