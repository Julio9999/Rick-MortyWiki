import React, { useContext} from "react";
import styles from "../styleSheets/Form.module.css";
import CharacterContext from "../context/DataProvider";
import { debounce } from "lodash";
//import "boostrap";

export function Form() {
    const { setFilters, filters } = useContext(CharacterContext);


    const handleChange = debounce((e) => {
        setFilters({status: filters.status, species: filters.species, gender: filters.gender, name: e.target.value});
    }, 500)



    function handleSubmit(e){
        e.preventDefault();
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <h1 className={styles["form-legend"]}>Characters</h1>
            <div className={styles["input-group"]}>
                <input className={styles["input-group__input"]} type="search" placeholder="Search for characters"
                onChange={handleChange} />
                <button className={styles["input-group__buttom"]} type="submit">Search</button>
            </div>
        </form>
    )
}