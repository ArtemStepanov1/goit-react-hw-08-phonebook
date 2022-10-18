import { MdClose } from "react-icons/md";
import {
    ContactItem,
    DelContactBtn,
} from "./ContactListItem.styled";
import { useDispatch } from "react-redux";
import { deleteContact } from "redux/contacts/operations";

export const ContactListItem = (contact) => {
    const { id, name, number } = contact;
    const dispatch = useDispatch();
    const handleDelete = () => dispatch(deleteContact(id))

    return(
        <ContactItem key={id}>
            <label>{`${name}: ${number}`}</label>
            <DelContactBtn
                type="button"
                onClick={handleDelete}
                >
                <MdClose className="delContactBtnIcon"/>
            </DelContactBtn>
        </ContactItem>
    );
};