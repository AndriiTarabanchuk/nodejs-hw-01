import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
  try {
    await writeContacts([]);
  } catch (error) {
    console.log('Error while remove all contacts.', error);
  }
};

removeAllContacts();
