import { useEffect, useId, useState } from "react";

export const AddMovie = ({ createMovie , editMovie }) => {
  const id = useId();
  const [data, setData] = useState({
    id:null,
    title: "",
    description: "",
  });

  useEffect(() => {
    if (editMovie) {
      setData(editMovie);
    }
  }, [editMovie]);

  const onSubmitMovie = (e) => {
    e.preventDefault();

    if (data.title === "" || data.description === "") return
    createMovie(data);
    setData({
      title: "",
      description: "",
      id:null
    })
  };

  return (
    <div className="add">
      <h3 className="title" htmlFor={`title${id}`}>
        {editMovie.id ? "Editar Pelicula" : "Nueva Pelicula"}
      </h3>
      <form onSubmit={onSubmitMovie}>
        <input
          onChange={(e) => setData({ ...data, title: e.target.value })}
          type="text"
          id={`title${id}`}
          value={data.title}
          placeholder="Titulo"
        />
        <textarea
          value={data.description}
          onChange={(e) => setData({ ...data, description: e.target.value })}
          placeholder="Descripción"
        ></textarea>
        <input type="submit" id="save" value="Guardar" />
      </form>
    </div>
  );
};
