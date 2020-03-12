import {useState, useCallback} from "react";


export default function(initialValue = false) {
  const [loading, setLoading] = useState(initialValue);

  const toggle = useCallback(() => setLoading(currentState => !currentState), [])


  return {
    loading,
    toggle,
    setLoading
  }
}
