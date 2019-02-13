import React from "react";

function Event(props) {
   let name = "";

  return (
    <div className="Event">
      <input
        type="text"
        onChange={event => {
          console.log("My name is" + event.target.value);
        }}
      />

      <input
        type="text"
        onChange={event => {
           name = event.target.value;
        }}
      />
      <button onClick={() => {alert(name)}}>Enter</button>
    </div>
  );
}

export default Event;
