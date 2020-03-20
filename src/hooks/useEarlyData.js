import { useState, useEffect } from "react";
import { ajax } from "../helpers";
import useToggle from "./useToggle";

export default function(
  route = "/",
  initialData = {},
  reducer = state => state
) {
  const [data, setData] = useState(initialData);
  const [loading, toggle] = useToggle(false);

  useEffect(() => {
    toggle();
    // i use initial data for development do get back exact data as initial data
    ajax
      .mock(route, initialData)
      // .then(res => res.json())
      .then(data => reducer(data))
      .then(data => setData(data))
      .catch(error => console.error("error in use early data", error))
      .finally(toggle);
  }, [route]);
  return [data, loading];
}
