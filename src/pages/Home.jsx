import React from "react";
import { Form } from "../components/Form";
import { CharactersGrid } from "../components/CharactersGrid";
import { Filter } from "../components/Filter";
import styles from "../styleSheets/Home.module.css";
import { DataProvider } from "../context/DataProvider";
import { Pagination } from "../components/Pagination";

export function Home() {

    return (
        <main className={styles["home-container"]}>
            <DataProvider>
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