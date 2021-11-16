import { useContext } from "react";
import { QueryContext } from "../context/query";
import { btn } from "../styles/Form.module.css";

export default function Reset() {
  let { setQuery, setError } = useContext(QueryContext);
  const handleOnClick = (e) => {
    setQuery("");
    setError(false);
  };
  return (
    <button className={btn} type="button" onClick={handleOnClick}>
      Reset
    </button>
  );
}
