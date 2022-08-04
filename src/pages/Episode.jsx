import React from "react";
import { Select } from "../components/Select";
import styles from "../styleSheets/Episodes.module.css";
import { CharactersGrid } from "../components/CharactersGrid";
import { Heading } from "../components/Heading";
import { EpisodeProvider } from "../context/EpisodeProvider";

export function Episode() {
  return (
    <div className={styles["main-container"]}>
      <EpisodeProvider>
        <Heading />
        <div className={styles["episode-container"]}>
          <Select />
          <CharactersGrid />
        </div>
      </EpisodeProvider>
    </div>
  );
}
