import { useState } from "react";

import ListItem from "./listItem";
import ListItemForm from "./listItemForm";

// type Todo {
//     id: Number
//     text:String
// isEditable: Boolean
// }

const ListView = () => {
  const [toDos, setToDos] = useState([]);

  const getNewTodo = () => ({
    text: "",
    isEditable: true,
  });

  const addTodo = () => {
    setToDos([...toDos, getNewTodo()]);
  };

  const handleEdit = (id) => {};

  const handleDelete = (index) => {
    setToDos(toDos.splice(index, 1));
  };

  const handleSave = (todo, index) => {
    const newToDos = [
      ...toDos.splice(index, 1, {
        ...todo,
        isEditable: false,
      }),
    ];

    console.log({ toDos, newToDos });
    setToDos();

    setToDos([...newToDos]);
  };

  return (
    <div>
      {toDos.map((todo, index) =>
        todo.isEditable ? (
          <ListItemForm
            {...{ todo, handleSave, index }}
            key={`EditListItem-${index}`}
          />
        ) : (
          <ListItem
            {...{ todo, handleDelete, handleEdit }}
            key={`istItem-${index}`}
          />
        )
      )}
      <button onClick={addTodo}>Add Todo</button>
    </div>
  );
};

export default ListView;
