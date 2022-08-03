import { createContext, useState, useEffect } from "react";
import { getData } from "../utils/getData.js";

const CharacterContext = createContext();


export function DataProvider({ children }) {

	const [characters, setCharacters] = useState([]);
	const [pages, setPages] = useState(1);
	const [currentPage, setCurrentPage] = useState(1);
	const [filters, setFilters] = useState({ status: "", gender: "", species: "", name: ""});


	useEffect(() => {
		getData(`https://rickandmortyapi.com/api/character/?page=${currentPage}&name=${filters.name}&status=${filters.status}&gender=${filters.gender}&species=${filters.species}`).then(data => {
			setCharacters(data);
			setPages(data?.info.pages);
		})
		
	}, [currentPage, filters])

	function handleCharacter(url) {
		getData(url).then(data => {
			setCharacters(data);
		})
	}

	function handlePage(param) {
		setCurrentPage(param);
	}


	const data = { characters, handleCharacter, pages, handlePage, setFilters, filters}

	return (
		<CharacterContext.Provider value={data}>{children}</CharacterContext.Provider>
	)

}
export default CharacterContext;