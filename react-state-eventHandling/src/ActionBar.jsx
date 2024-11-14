/* eslint-disable react/prop-types */
import { useState } from "react";

function ActionBar({ updateTodoList }) {
  const [inputValue, setInputValue] = useState("");
  function onSubmitForm(event) {
    event.preventDefault();
    updateTodoList(inputValue);
  }

  function onChangeInput(event) {
    setInputValue(event.target.value);
  }
  return (
    <form onSubmit={onSubmitForm}>
      <input type="text" value={inputValue} onChange={onChangeInput} />
      <button type="submit"> Submit</button>
    </form>
  );
}

export default ActionBar;
