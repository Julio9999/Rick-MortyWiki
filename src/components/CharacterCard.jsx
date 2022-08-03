import React from "react";
import styles from "../styleSheets/CharacterCard.module.css";
import { Link } from "react-router-dom";

export function CharacterCard(props) {

    return (
        <Link to={`/${props.data.id}`}>
            <div className={styles["character-container"]}>
                <div className={styles["img-container"]}>
                    <img className={styles["img-container__img"]} src={props.data.image} alt={props.data.name} />
                    <span className={props.data.status === 'Alive' ? `${styles["img-status"]} ${styles["img-status-alive"]}` : props.data.status === 'Dead' ? `${styles["img-status"]} ${styles["img-status-dead"]}` : `${styles["img-status"]} ${styles["img-status-unknown"]}`}>
                        {props.data.status}
                    </span>
                </div>
                <div className={styles["text-container"]}>
                    <h3 className={styles["text-container-name"]}>{props.data.name}</h3>
                    <p className={styles["text-container-last"]}>Last Location</p>
                    <p className={styles["text-container-location"]}>{props.data.location.name}</p>
                </div>
            </div>
        </Link>
    );
}