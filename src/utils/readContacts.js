import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const readContacts = async () => {
  try {
    const contacts = await fs.readFile(PATH_DB);
    return JSON.parse(contacts);
  } catch (error) {
    console.log('Error while read contacts.', error);
  }
};

// console.log(await readContacts());
