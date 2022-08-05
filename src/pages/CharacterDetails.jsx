import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getData } from "../utils/getData";
import { IoMdArrowRoundBack } from "react-icons/io";
import styles from "../styleSheets/CharacterDetails.module.css";

export function CharacterDetails() {
    const { id } = useParams();
    const [character, setCharacter] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    

    useEffect(() => {
        setIsLoading(true);
        getData(`https://rickandmortyapi.com/api/character/${id}`).then(data => {
            if(data.status === 200){
                Promise.resolve(data.res).then(character => {
                    setCharacter(character);
                    setIsLoading(false);
                })
            }
        })
    }, [id])
    
    if (isLoading) return;

    return (
        <div className={styles["character-container"]}>
            <div className={styles["character-card"]}>
                <h2 className={styles["character-name"]}>{character.name}</h2>
                <div className={styles["img-container"]}>
                    <Link to={-1}>
                        <IoMdArrowRoundBack size={60} className={styles.icon} />
                    </Link>
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