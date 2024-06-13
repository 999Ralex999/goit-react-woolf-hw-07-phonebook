import css from './contact_item.module.css';
import { deleteContactAsync } from '../../../store/contacts/slice';
import { useDispatch } from 'react-redux';

// export const ContactItem = ({ contact }) => {
//   const dispatch = useDispatch();

//   const deleleContactComponent = id => {
//     dispatch(deleteContact(id));
//   };

//   return (
//     <li className={css.item}>
//       <span>
//         {contact.name}: {contact.number}
//       </span>
//       <button
//         className={css.buttonDelete}
//         type="button"
//         onClick={() => deleleContactComponent(contact.id)}
//       >
//         delete
//       </button>
//     </li>
//   );
// };
export const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();

  const deleleContactComponent = id => {
    dispatch(deleteContactAsync());
  };

  return (
    <li className={css.item}>
      <span>
        {contact.name}: {contact.phone}
      </span>
      <button
        className={css.buttonDelete}
        type="button"
        onClick={() => deleleContactComponent(contact.id)}
      >
        delete
      </button>
    </li>
  );
};
