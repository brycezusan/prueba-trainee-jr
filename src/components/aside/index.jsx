import { AddMovie } from "./AddMovie";
import { SearchMovie } from "./SearchMovie";

export const Aside = ({createMovie ,editMovie , changeQuery ,query}) => {

  return (
    <aside className="lateral">
      <SearchMovie changeQuery={changeQuery} query={query}/>
      <AddMovie createMovie={createMovie} editMovie={editMovie} />
    </aside>
  );
};
