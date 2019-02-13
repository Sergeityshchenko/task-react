import React from "react";

function Task() {
  let task = "";
  return (
    <div>
      <input
        type="text"
        onChange={event => {
          task = event.target.value;
        }}
      />
      <button onClick={() => alert(task)}>Enter</button>
    </div>
  );
}

export default Task;
