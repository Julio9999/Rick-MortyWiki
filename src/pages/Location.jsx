import React from "react";
import { Heading } from "../components/Heading";
import { Select } from "../components/Select";
import { CharactersGrid } from "../components/CharactersGrid";
import { LocationProvider } from "../context/LocationProvider";
import { ButtonTopBottom } from "../components/ButtonTopBottom";
import styles from "../styleSheets/Location.module.css";

export function Location() {
    return (
        <div className={styles["main-container"]}>
            <LocationProvider>
                <ButtonTopBottom />
                <Heading  />
                <div className={styles["episode-container"]}>
                    <Select  />
                    <CharactersGrid />
                </div>
            </LocationProvider>
        </div>
    )
}