import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const writeContacts = async (updatedContacts) => {
  try {
    const data = JSON.stringify(updatedContacts);
    console.log(data);
    await fs.writeFile(PATH_DB, data);
  } catch (error) {
    console.log('Error while write contacts.', error);
  }
};

// console.log(
//   await writeContacts([
//     {
//       id: 101,
//       name: 'Heida1',
//       phone: '460-527-2499',
//       email: 'Heida1@bigcartel.com',
//       job: 'Computer Analyst II',
//     },
//     {
//       id: 102,
//       name: 'Karoly',
//       email: 'klorain9@posterous.com',
//       phone: '337-987-1851',
//       job: 'Operator',
//     },
//   ]),
// );
