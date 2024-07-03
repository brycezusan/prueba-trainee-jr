import { useEffect, useMemo, useState } from "react";
import { Aside, Footer, Header, ListMovies, Navegacion } from "./components";

function App() {
  const initialState = () => {
    const moviesLS = localStorage.getItem("movies");
    return moviesLS ? JSON.parse(moviesLS) : [];
  };

  const [movies, setMovies] = useState(initialState());
  const [editMovie, setEditMovie] = useState({});
  const [query, setQuery] = useState("");

  useEffect(() => {
    const guardarLocalStorage = () => {
      localStorage.setItem("movies", JSON.stringify(movies));
    };
    guardarLocalStorage();
  }, [movies]);

  const createMovie = (data) => {
    const { id } = data;

    if (id) {
      const index = movies.findIndex((movie) => movie.id === id);
      const newMovie = [...movies];
      newMovie[index] = data;
      setMovies(newMovie);
      setEditMovie({});
    } else {
      const newMovie = {
        ...data,
        id: crypto.randomUUID(),
      };
      setMovies([...movies, newMovie]);
    }
  };

  const removeMovie = (id) => {
    const confirm = window.confirm("Deseas borrar esta pelicula?");
    if (!confirm) return;
    setMovies(movies.filter((movie) => movie.id !== id));
  };

  const editMovieData = (data) => {
    setEditMovie(data);
  };

  const changeQuery = (e) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
  };

  const filterMovies = useMemo(
    () =>
      query
        ? movies.filter((movie) =>
            movie.title.toLowerCase().includes(query.toLowerCase())
          )
        : movies,

    [movies, query]
  );

  return (
    <>
      <div className="layout">
        <Header />

        <Navegacion />

        <ListMovies
          movies={filterMovies}
          removeMovie={removeMovie}
          editMovieData={editMovieData}
        />
        <Aside
          createMovie={createMovie}
          editMovie={editMovie}
          changeQuery={changeQuery}
          query={query}
        />
        <Footer />
      </div>
    </>
  );
}

export default App;
