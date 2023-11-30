import {useState} from "react";

const Input = function(props) {
  const [text, setText] = useState("");

  const onSubmit = function(event) {
    props.onSubmit(text);
  };

  return (
    <div className="Input">
      <input
        type="text"
        placeholder="Enter name"
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={onSubmit}>Add</button>
    </div>
  );

};

export default Input;