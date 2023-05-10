import { useState } from "react";
import Navbar from "./Navbar.js";
import Flames from "./Flames";

const Form = () => {
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  function eventHandler1(event) {
    setName1(event.target.value);
  }
  function eventHandler2(event) {
    setName2(event.target.value);
  }
  const formHandler = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <Navbar />
      <form onSubmit={formHandler}>
        <label htmlFor="name1">Name 1</label>
        <input
          type="text"
          id="name1"
          name="names1"
          value={name1}
          onChange={eventHandler1}
        ></input>
        <label htmlFor="name2">Name 2</label>
        <input
          type="text"
          id="name2"
          name="name2"
          value={name2}
          onChange={eventHandler2}
        ></input>
        <input type="submit" />
      </form>
      <Flames name1={name1.toLowerCase()} name2={name2.toLowerCase()} />
    </>
  );
};
export default Form;
