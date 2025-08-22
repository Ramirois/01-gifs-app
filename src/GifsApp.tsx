import { useState } from "react";
import { GifList } from "./gifs/components/GifList";
import { PreviousSearches } from "./gifs/components/PreviousSearches";
// import { mockGifs } from "./mock-data/gifs.mock";
import { CustomHeader } from "./shared/components/CustomHeader";
import { SearchBar } from "./shared/components/SearchBar";
import { getGifsByQuery } from "./gifs/actions/get-gifs-by-query.action";
import type { Gif } from "./gifs/interfaces/gif.interface";

export const GifsApp = () => {
  const [previousSearches, setPreviousSearches] = useState(["dragon ball z"]);
  const [gif, setGif] = useState<Gif[]>([]);

  const handleSearchesClicked = (search: string) => {
    console.log({ search });
  };

  const handleSearch = async (query: string = "") => {
    const queryMin = query.toLowerCase().trim();
    if (queryMin.length === 0) {
      return;
    }
    if (previousSearches.includes(queryMin)) {
      return;
    }
    setPreviousSearches([query, ...previousSearches].slice(0, 7));

    const gifResponse = await getGifsByQuery(query);
    setGif(gifResponse);
  };

  return (
    <>
      <CustomHeader
        title="Buscador de Gifs"
        description="Descubre y comparte el gif perfecto"
      />

      {/* Search */}
      <SearchBar placeholder="Busca lo que quieras" onQuery={handleSearch} />

      {/* Búesquedas previas */}
      <PreviousSearches
        searches={previousSearches}
        onLabelClicked={handleSearchesClicked}
      />

      {/* Gifs */}
      <GifList gifs={gif} />
    </>
  );
};
