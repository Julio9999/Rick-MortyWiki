import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getData } from "../utils/getData";
import styles from "../styleSheets/CharacterDetails.module.css";

export function CharacterDetails() {
    const { id } = useParams();
    const [character, setCharacter] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        getData(`https://rickandmortyapi.com/api/character/${id}`).then(data => {
            setCharacter(data);
            setIsLoading(false);
        })
    }, [id])
    
    if (isLoading) return;

    return (
        <div className={styles["character-container"]}>
            <div className={styles["character-card"]}>
                <h2 className={styles["character-name"]}>{character.name}</h2>
                <div>
                    <img src={character.image} alt={character.name} />
                </div>
                <div className={styles["text-container"]}>
                    {/* <div> */}
                        <span 
                        className={character.status === "Alive" ? styles["text-status--alive"]
                        : character.status === "Dead" ? styles["text-status--dead"] : styles["text-status--unknown"]}>{character.status}
                        </span>
                        <span><span className={styles["text-bold"]}>Gender:</span> {character.gender}</span>
                        <span><span className={styles["text-bold"]}>Location:</span> {character.location.name}</span>
                        <span><span className={styles["text-bold"]}>Origin:</span> {character.origin.name}</span>
                        <span><span className={styles["text-bold"]}>Species:</span> {character.species} </span>
                    {/* </div> */}
                </div>
            </div>
        </div>
    );
}