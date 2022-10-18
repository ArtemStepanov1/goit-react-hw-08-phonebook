import { Box, Spinner } from 'theme-ui';
import { ContactsForm } from "components/Form/Form";
import { Filter } from 'components/Filter';
import { ContactsList } from "components/ContactsList/ContactsList";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from "redux/contacts/operations";
import { selectLoading } from 'redux/contacts/selectors';

export default function Contacts(){
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading)

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  
  return (
    <>
      <Box sx={{ maxWidth: 640, py: 16, mx: 'auto'  }}>
        <Box sx={{ display: 'flex', gap: 16 }}>
          <h2>Phonebook</h2>
          {isLoading && <Spinner width="24px" height="24px"/>}
        </Box>
        
        <ContactsForm />
        <h3 style={{ marginBottom: "16px" }}>Contacts</h3>
        <Filter />
        <ContactsList />
        
      </Box>
    </>
  ) 
}