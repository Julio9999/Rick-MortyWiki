import { useContext, useRef } from "react";
import { useLocation } from "react-router-dom";
import styles from "../styleSheets/Select.module.css";
import EpisodeContext from "../context/EpisodeProvider.js";
import LocationContext from "../context/LocationProvider.js"

export function Select(){
    const location = useLocation().pathname;
    const context = location === '/episodes' ? EpisodeContext : LocationContext;
    const {handleChange, count} = useContext(context);
    const page = useRef(1);
    const episode = useRef(1);



    function Change(e){
        if(location === '/episodes'){
            const dataJson = JSON.parse(e.target.value);
            // dataContext.handleChange(dataJson.episode, dataJson.page);
            handleChange(dataJson.episode, dataJson.page);
        }else{
            // dataContext.handleChange(e.target.value);
            handleChange(e.target.value);
        }
    }
    page.current = 1;
    episode.current = 1;

    if(location === '/episodes'){
        return(
            <form className={styles["main-container"]}>
                <h2>Pick Episode</h2>
                <select className={styles.select} onChange={Change}>
                    <option defaultValue>Choose...</option>
                    {[...Array(count.current).keys()].map((el, index) => {
                        if(index % 20 === 0 && index >= 20){
                            page.current = page.current + 1;
                            episode.current += 1;
                        }else{
                            if(index > 0 ) episode.current += 1;
                        }
                        return <option key={el} value={JSON.stringify({episode:episode.current, page:page.current})}>Episode - {el+1}</option>
                    })}
                </select>
            </form>
        );
    }else{
        return(
            <form className={styles["main-container"]}>
                <h2>Pick Location</h2>
                <select className={styles.select} onChange={Change}>
                    <option defaultValue>Choose...</option>
                    {[...Array(count.current).keys()].map((el) => {
                        return <option key={el} value={el+1}>Location - {el+1}</option>
                    })}
                </select>
            </form>
        );
    }
}