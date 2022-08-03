import React, { useRef, useState, useEffect, useContext } from "react";
import styles from "../styleSheets/Filter.module.css";
import { IoIosArrowDown } from "react-icons/io";
import CharacterContext from "../context/DataProvider.js";




export function Filter(props) {

    const item1 = useRef(null);
    const item2 = useRef(null);
    const item3 = useRef(null);
    const {handlePage, setFilters, filters} = useContext(CharacterContext);

    const [isVisible, setIsVisible] = useState([{ visible: false, id: item1 }, { visible: false, id: item2 }, { visible: false, id: item3 }]);

    function handleClick(e) {
        const target = e.currentTarget;

        const newVisible = isVisible.map(el => {
            if (el.id.current === target) {
                if (el.visible === true) {
                    return { visible: false, id: el.id }
                } else {
                    return { visible: true, id: el.id }
                }
            } else {
                return { visible: false, id: el.id }
            }
        })
        setIsVisible(newVisible);
    }

    function handleChange(e) {
        const inputs = e.currentTarget.querySelectorAll("input");
        let status = "",
            species = "",
            gender = ""
        inputs.forEach(input => {
            if(input.checked){
                if(input.name === "status"){
                    status = input.value;
                }else if(input.name === "species"){
                    species = input.value;
                }else{
                    gender = input.value
                }
            }
        })
        handlePage(1);
        setFilters({status: status, species: species, gender: gender, name: filters.name})
    }

    function handleClear(){
        const inputs = document.querySelectorAll('input');
        inputs.forEach(input => {
            if(input.checked){
                input.checked = false;
            }
        })
        handlePage(1);
        setFilters({status: "", species: "", gender: "", name: filters.name})
    }


    useEffect(() => {

        isVisible.forEach(el => {
            if (el.visible) {
                el.id.current.style.setProperty('background-color', "#E7F1FF");
                el.id.current.style.setProperty('color', "#0b5ed7");
                el.id.current.children[1].style.setProperty('transform', 'rotate(180deg)');
                el.id.current.nextElementSibling.style.setProperty('max-height', el.id.current.nextElementSibling.scrollHeight + "px")
            } else {
                el.id.current.style.setProperty('background-color', "transparent");
                el.id.current.style.setProperty('color', "inherit");
                el.id.current.children[1].style.setProperty('transform', 'rotate(0deg)');
                el.id.current.nextElementSibling.style.setProperty('max-height', 0)
            }
        })
    }, [isVisible])


    return (
        <div className={styles.filter}>
            <h2>Filter</h2>
            <button className={styles["btn-clear"]} onClick={handleClear}>Clear Filters</button>

            <div className={styles["accordion-container"]} onChange={handleChange}>
                <div className={styles["accordion-item"]}  >
                    <div className={styles["accordion-item-header"]} onClick={handleClick} id="item1" ref={item1} >
                        <span>Status</span>
                        <IoIosArrowDown size={30} className={styles.icon} />
                    </div>
                    <div className={styles["accordion-item-body"]}  >
                        <form className={styles["accordion-item-body-content"]}>
                            <div className={styles["accordion-item-body-content-flexItem"]}>
                                <input className={styles["input-container__radio"]} value="Alive" type="radio" id="alive" name="status" />
                                <label className={styles["input-container__label"]} htmlFor="alive">Alive</label>
                            </div>
                            <div className={styles["accordion-item-body-content-flexItem"]}>
                                <input className={styles["input-container__radio"]} value="Dead" type="radio" id="dead" name="status"
                                />
                                <label className={styles["input-container__label"]} htmlFor="dead">Dead</label>
                            </div>
                            <div className={styles["accordion-item-body-content-flexItem"]}>
                                <input className={styles["input-container__radio"]} value="Unknown" type="radio" id="Unknown" name="status"
                                />
                                <label className={styles["input-container__label"]} htmlFor="Unknown">Unknown</label>
                            </div>
                        </form>
                    </div>
                </div>

                <div className={styles["accordion-item"]}  >
                    <div className={styles["accordion-item-header"]} onClick={handleClick} id="item2" ref={item2} >
                        <span>Species</span>
                        <IoIosArrowDown size={30} className={styles.icon} />
                    </div>
                    <div className={styles["accordion-item-body"]}  >
                        <form className={styles["accordion-item-body-content"]}>
                            <div className={styles["accordion-item-body-content-flexItem"]}>
                                <input className={styles["input-container__radio"]} value="Human" type="radio" id="human" name="species"
                                />
                                <label className={styles["input-container__label"]} htmlFor="human">Human</label>
                            </div>

                            <div className={styles["accordion-item-body-content-flexItem"]}>
                                <input className={styles["input-container__radio"]} value="Alien" type="radio" id="Alien" name="species"
                                />
                                <label className={styles["input-container__label"]} htmlFor="Alien">Alien</label>
                            </div>

                            <div className={styles["accordion-item-body-content-flexItem"]}>
                                <input className={styles["input-container__radio"]} value="Humanoid" type="radio" id="humanoid" name="species"
                                />
                                <label className={styles["input-container__label"]} htmlFor="humanoid">Humanoid</label>
                            </div>

                            <div className={styles["accordion-item-body-content-flexItem"]}>
                                <input className={styles["input-container__radio"]} value="Poopybutthole" type="radio" id="Poopybutthole" name="species" />
                                <label className={styles["input-container__label"]} htmlFor="Poopybutthole">Poopybutthole</label>
                            </div>

                            <div className={styles["accordion-item-body-content-flexItem"]}>
                                <input className={styles["input-container__radio"]} value="Mythological" type="radio" id="Mythological" name="species" />
                                <label className={styles["input-container__label"]} htmlFor="Mythological">Mythological</label>
                            </div>

                            <div className={styles["accordion-item-body-content-flexItem"]}>
                                <input className={styles["input-container__radio"]} value="Unknown" type="radio" id="unknown" name="species" />
                                <label className={styles["input-container__label"]} htmlFor="unknown">Unknown</label>
                            </div>

                            <div className={styles["accordion-item-body-content-flexItem"]}>
                                <input className={styles["input-container__radio"]} value="Animal" type="radio" id="Animal" name="species" />
                                <label className={styles["input-container__label"]} htmlFor="Animal">Animal</label>
                            </div>

                            <div className={styles["accordion-item-body-content-flexItem"]}>
                                <input className={styles["input-container__radio"]} value="Disease" type="radio" id="Disease" name="species" />
                                <label className={styles["input-container__label"]} htmlFor="Disease">Disease</label>
                            </div>

                            <div className={styles["accordion-item-body-content-flexItem"]}>
                                <input className={styles["input-container__radio"]} value="Robot" type="radio" id="Robot" name="species" />
                                <label className={styles["input-container__label"]} htmlFor="Robot">Robot</label>
                            </div>

                            <div className={styles["accordion-item-body-content-flexItem"]}>
                                <input className={styles["input-container__radio"]} value="Cronenberg" type="radio" id="Cronenberg" name="species" />
                                <label className={styles["input-container__label"]} htmlFor="Cronenberg">Cronenberg</label>
                            </div>
                        </form>
                    </div>
                </div>

                <div className={styles["accordion-item"]}  >
                    <div className={styles["accordion-item-header"]} onClick={handleClick} id="item3" ref={item3} >
                        <span>Gender</span>
                        <IoIosArrowDown size={30} className={styles.icon} />
                    </div>
                    <div className={styles["accordion-item-body"]}  >
                        <form className={styles["accordion-item-body-content"]}>
                            <div className={styles["accordion-item-body-content-flexItem"]}>
                                <input className={styles["input-container__radio"]} value="female" type="radio" id="female" name="gender"
                                />
                                <label className={styles["input-container__label"]} htmlFor="female">Female</label>
                            </div>
                            <div className={styles["accordion-item-body-content-flexItem"]}>
                                <input className={styles["input-container__radio"]} value="male" type="radio" id="male" name="gender"
                                />
                                <label className={styles["input-container__label"]} htmlFor="male">Male</label>
                            </div>
                            <div className={styles["accordion-item-body-content-flexItem"]}>
                                <input className={styles["input-container__radio"]} value="genderless" type="radio" id="genderless" name="gender"
                                />
                                <label className={styles["input-container__label"]} htmlFor="genderless">genderless</label>
                            </div>
                            <div className={styles["accordion-item-body-content-flexItem"]}>
                                <input className={styles["input-container__radio"]} value="unknown" type="radio" id="unknown" name="gender"/>
                                <label className={styles["input-container__label"]} htmlFor="unknown">unknown</label>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}