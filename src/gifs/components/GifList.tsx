import { useEffect } from 'react'
import type { Gif } from '../../mock-data/gifs.mock'

interface Props {
    gifs: Gif[]
}

export const GifList = ({gifs}: Props) => {
    const giphyUrl = import.meta.env.GIPHY_URL;
    const giphyApiKey = import.meta.env.GIPHY_API_KEY;
    const cantidad = 10;
    const url = `${giphyUrl}/trending?api_key=${giphyApiKey}&limit=${cantidad}`;
    useEffect(() => {
        const response = fetch(url, {
            method: 'GET',
        });

        const data = await 
        
    }, [])

  return (
    <div className="gifs-container">
            {
                gifs.map((gif) => (
                    <div key={gif.id} className="gif-card">
                        <img src={gif.url} alt={gif.title} />
                        <h3>{gif.title}</h3>
                        <p>
                            {gif.width}x{gif.height} (1.5mb)
                        </p>
                    </div>
                ))
            }
        </div>
  )
}
