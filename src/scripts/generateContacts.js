import { faker } from '@faker-js/faker';
import { createFakeContact } from '../utils/createFakeContact.js';
import { writeContacts } from '../utils/writeContacts.js';
import { readContacts } from '../utils/readContacts.js';

const generateContacts = async (number) => {
  try {
    const contacts = await readContacts();
    const newContacts = faker.helpers.multiple(createFakeContact, {
      count: number,
    });
    await writeContacts(contacts.concat(newContacts));
  } catch (error) {
    console.log('Error while generate contacts.', error);
  }
};

generateContacts(5);
