export const ItemMovie = ({ movie, removeMovie, editMovieData }) => {
  return (
    <article className="peli-item">
      <h3 className="title">{movie?.title}</h3>
      <p className="description">{movie?.description}</p>

      <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
        <button onClick={() => editMovieData(movie)} className="edit">
          Editar
        </button>
        <button onClick={() => removeMovie(movie.id)} className="delete">
          Borrar
        </button>
      </div>
    </article>
  );
};
