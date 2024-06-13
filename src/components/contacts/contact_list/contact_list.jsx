import { useEffect } from 'react';
import css from './contact_list.module.css';
import { ContactItem } from '../contact/contact_item';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContactsAsync } from '../../../store/contacts/slice';
import { useFilteredContacts } from '../../../store/selectors';

export const ContactList = () => {
  const contacts = useSelector(useFilteredContacts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContactsAsync());
  }, [dispatch]);

  return (
    <ul className={css.list}>
      {contacts.map(contact => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};

// export const ContactList = () => {
//   const contacts = useContacts();
//   const filter = useFilter();

//   const filteredContacts = () => {
//     const normalizedFilter = filter.toLowerCase();
//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(normalizedFilter)
//     );
//   };

//   return (
//     <ul className={css.list}>
//       {filteredContacts().map(contact => (
//         <ContactItem key={contact.id} contact={contact} />
//       ))}
//     </ul>
//   );
// };
