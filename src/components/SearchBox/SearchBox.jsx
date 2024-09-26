import styles from "./SearchBox.module.css";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";

export default function SearchBox() {
  const dispatch = useDispatch();
  const [filter, setFilter] = useState("");
  useEffect(() => {
    dispatch(changeFilter(filter));
  }, [filter]);

  return (
    <div className={styles.searchContainer}>
      <label className={styles.searchLabel}>Find contacts by name</label>
      <input
        className={styles.searchInput}
        type="text"
        onChange={(e) => {
          setFilter(e.target.value);
        }}
        value={filter}
      />
    </div>
  );
}
