import Contact from "../Contsct/Contact";
import styles from "./ContactList.module.css";
import { useSelector, useDispatch } from "react-redux";
import { selectContacts, deleteContact } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";

export default function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);
  const contactsFilter = contacts.map((item) => {
    contacts.filter((item) => item.name.indexOf(filter) >= 0);

    return (
      <Contact
        key={item.id}
        item={item}
        onDelete={() => {
          dispatch(deleteContact(item.id));
        }}
      />
    );
  });
  return <ul className={styles.contactList}>{contactsFilter}</ul>;
}
