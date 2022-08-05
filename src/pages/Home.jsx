import React from "react";
import { Form } from "../components/Form";
import { CharactersGrid } from "../components/CharactersGrid";
import { Filter } from "../components/Filter";
import styles from "../styleSheets/Home.module.css";
import { DataProvider } from "../context/DataProvider";
import { Pagination } from "../components/Pagination";
import { ButtonTopBottom } from "../components/ButtonTopBottom";

export function Home() {

    return (
        <main className={styles["home-container"]}>
            <DataProvider>
                <ButtonTopBottom />
                <Form />
                <div className={styles["main-content"]} >
                    <Filter />
                    <CharactersGrid />
                </div>
                <Pagination />
            </DataProvider>
        </main>
    );
}