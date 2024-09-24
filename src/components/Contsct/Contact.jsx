import styles from './Contact.module.css';

export default function Contact({ item, onDelete }) {
    return <li className={styles.contactItem}>
            <div>
             <div className={styles.contactContext}>
                <span>{item.name}</span>
             </div>
             <div className={styles.contactContext}>
                <span>{item.number}</span>
             </div>
            </div>
            <button onClick={() => onDelete(item.id)}>Delete</button>
        </li>
}