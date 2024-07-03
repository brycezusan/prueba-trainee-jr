import { ItemMovie } from "./ItemMovie";

export const ListMovies = ({ movies ,removeMovie , editMovieData}) => {
  const isEmpty = movies?.length === 0;
  return (
    <>
      {isEmpty && <p>No hay pelis - lista vacia</p>}
      {!isEmpty && (
        <section id="content" className="content">
          {movies?.map((movie) => (
            <ItemMovie key={movie.id} movie={movie} removeMovie={removeMovie} editMovieData={editMovieData}/>
          ))}
        </section>
      )}
    </>
  );
};
