import { useId } from "react";

export const SearchMovie = ({ changeQuery , query }) => {
  const id = useId();
  return (
    <div className="search">
      <label className="title" htmlFor={`search${id}`}>
        {" "}
        Buscador
      </label>
      <form>
        <input type="text" id={`search${id}`} onChange={changeQuery} value={query}/>
        <button id="search">Buscar</button>
      </form>
    </div>
  );
};
