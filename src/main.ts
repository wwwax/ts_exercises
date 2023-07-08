/**
 * exercise 01
 */

type User = {
  name: string;
  age: number;
  occupation: string;
};

const users: User[] = [
  {
    name: 'Max Ivanov',
    age: 35,
    occupation: 'Software Engineer',
  },
  {
    name: 'Bob Johnson',
    age: 22,
    occupation: 'Project Manager',
  },
];

function logPerson(user: User) {
  console.group('####');
  console.log('user.name :>> ', user.name);
  console.log('user.age :>> ', user.age);
  console.log('user.occupation :>> ', user.occupation);
  console.groupEnd();
}

users.forEach(logPerson);
