import { faker } from '@faker-js/faker';
import { createFakeContact } from '../utils/createFakeContact.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  try {
    const newContacts = faker.helpers.multiple(createFakeContact, {
      count: number,
    });
    await writeContacts(newContacts);
  } catch (error) {
    console.log('Error while generate contacts.', error);
  }
};

generateContacts(5);
