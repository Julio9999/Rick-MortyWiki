import { useContext } from "react"
import EpisodeContext from "../context/EpisodeProvider.js";
import LocationContext from "../context/LocationProvider.js";
import { useLocation } from "react-router-dom";
import styles from "../styleSheets/Heading.module.css";

export function Heading(){
    const location = useLocation().pathname;
    const context = location === '/episodes' ? EpisodeContext : LocationContext;
    const dataContext = useContext(context);

    if(dataContext.isLoading){
        return(
            <div className={styles["main-container"]}></div>
        )
    };

    if(location === '/episodes'){
        return(
            <div className={styles["main-container"]}>
                <h1 className={styles.heading}>Episode Name: <span className={styles["text-blue"]}>{dataContext.episodeInfo.current.name}</span></h1>
                <span className={styles.paragraph}>Air Date: {dataContext.episodeInfo.current.date} </span>
            </div>
        );
    }else{
        return(
            <div className={styles["main-container"]}>
                <h1 className={styles.heading}>Location Name: <span className={styles["text-blue"]}>{dataContext.locationInfo.current.name}</span></h1>
                <span className={styles.paragraph}>Dimension: {dataContext.locationInfo.current.dimension}</span>
                <span className={styles.paragraph}>Type: {dataContext.locationInfo.current.type}</span>
            </div>
        );
    }

}