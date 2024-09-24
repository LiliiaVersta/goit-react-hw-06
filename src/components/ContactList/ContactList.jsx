import Contact from "../Contsct/Contact"
import styles from './ContactList.module.css';

export default function ContactList({ contacts,onDelete}) {
    const contactCartsList = contacts.map((item) => {
        return <Contact key={item.id} item={item} onDelete={onDelete}/>
    })
    return (
        <ul className={styles.contactList}>{ contactCartsList}</ul>
    )
}
