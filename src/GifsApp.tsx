import { useState } from "react";
import { GifList } from "./gifs/components/GifList";
import { PreviousSearches } from "./gifs/components/PreviousSearches";
import { CustomHeader } from "./shared/components/CustomHeader";
import { SearchBar } from "./shared/components/SearchBar";
import type { Gif } from "./gifs/interfaces/gif.interface";
import { getGifsByQuery } from "./gifs/actions/get-gifs-by-query.action";

export const GifsApp = () => {
  const [previousSearches, setPreviousSearches] = useState<string[]>([]);
  const [gifs, setGifs] = useState<Gif[]>([])
  const handleSearchesClicked = (search: string) => {
    console.log({ search });
  };

  const handleSearch = (query: string = "") => {
    // console.log({ query });
    const queryMin = query.toLowerCase().trim();
    if (queryMin.length === 0) {
      return;
    }
    if (previousSearches.includes(queryMin)) {
      return;
    }
    setPreviousSearches([query, ...previousSearches].slice(0, 7));

    const gifsResponse = getGifsByQuery(query);

    gifsResponse.then((gifs) => {
      setGifs(gifs)
    }).catch(() => {
      console.log("Error al solicitar los gifs");

    })
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
      <GifList gifs={gifs} />
    </>
  );
};
