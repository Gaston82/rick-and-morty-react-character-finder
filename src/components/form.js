import { useState, useContext } from "react";
import { QueryContext } from "../context/query";

export default function Form() {
  const [value, setValue] = useState({ name: "", status: "" });

  const { setQuery } = useContext(QueryContext);

  const handleInputChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(value);
    setValue({
      name: "",
      status: "",
    });
  };
  const { name, status } = value;

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex">
        <label htmlFor="name">
          Character Name
          <input
            type="text"
            autoComplete="off"
            onChange={handleInputChange}
            name="name"
            value={name}
          />
        </label>
        <label htmlFor="status">
          Status
          <select onChange={handleInputChange} name="status" value={status}>
            <option>Alive</option>
            <option>Dead</option>
            <option>Unknown</option>
          </select>
        </label>
      </div>
      <button className="btn">Search</button>
    </form>
  );
}
