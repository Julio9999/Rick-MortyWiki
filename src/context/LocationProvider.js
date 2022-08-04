import { createContext, useRef, useEffect, useState } from "react";
import { getData } from "../utils/getData.js";


const LocationContext = createContext();

export function LocationProvider({ children }){
    const count = useRef(null);
    const locationInfo = useRef(null);
    const [locationNumber, setLocationNumber] = useState(1);
    const [characters, setCharacters] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    function handleChange(num){
        setLocationNumber(num);
    }

    useEffect(() => {
        getData(`https://rickandmortyapi.com/api/location`).then(data => {
            if(data.status === 200){
                Promise.resolve(data.res).then(res => {
                    count.current = res.info.count;
                })
            }
        })
    }, [])

    useEffect(()=> {

        setIsLoading(true);

        getData(`https://rickandmortyapi.com/api/location/${locationNumber}`).then(data => {
            if(data.status === 200){
                Promise.resolve(data.res).then(location => {
                    locationInfo.current = {name: location.name, dimension: location.dimension, type: location.type}
                    setCharacters([]);
                    (async () => {
                        for(let i=0;i<location.residents.length; i++){
                            await getData(location.residents[i]).then(data => {
                                if(data.status === 200){
                                    Promise.resolve(data.res).then(character => setCharacters((prev) => prev.concat(character)))
                                }
                            })
                        }
                        setIsLoading(false);
                    })();
                })
            }
        })
    }, [locationNumber])

    const data = {count, handleChange, locationInfo, characters, isLoading};


    return <LocationContext.Provider value={data}>{children}</LocationContext.Provider>
}

export default LocationContext;