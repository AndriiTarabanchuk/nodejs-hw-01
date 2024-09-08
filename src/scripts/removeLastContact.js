import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  try {
    const contacts = await readContacts();
    contacts.length = contacts.length - 1;

    await writeContacts(contacts);
  } catch (error) {
    console.log('Error while remove last contact.', error);
  }
};

removeLastContact();
