import styles from './SearchBox.module.css';

export default function SearchBox({ changeFilterHandler, filter }) {
    return (
    <div className={styles.searchContainer}>
            <label
                className={styles.searchLabel}>
				Find contacts by name
		</label>
    <input
        className={styles.searchInput}
        type="text"
        onChange={changeFilterHandler}
        value={filter} />
    </div>
    
    )
    

}