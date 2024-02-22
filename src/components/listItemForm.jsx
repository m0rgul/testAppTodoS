import { useState } from "react";

const ListItemForm = ({ todo, handleSave, index }) => {
  const [text, setText] = useState();

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;

    setText(value);
  };

  const save = () => {
    handleSave(
      {
        ...todo,
        text,
      },
      index
    );
  };

  return (
    <div>
      <input type="text" value={text} onChange={handleChange} />
      <button onClick={save}>Save</button>
    </div>
  );
};
export default ListItemForm;
