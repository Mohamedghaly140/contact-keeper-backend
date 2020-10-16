import React, { Fragment, useContext } from "react";
import ContactItem from "../ContactItem/ContactItem";
import ContactContext from "../../../Context/Contact/contactContext";

const Contacts = () => {
	const contactContext = useContext(ContactContext);

	const { contacts } = contactContext;

	return (
		<Fragment>
			{contacts.map(contact => (
				<ContactItem key={contact.id} contact={contact} />
			))}
		</Fragment>
	);
};

export default Contacts;
