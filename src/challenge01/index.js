const fs = require('fs');

const fileUrl = './src/challenge01/users.txt';

function getRawArrayOfUsers(file) {
  const arr = file.split('\n');
  const arrayWithRawUsers = arr.reduce(
    (allUsers, currentUser) => {
      let currentIndex;

      if (currentUser.length > 0) {
        currentIndex = allUsers[0];

        if (allUsers[currentIndex]) {
          //adding an space on concat strings
          currentUser = ' '.repeat() + currentUser;
          allUsers[currentIndex] = allUsers[currentIndex].concat(currentUser);
        } else {
          allUsers[currentIndex] = currentUser;
        }
      } else {
        allUsers[0]++;
      }

      return [...allUsers];
    },
    [1]
  );
  // Want to remove first element of the array that contains the indexer
  arrayWithRawUsers.shift();
  return arrayWithRawUsers;
}

function parseUsers(userArr) {
  const allParsedUsers = userArr.map((user) => {
    const splittedUser = user.split(' ');
    // I want to get the user into an object by reducing it
    const userObj = splittedUser.reduce((obj, val) => {
      const value = val.split(':');
      return { ...obj, [value[0]]: value[1] };
    }, {});

    return userObj;
  });

  return allParsedUsers;
}

function isValidUser(user) {
  let validUser = 0;
  if (user.hasOwnProperty('usr') && user.usr.length > 0) {
    validUser++;
  }
  if (user.hasOwnProperty('eme') && user.eme.length > 0) {
    validUser++;
  }
  if (user.hasOwnProperty('psw') && user.psw.length > 0) {
    validUser++;
  }
  if (user.hasOwnProperty('age') && user.age.length > 0) {
    validUser++;
  }
  if (user.hasOwnProperty('loc') && user.loc.length > 0) {
    validUser++;
  }
  if (user.hasOwnProperty('fll') && user.fll.length > 0) {
    validUser++;
  }
  return validUser === 6;
}

function getNumberOfValidUsersAndLastUser(users) {
  return users.reduce(
    (acc, user) => {
      if (isValidUser(user)) {
        acc['amount'] ++;
        acc['lastUser'] = user.usr;

      }
    return acc;
    },
    { amount: 0,lastUser: null }
  );
}


function checkFile(file) {
  const arrayWithRawUsers = getRawArrayOfUsers(file);
  const allParsedUsers = parseUsers(arrayWithRawUsers);
  const res = getNumberOfValidUsersAndLastUser(allParsedUsers)
  console.log('RESULT',res);
}
fs.readFile(fileUrl, 'utf8', (err, data) => checkFile(data));
