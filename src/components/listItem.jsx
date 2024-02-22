const ListItem = ({ todo, handleEdit, handleDelete }) => {
  const { id, text } = todo;

  return (
    <div className="listItem">
      <p>{text}</p>
      <button onClick={(id) => handleEdit(id)}>Edit</button>
      <button onClick={(id) => handleDelete(id)}>Delete</button>
    </div>
  );
};

export default ListItem;
