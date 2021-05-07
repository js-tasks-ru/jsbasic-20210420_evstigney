function showSalary(users, age) {
  const lineFeed = '\n';
  return users.filter((item) => item.age <= age)
              .map(({name, balance} = {}) => {

                if (!name || !balance) return;

                return `${name}, ${balance}`;
              })
              .join(`${lineFeed}`);
}