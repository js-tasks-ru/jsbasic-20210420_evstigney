function showSalary(users, age) {
  const lineFeed = `\n`;
  let salaryString = ``;
  return users.filter((item) => item.age <= age)
              .reduce((salaryString, user, index, arr) => {
                salaryString += `${user.name}, ${user.balance}`;

                if (index !== arr.length - 1) salaryString += `${lineFeed}`;
                
                return salaryString;
              }, salaryString);
}