import ReactPaginate from 'react-paginate';
import { useContext } from 'react';
import CharacterContext from '../context/DataProvider.js';
import styles from "../styleSheets/Pagination.module.css";

export function Pagination(){
    const { pages, handlePage } = useContext(CharacterContext);
    if(!pages){
        return;
    }

    return(
        <ReactPaginate
        className={styles.pagination}
        nextClassName={`${styles.btn} ${styles["btn-next-previous"]}`}
        previousClassName={`${styles.btn} ${styles["btn-next-previous"]}`}
        activeLinkClassName={`${styles.btn} ${styles["btn-active"]}`}
        pageLinkClassName={styles.btn}
        disabledClassName={`${styles.off}`}	
        breakLabel="..."
        nextLabel="Next"
        onPageChange={(data)=> handlePage(data.selected + 1)}
        pageRangeDisplayed={3}
        pageCount={pages}
        previousLabel="Prev"
        renderOnZeroPageCount={null}
        />
    );
}