import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  try {
    const contacts = await readContacts();
    const contact = createFakeContact();
    await writeContacts([...contacts, contact]);
  } catch (error) {
    console.log('Error while add contact.', error);
  }
};

addOneContact();
