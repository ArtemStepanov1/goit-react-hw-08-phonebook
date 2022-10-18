import { useSelector } from "react-redux";
import { ContactList, Spin } from "./ContactsList.styled";
import { ContactListItem } from "../ContactListItem/ContactListItem";
import { selectAllContacts } from "redux/contacts/selectors";

export const ContactsList = () => {
    const contacts = useSelector(selectAllContacts);
    const filter = useSelector(state => state.filter);
    const selectLoading = false;
    const filteredContacts = contacts?.filter(item =>
            item.name.toLowerCase().includes(filter.toLowerCase()));
    
    return(
        <>
            {selectLoading ? (
                <Spin />
            ) : (
                <ContactList>
                    {filteredContacts?.map(contact => (
                        <ContactListItem key={contact.id} {...contact} />
                    ))}
                </ContactList>
            )}
        </>
    )
}