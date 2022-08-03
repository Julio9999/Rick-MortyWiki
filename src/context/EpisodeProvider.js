import { createContext, useState, useEffect, useRef } from "react";
import { getData } from "../utils/getData.js";

const EpisodeContext = createContext();

export function EpisodeProvider({ children }) {

    const [characters, setCharacters] = useState([]);
    const episodeInfo = useRef(null);
    const [episodeNumber, setEpisodeNumber] = useState(1);
    const page = useRef(1);
    const count = useRef(51);
    const [isLoading, setIsLoading] = useState(true);


    function handleChange(num, pageNumber) {
        if (page.current !== pageNumber) {
            page.current = pageNumber;
        }
        setEpisodeNumber(num);
    }


    useEffect(() => {

        setIsLoading(true)

        getData(`https://rickandmortyapi.com/api/episode/${episodeNumber}`).then(episode => {
            episodeInfo.current = { name: episode.name, date: episode.air_date };
            setCharacters([]);
            (async () => {
                for (let i = 0; i < episode.characters.length; i++) {
                    await getData(episode.characters[i]).then(res => setCharacters((prev) => prev.concat(res)));
                }
            })();
            setIsLoading(false);
        })


    }, [episodeNumber])


    const data = { characters, count, episodeInfo, handleChange, page, isLoading }

    return (
        <EpisodeContext.Provider value={data}>{children}</EpisodeContext.Provider>
    )
}

export default EpisodeContext;