import { useState, useCallback } from "react";

export default function(initialValue = false) {
  const [data, setData] = useState(initialValue);

  const toggle = useCallback(() => setData(currentState => !currentState), []);

  return [data, toggle, setData];
}
