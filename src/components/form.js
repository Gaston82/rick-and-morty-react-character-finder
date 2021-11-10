import { useState, useContext } from "react";
import { QueryContext } from "../context/query";

export default function Form() {
  const [name, setName] = useState("");
  const { setQuery } = useContext(QueryContext);

  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(name);
    setName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">
        Search By Name
        <input type="text" onChange={handleInputChange} value={name} />
      </label>
      <input type="submit" value="Search" />
    </form>
  );
}
