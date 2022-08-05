import React, { useContext } from "react";
import { CharacterCard } from "../components/CharacterCard.jsx";
import styles from "../styleSheets/CharactersGrid.module.css";
import CharacterContext from "../context/DataProvider.js";
import EpisodeContext from "../context/EpisodeProvider.js";
import LocationContext from "../context/LocationProvider.js"
import { useLocation } from "react-router-dom";
import { Spinner }  from "../components/Spinner.jsx";

export function CharactersGrid() {
    const location = useLocation().pathname;
    const context = location === '/' ? CharacterContext : location === '/episodes' ?  EpisodeContext : LocationContext;

    const dataContext = useContext(context);
    if(dataContext.isLoading){
        return(
            <div className={styles["grid-container"]}>
                <Spinner />
            </div>
        )
    }

    if(location === '/'){
        if (dataContext.pages === 0) {
            return <div className={styles["grid-container"]}>
                <p>No Characters Found :/</p>
            </div>;
        }
        return (
            <div className={styles["grid-container"]}>{dataContext.characters.results.map(el => (
                <CharacterCard data={el} key={el.id} />
            ))}</div>
        );
    }else {
        if(dataContext.characters.length === 0){
            return (
                <div className={styles["grid-container"]}>there is nobody here :/</div>
            );
        }else{
            return (
                <div className={styles["grid-container"]}>{dataContext.characters.map(el => (
                    <CharacterCard data={el} key={el.id} />
                ))}</div>
            );
        }
    }
}