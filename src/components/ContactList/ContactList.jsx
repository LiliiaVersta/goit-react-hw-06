import Contact from "../Contsct/Contact";
import styles from "./ContactList.module.css";
import { useSelector } from "react-redux";
import { selectContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";

export default function ContactList() {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);
  const filteredContacts = contacts
    .filter(
      (item) => item.name.toLowerCase().indexOf(filter.toLowerCase()) >= 0
    )
    .map((item) => {
      return <Contact key={item.id} item={item} />;
    });

  return <ul className={styles.contactList}>{filteredContacts}</ul>;
}
