import styles from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

export default function Contact({ item }) {
  const dispatch = useDispatch();
  return (
    <li className={styles.contactItem}>
      <div>
        <div className={styles.contactContext}>
          <span>{item.name}</span>
        </div>
        <div className={styles.contactContext}>
          <span>{item.number}</span>
        </div>
      </div>
      <button onClick={() => dispatch(deleteContact(item.id))}>Delete</button>
    </li>
  );
}
