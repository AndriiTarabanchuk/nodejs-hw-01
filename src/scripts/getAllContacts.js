import { readContacts } from '../utils/readContacts.js';
export const getAllContacts = async () => {
  try {
    const contacts = readContacts();
    return contacts;
  } catch (error) {
    console.log('Error while get all contacts', error);
  }
};

console.log(await getAllContacts());
