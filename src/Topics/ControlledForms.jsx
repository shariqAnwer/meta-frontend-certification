import React, { useState } from "react";

const ControlledForms = () => {
  const [name, setName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
    setName("");
  };
  return (
    <>
      {/* -------------------------------- */}
      {/* example of UNCONTROLLED form - it hits the DOM directly with get request to the root and page refresh  */}
      {/* <form>
        <fieldset>
          <div className="Field">
            <label>Name:</label>
            <input type="text" placeholder="Name" name="name" />
          </div>
          <button type="submit">Submit</button>
        </fieldset>
      </form> */}
      {/* ------------------------ */}

      {/* CONTROLLED FORM  */}
      <form onSubmit={handleSubmit}>
        <fieldset>
          <div className="Field">
          {/* pass the id in htmlFor */}
            <label htmlFor="name">Name:</label> 
            <input
            id="name"
              type="text"
              placeholder="Name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <button disabled={!name} type="submit">Submit</button>
        </fieldset>
      </form>
    </>
  );
};

export default ControlledForms;
