import { useContext } from "react";
import { QueryContext } from "../context/query";

export default function Reset() {
  let { setQuery } = useContext(QueryContext);
  const handleOnClick = (e) => {
    setQuery("");
  };
  return (
    <button type="button" onClick={handleOnClick}>
      Reset
    </button>
  );
}
