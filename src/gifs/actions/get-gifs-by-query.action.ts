import axios from "axios";
import type { GiphyResponse } from "../interfaces/giphy.response";
import type { Gif } from "../interfaces/gif.interface";

const giphyUrl = import.meta.env.VITE_GIPHY_URL;
const giphyApiKey = import.meta.env.VITE_GIPHY_API_KEY;

export const getGifsByQuery = async (query: string): Promise<Gif[]> => {
  const response = await axios.get<GiphyResponse>(`${giphyUrl}/search`, {
    params: {
      q: query,
      limit: 10,
      lang: "es",
      api_key: giphyApiKey,
    },
  });

  return response.data.data.map((gif) => ({
    id:gif.id,
    title: gif.title,
    url: gif.images.original.url,
    width: Number(gif.images.original.width),
    height:Number( gif.images.original.height)
  }))

};

// https://api.giphy.com/v1/gifs/search?api_key=yS18FdwRhAqqEsWZx2LwR6NNxKBsPkJF&q=dragon+ball&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips
