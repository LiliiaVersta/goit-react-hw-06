import { useState, useEffect } from "react";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import contacts from "./contacts.json"


export const App = () => {
  const [users, setUsers] = useState(() => {
    const localStorageContacts = JSON.parse(localStorage.getItem("contacts"));
    if (localStorageContacts ) {
      return [...localStorageContacts ];
    }
    return [...contacts];
  })
  // const [filtered, setFiltered] = useState([])
  const [filter, setFilter] = useState('')
  const handelChangeFilter = (event) => {
    setFilter(event.target.value.toLowerCase());
  }
    useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(users));
    }, [users])
  const filtered = users.filter((itm) => {

    return itm.name.toLowerCase().includes(filter) });
  // useEffect(() => {
  //   if (!filter) {
  //     setFiltered(users);
  //   } else {
  //     let filtered = users.filter((itm) => {
  //       return itm.name.toLowerCase().includes(filter);
  //     });
  //     setFiltered([...filtered]);
  //   }
  // }, [filter, users]);
  const addContact = (newContact) => {
    setUsers((u)=>[...u, newContact]
    )
  }
  const handleDeleteContact = (id) => {
		setUsers((u) =>
			u.filter((itm) => itm.id !== id)
		);
	}
  return (
  <div>
  <h1>Phonebook</h1>
      <ContactForm add={addContact} />
      <SearchBox filter={filter} changeFilterHandler={handelChangeFilter} />
      <ContactList contacts={filtered} onDelete={handleDeleteContact}/>
</div>

)
};
