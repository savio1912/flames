import { useState } from "react";
import Navbar from "./Navbar.js";
import Flames from "./Flames.js";
import { Helmet } from "react-helmet-async";
const Form = () => {
  const [showComponent, setShowComponenet] = useState(false);
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  function eventHandler1(event) {
    setShowComponenet(false);
    setName1(event.target.value);
  }
  function eventHandler2(event) {
    setShowComponenet(false);
    setName2(event.target.value);
  }
  const formHandler = (event) => {
    event.preventDefault();
    setShowComponenet(true);
  };

  return (
    <>
      <Helmet>
        <title>Flames</title>
      </Helmet>
      <Navbar />
      {showComponent && (
        <Flames
          name1={name1.toLowerCase()}
          name2={name2.toLowerCase()}
          className="flames"
        />
      )}
      <div className="container-md form">
        <form onSubmit={formHandler}>
          <div className="row">
            <label className="form-label" htmlFor="name1">
              <b> Name 1</b>
            </label>
            <div className="col-4">
              <input
                className="form-control-lg"
                placeholder="Savio"
                type="text"
                id="name1"
                name="names1"
                value={name1}
                onChange={eventHandler1}
              ></input>
            </div>
          </div>
          <div className="row">
            <label className="form-label" htmlFor="name2">
              <b> Name 2</b>
            </label>
            <div className="col-4">
              <input
                className="form-control-lg"
                placeholder="Swetha"
                type="text"
                id="name2"
                name="name2"
                value={name2}
                onChange={eventHandler2}
              ></input>
            </div>
          </div>
          <div>
            <button className="btn btn-warning">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
};
export default Form;
